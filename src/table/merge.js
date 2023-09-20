export default {
  data() {
    return {
      originSpanMehtod: [],
      curRowSpan: {},
      mergeKeyIndex: [],
      mergeMap: {}, //  [col,col,col]
      bufferMergeMap: {}, // 第一次的rowspan
    };
  },
  props: {
    merges: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    data(newVal) {
      this.initMergeMap(newVal);
    },
    columns(newVal) {
      this.mergeKeyIndex = this.getMergeKeyIndex(newVal);
    },
  },
  created() {
    this.initSpanMethod();
    this.mergeKeyIndex = this.getMergeKeyIndex(this.columns);
    // this.initMergeArr()
  },
  mounted() {
    this.initMergeMap(this.data);
  },
  // updated
  methods: {
    initSpanMethod() {
      if (this.$attrs["span-method"]) return;
      else if (this.merges) this.attrs["span-method"] = this.handlerMerge;
    },
    // 初始化映射
    initMergeMap(data = this.data) {
      // const propsArr = this.getRowKey()
      let rowSpanMap = {};
      data.forEach((row, index) => {
        const nextRow = data[index + 1] || {};

        this.merges.forEach((key) => {
          if (!this.mergeMap[key]) this.mergeMap[key] = [];

          if (row[key] === nextRow[key]) {
            if (rowSpanMap[key]) {
              this.mergeMap[key].push({ rowspan: 0, colspan: 1 });
              rowSpanMap[key].rowspan += 1;
            } else {
              rowSpanMap[key] = { rowspan: 1, colspan: 1 };
              this.mergeMap[key].push(rowSpanMap[key]);
            }
          } else {
            if (rowSpanMap[key]) {
              rowSpanMap[key].rowspan += 1;
              this.mergeMap[key].push({ rowspan: 0, colspan: 1 });
            } else this.mergeMap[key].push({ rowspan: 1, colspan: 1 });
            rowSpanMap[key] = null;
          }
        });
      });

      // console.log(this.mergeMap)
    },
    fixBufferMergeMap(mergeKey, rowIndex) {
      // 修改第一个
      if (rowIndex === this.bufferIdx) {
        //  是否需要重新计算 rowspan
        if (this.mergeMap[mergeKey][this.bufferIdx].rowspan === 0) {
          return {
            rowspan: this.mergeMap[mergeKey]
              .slice(this.bufferIdx)
              .findIndex((val) => val.rowspan !== 0),
            colspan: 1,
          };
        } else return this.mergeMap[mergeKey][this.bufferIdx];
      } else return this.mergeMap[mergeKey][rowIndex];
    },
    getMergeKeyIndex(columns) {
      let mergeKeyIndex = [];
      function getKeyIndex(columns, mergeKey, idx = 0) {
        let merg = {};
        columns.forEach((val, index) => {
          if (val.prop === mergeKey) {
            mergeKeyIndex.push({
              key: mergeKey,
              index: index + idx,
            });
          } else if (val.children) {
            merg = getKeyIndex(val.children, mergeKey, index);
          }
        });

        return merg;
      }
      this.merges.map((key) => {
        return getKeyIndex(columns, key);
      });

      return mergeKeyIndex;
    },
    handlerMerge({ rowIndex, columnIndex }) {
      let spanRow = [1, 1];
      this.mergeKeyIndex.forEach(({ key, index }) => {
        // 设置虚拟列表缓存区
        if (columnIndex === index) {
          spanRow = this.fixBufferMergeMap(key, rowIndex);
        }

        // step 2
        // if(columnIndex === index) {
        //     this.changeBuffIdx(key, columnIndex)
        //     spanRow = this.mergeMap[key][rowIndex]
        // }
      });

      return spanRow;
    },
  },
};
