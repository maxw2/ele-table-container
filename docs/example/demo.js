export default {
    template: `
    <div>
      <ele-table size="mini" class='ele-table-1' ref='table' :height='height' :data="tdata" :columns="columns"
      row-key="id" :vertual='false' @select-all="selectAll" @selection-change="selectionChange" @row-click='rowClick'
      @select='select' :merges="[ 'order', 'zip']"></ele-table>
    </div>
      
    `,
    data() {
        return {
            height: "500px",
            show: false,
            pageOpt: {
                background: true,
                layout: "prev, pager, next",
                total: 100,
            },
            columns: [
                {
                    label: "左侧固定",
                    render(h, props) {
                        Array.from(Array(props.row.random), () => h("div", "左侧"));
                        // return h("div", "左侧");
                    },
                    // fixed: 'left'
                },
                {
                    prop: "name",
                    label: "姓",
                    // width: "300",
                    sortable: true,
                    // render(h, props) {
                    //   return props.row.id % 2 === 0
                    //     ? [
                    //         h("el-button", props.row.name),
                    //         h("el-button", props.row.name),
                    //       ]
                    //     : h("el-button", props.row.name);
                    // },
                    // fixed: "left",
                },
                {
                    prop: "random",
                    label: "RANDOM",
                    // render(h, prop) {
                    //   return Array.from(Array(prop.row.random), () =>
                    //     h("el-button", prop.row.random)
                    //   );
                    // },
                    width: "100",
                    // fixed: 'left'
                },
                {
                    prop: "order",
                    label: "order",
                    // render(h, prop) {
                    //   return Array.from(Array(prop.row.random), () =>
                    //     h("el-button", prop.row.random)
                    //   );
                    // },
                    width: "100",
                    // fixed: 'left'
                },
                {
                    type: "selection",
                    label: "序号",
                    reserveSelection: "true",
                    // fixed: 'left'
                },
                {
                    type: "index",
                    label: "序号",
                    // fixed: "left",
                },
                {
                    label: "基础数据",
                    children: [
                        {
                            prop: "date",
                            label: "日期",
                        },
                    ],
                },
                {
                    prop: "zip",
                    label: "合并",
                    width: "500",
                },
                {
                    prop: "address",
                    label: "地址",
                    width: "500",
                    // fixed: 'left'
                },
            ],
            adata: [],
            tdata: [],
            sortable: null
        }

    },
    mounted() {
        this.$nextTick(() => {
            let headerTr = document.querySelectorAll('thead tr')
            console.log(headerTr)
            const that = this
            headerTr.forEach(el => {
                console.log(el)
                // this.sortable = new Sortable(el, {
                //   onEnd(ev) {
                //     const clone = [...that.columns]
                //     const { oldIndex, newIndex } = ev

                //     let old = clone.slice(oldIndex, oldIndex + 1)[0]
                //     let news = clone.slice(newIndex, newIndex + 1)[0]
                //     let oldWidth = '0'
                //     let newWidth = '0'

                //     if (old.width) oldWidth = old.width
                //     if(news.width) newWidth = news.width


                //     oldWidth ? news.width = oldWidth : null
                //     newWidth ? old.width = newWidth : null

                //     clone.splice(oldIndex, 1, news)
                //     clone.splice(newIndex, 1, old)


                //     that.$nextTick(() => {
                //       // that.columns = []
                //       that.columns = clone
                //       console.log(clone)
                //     })

                //     // console.log(that.$refs.table)
                //   }
                // })
            })
        })
        this.getData()


    },
    methods: {
        visibleChange(val) {
            if (val) {
                this.$nextTick(() => {
                    this.$refs.table.updateAllData()

                })
            }
        },
        getData(time) {
            setTimeout(() => {
                this.tdata = Array.from(new Array(500)).map((val, index) => {
                    const random = Math.floor(Math.random() * 3);
                    return {
                        id: index,
                        date: `2016-05-${Math.floor(Math.random() * 5)}`,
                        name: "王小虎",
                        address: `上海市普陀区金沙江路 ${index} 弄`,
                        city: "普陀区",
                        zip: Math.floor(Math.random() * 5),
                        order: Math.floor(Math.random() * 5),
                        random: random,
                    };
                });
            }, time);
        },
        clearData() {
            this.tdata = []
        },
        getRowKey(row) {
            return row.id;
        },
        selectAll(selection) {
            console.log(selection, "##selectAll##");
        },
        selectionChange(selection) {
            console.log(selection, "##selectionChange##");
        },
        onClick() {
            console.log(this.$refs.table.$children[0]);
            this.tdata.forEach((row) => {
                this.$refs.table.$children[0].toggleRowSelection(row, true);
            });
        },
        rowClick(row, column, event) {
            const selection =
                this.$refs.table.$children[0].store.states.selection;
            selection.forEach((val) => {
                if (val === row) console.log("true");
            });
            console.log(
                row,
                "rowClick",
                this.$refs.table.$children[0].store.states.selection
            );
        },
        select(selection, row) {
            console.log("select", selection, row);
            selection.forEach((val) => {
                if (val === row) console.log("select-true");
            });
        },
        expandChange(row, expandedRows) {
            console.log(row, expandedRows, "expandChange");
        },
    },
}