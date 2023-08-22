function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (a) {
    for (var b, c = 1; c < arguments.length; c++) for (var d in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
    return a;
  }, _extends.apply(this, arguments);
}
var normalMerge = ["attrs", "props", "domProps"],
  toArrayMerge = ["class", "style", "directives"],
  functionalMerge = ["on", "nativeOn"],
  mergeJsxProps = function (a) {
    return a.reduce(function (c, a) {
      for (var b in a) if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge.indexOf(b)) c[b] = _extends({}, c[b], a[b]);else if (-1 !== toArrayMerge.indexOf(b)) {
        var d = c[b] instanceof Array ? c[b] : [c[b]],
          e = a[b] instanceof Array ? a[b] : [a[b]];
        c[b] = [].concat(d, e);
      } else if (-1 !== functionalMerge.indexOf(b)) {
        for (var f in a[b]) if (c[b][f]) {
          var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
            h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
          c[b][f] = [].concat(g, h);
        } else c[b][f] = a[b][f];
      } else if ("hook" === b) for (var i in a[b]) c[b][i] = c[b][i] ? mergeFn(c[b][i], a[b][i]) : a[b][i];else c[b] = a[b];
      return c;
    }, {});
  },
  mergeFn = function (a, b) {
    return function () {
      a && a.apply(this, arguments), b && b.apply(this, arguments);
    };
  };

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var eleColumn = {
  name: 'eleColumn',
  functional: true,
  components: {
    eleColumn: eleColumn
  },
  render: function render(h, context) {
    var props = context.props;
    var globalSlots = props.globalSlots || null;
    function defaultRender(h, props) {
      return props.render ? {
        "default": function _default(prop) {
          return props.render(h, prop);
        }
      } : {};
    }
    return h("el-table-column", mergeJsxProps([{}, {
      "props": props
    }, {
      "scopedSlots": defaultRender(h, props)
    }]), [props.children ? props.children.map(function (col) {
      return h(eleColumn, mergeJsxProps([{}, {
        "props": _objectSpread2(_objectSpread2({}, col), {}, {
          globalSlots: globalSlots
        })
      }]));
    }) : null]);
  }
};

function toggleRowStatus(statusArr, row, newVal) {
  var changed = false;
  var index = statusArr.indexOf(row);
  var included = index !== -1;
  var addRow = function addRow() {
    statusArr.push(row);
    changed = true;
  };
  var removeRow = function removeRow() {
    statusArr.splice(index, 1);
    changed = true;
  };
  if (typeof newVal === 'boolean') {
    if (newVal && !included) {
      addRow();
    } else if (!newVal && included) {
      removeRow();
    }
  } else {
    if (included) {
      removeRow();
    } else {
      addRow();
    }
  }
  return changed;
}
var getKeysMap = function getKeysMap(array, rowKey) {
  var arrayMap = {};
  (array || []).forEach(function (row, index) {
    arrayMap[getRowIdentity(row, rowKey)] = {
      row: row,
      index: index
    };
  });
  return arrayMap;
};
var getRowIdentity = function getRowIdentity(row, rowKey) {
  if (!row) throw new Error('row is required when get row identity');
  if (typeof rowKey === 'string') {
    if (rowKey.indexOf('.') < 0) {
      return row[rowKey];
    }
    var key = rowKey.split('.');
    var current = row;
    for (var i = 0; i < key.length; i++) {
      current = current[key[i]];
    }
    return current;
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row);
  }
};

var selection = {
  mounted: function mounted() {
    this.initSelection();
  },
  methods: {
    initSelection: function initSelection() {
      if (!this.tableRef) throw new Error('tableRef is error');
      var that = this;
      // 全选
      function _toggleAllSelection() {
        var states = this.states;
        states.data;
          var selection = states.selection;
        // when only some rows are selected (but not all), select or deselect all of them
        // depending on the value of selectOnIndeterminate
        var value = states.selectOnIndeterminate ? !states.isAllSelected : !(states.isAllSelected || selection.length);
        states.isAllSelected = value;
        var selectionChanged = false;
        that.data.forEach(function (row, index) {
          if (states.selectable) {
            if (states.selectable.call(null, row, index) && toggleRowStatus(selection, row, value)) {
              selectionChanged = true;
            }
          } else {
            if (toggleRowStatus(selection, row, value)) {
              selectionChanged = true;
            }
          }
        });
        if (selectionChanged) {
          this.table.$emit('selection-change', selection ? selection.slice() : []);
        }
        this.table.$emit('select-all', selection);
      }
      // 全选状态
      function _updateAllSelected() {
        var states = this.states;
        var selection = states.selection,
          rowKey = states.rowKey,
          selectable = states.selectable;
        // data 为 null 时，解构时的默认值会被忽略
        var data = that.data || [];
        if (data.length === 0) {
          states.isAllSelected = false;
          return;
        }
        var selectedMap;
        if (rowKey) {
          selectedMap = getKeysMap(selection, rowKey);
        }
        var isSelected = function isSelected(row) {
          if (selectedMap) {
            return !!selectedMap[getRowIdentity(row, rowKey)];
          } else {
            return selection.indexOf(row) !== -1;
          }
        };
        var isAllSelected = true;
        var selectedCount = 0;
        for (var i = 0, j = data.length; i < j; i++) {
          var item = data[i];
          var isRowSelectable = selectable && selectable.call(null, item, i);
          if (!isSelected(item)) {
            if (!selectable || isRowSelectable) {
              isAllSelected = false;
              break;
            }
          } else {
            selectedCount++;
          }
        }
        if (selectedCount === 0) isAllSelected = false;
        states.isAllSelected = isAllSelected;
      }
      this.tableRef.store.toggleAllSelection = _toggleAllSelection;
      this.tableRef.store.updateAllSelected = _updateAllSelected;
    }
  }
};

function throttle(fn, time) {
  var date = null;
  return function () {
    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }
    if (date) return;
    date = setTimeout(function () {
      fn.apply(void 0, arg);
      date = null;
    }, time);
  };
}
var eleTable = {
  name: 'eleTable',
  components: {
    eleColumn: eleColumn
  },
  mixins: [selection],
  data: function data() {
    return {
      item: [],
      tableRef: null,
      warpperRef: null,
      // 
      elWarp: null,
      elItems: null,
      // 
      elWarpHeight: null,
      itemHeight: 48,
      itemHeightArr: [],
      // 
      vCount: 7,
      bufferCount: 2,
      bufferHeight: 0,
      startIdx: 0,
      // top
      selections: [],
      WeakMap: new Map(),
      position: [],
      btn: true
    };
  },
  props: {
    data: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    columns: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  watch: {
    data: function data(val) {
      this.elWarp.style.height = this.elItems * val.length + 'px';
    }
  },
  computed: {
    vData: function vData() {
      var start = this.bufferIdx;
      var end = this.startIdx + this.vCount + this.bufferCount;
      return this.data.slice(start, end);
    },
    bufferIdx: function bufferIdx() {
      return this.startIdx - this.bufferCount > 0 ? this.startIdx - this.bufferCount : 0;
    },
    globalHeight: function globalHeight() {
      return this.data.length * this.itemHeight;
    }
  },
  mounted: function mounted() {
    this.initProxy();
    console.log('mounted');
  },
  updated: function updated() {
    var _this = this;
    console.log('updated');
    this.$nextTick(function () {
      _this.observerCB(null, true);
    });
  },
  methods: {
    initProxy: function initProxy() {
      // wrappedRowRender
      var that = this;
      var _orgWrappedRowRender = this.warpperRef.wrappedRowRender;
      this.warpperRef.wrappedRowRender = function (row, index) {
        return _orgWrappedRowRender(row, index + that.bufferIdx);
      };
    },
    refCallBack: function refCallBack(el) {
      var _this2 = this;
      if (this.tableRef) return;
      this.tableRef = el;
      this.tableRef.$children.forEach(function (vnode) {
        var option = vnode.$options;
        if (option.name === "ElTableBody") _this2.warpperRef = vnode;
      });
      this.tbody = this.warpperRef.$el.querySelectorAll('tbody');
      this.$nextTick(function () {
        _this2.appendWarp();
        // this.observer()
      });
    },
    appendWarp: function appendWarp() {
      var _this3 = this;
      var elTable = this.tableRef.$el;
      // 
      this.elWarp = document.createElement('div');
      this.elWarp.className = 'ele-vertual-warp';
      this.elWarp.style.height = this.globalHeight + 'px';
      this.elWarp.style.position = 'relative';
      // 
      this.elItems = document.createElement('div');
      this.elItems.className = 'ele-vertual-warpItems';
      this.elItems.style.position = 'absolute';
      this.elItems.style.left = '0px';
      this.elItems.style.top = '0px';
      var elWarpper = elTable.querySelector('.el-table__body-wrapper');
      var elWarpperTable = elWarpper.querySelector('table');
      elWarpper.insertBefore(this.elWarp, elWarpperTable);
      this.elItems.appendChild(elWarpperTable);
      this.elWarp.appendChild(this.elItems);

      // left
      var elLeftWarpper = elTable.querySelector('.el-table__fixed .el-table__fixed-body-wrapper');
      if (elLeftWarpper) {
        this.leftWarp = document.createElement('div');
        this.leftWarp.className = 'ele-vertual-warp-right';
        this.leftWarp.style.height = this.globalHeight + 'px';
        var elLeftWarrperTable = elLeftWarpper.querySelector('table');
        elLeftWarpper.insertBefore(this.leftWarp, elLeftWarrperTable);
        this.leftWarp.appendChild(elLeftWarrperTable);
      }

      // right
      var elRightWarpper = elTable.querySelector('.el-table__fixed-right .el-table__fixed-body-wrapper');
      if (elRightWarpper) {
        this.rightWarp = document.createElement('div');
        this.rightWarp.className = 'ele-vertual-warp-right';
        this.rightWarp.style.height = this.globalHeight + 'px';
        var elRightWarrperTable = elRightWarpper.querySelector('table');
        elRightWarpper.insertBefore(this.rightWarp, elRightWarrperTable);
        this.rightWarp.appendChild(elRightWarrperTable);
      }
      setTimeout(function () {
        _this3.observerCB(null, true);
        _this3.itemHeight = elWarpper.querySelector('tr').offsetHeight;
        console.log(elWarpper.querySelector('tr').offsetHeight, 'clientHeight', elWarpperTable.clientHeight / 13);
      });
      var onScroll = throttle.call(this, this.eventScroll, 10);
      // scroll-event
      elWarpper.addEventListener('scroll', onScroll);
    },
    observer: function observer() {
      var table = this.elWarp.querySelector('table');
      var observe = new MutationObserver(this.observerCB);
      observe.observe(table, {
        subtree: true,
        childList: true
      });
    },
    observerCB: function observerCB(mutation) {
      var _this4 = this;
      var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var buffIdx = this.bufferIdx;
      // 初始化
      if (!mutation && init) {
        // const items = this.elWarp.querySelectorAll('tr')
        // items.forEach(el => {
        //     this.WeakMap.set(el, {
        //         index: ++buffIdx,
        //         ele: el,
        //         rect: el.getBoundingClientRect()
        //     })
        // })

        // 
        var items = this.elWarp.querySelectorAll('tr');
        items.forEach(function (el) {
          var height = el.getBoundingClientRect().height;
          var oldIdx = buffIdx - 1;
          if (oldIdx >= 0) _this4.position[buffIdx] = {
            index: buffIdx,
            height: height,
            top: _this4.position[oldIdx].bottom,
            bottom: height + _this4.position[oldIdx].bottom
          };else {
            _this4.position[buffIdx] = {
              index: buffIdx,
              height: height,
              top: 0,
              bottom: height
            };
          }
          buffIdx++;
        });
        console.log(this.position);
      } else {
        mutation.forEach(function (val) {
          if (val.addedNodes.length) {
            val.addedNodes.forEach(function (el) {
              var height = el.getBoundingClientRect().height;
              var oldIdx = buffIdx - 1;
              if (oldIdx >= 0) _this4.position[buffIdx] = {
                index: buffIdx,
                height: height,
                top: _this4.position[oldIdx].bottom,
                bottom: height + _this4.position[oldIdx].bottom
              };else {
                _this4.position[buffIdx] = {
                  index: buffIdx,
                  height: height,
                  top: 0,
                  bottom: height
                };
              }
              buffIdx++;
            });
          }

          // if (val.addedNodes.length) {
          //     val.addedNodes.forEach(el => {
          //         this.WeakMap.set(el, {
          //             index: ++buffIdx,
          //             ele: el,
          //             rect: el.getBoundingClientRect()
          //         })
          //     })

          // }
          // else if (val.removedNodes.length) {
          //     val.removedNodes.forEach(el => {
          //         // console.log(el, 'removeNodes')
          //         this.WeakMap.delete(el)
          //     })
          // }
        });
      }

      // console.log('observe', mutation)
      console.log('observe', this.position);
    },
    eventScroll: function eventScroll(ev) {
      var top = ev.target.scrollTop;
      console.log(this.position);
      // part 1
      // this.startIdx = Math.floor(top / this.itemHeight)
      // const bufferTop = (this.startIdx - this.bufferIdx) * this.itemHeight
      // const topTo = (top - top % this.itemHeight) - bufferTop

      // part 2
      var current = this.position.find(function (val) {
        return val.bottom > top && top >= val.top;
      });
      console.log(current.index, 'current', top);
      this.startIdx = current.index;
      this.itemHeight = current.height;
      current.top;
      var topTo = top - top % current.height;
      this.elWarp.style.height = this.globalHeight - topTo + 'px';
      this.elWarp.style.transform = "translate3d(0, ".concat(topTo, "px, 0)");

      // left
      if (this.leftWarp) {
        this.leftWarp.style.height = this.globalHeight - topTo + 'px';
        this.leftWarp.style.transform = "translate3d(0, ".concat(topTo, "px, 0)");
      }
      // right
      if (this.rightWarp) {
        this.rightWarp.style.height = this.globalHeight - topTo + 'px';
        this.rightWarp.style.transform = "translate3d(0, ".concat(topTo, "px, 0)");
      }
    }
  },
  render: function render(h) {
    var _this5 = this;
    this.$attrs;
    return h("el-table", mergeJsxProps([{
      "attrs": {
        "data": this.vData
      }
    }, {
      "attrs": this.$attrs
    }, {
      "ref": this.refCallBack
    }, {
      "on": this.$listeners
    }]), [this.columns.map(function (col) {
      return h(eleColumn, mergeJsxProps([{}, {
        "props": _objectSpread2(_objectSpread2({}, col), {}, {
          globalSlots: _this5.$slots
        })
      }]));
    }), h("template", {
      "slot": 'append'
    }, [this.$slots['append']])]);
  }
};

var tableContainer = {
  name: 'eleTableContainer',
  components: {
    eleTable: eleTable
  },
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    getAxios: function getAxios() {
      var _this = this;
      this.loading = true;
      this.getData()["finally"](function () {
        _this.loading = false;
      });
    },
    sizeChange: function sizeChange(size) {
      var _this2 = this;
      this.pProps.pageSize = size;
      this.loading = true;
      this.getData()["finally"](function () {
        _this2.loading = false;
      });
    },
    currentChange: function currentChange(page) {
      var _this3 = this;
      // if (this.loading) return
      this.pProps.currentPage = page;
      this.loading = true;
      this.getData()["finally"](function () {
        _this3.loading = false;
      });
    }
  },
  mounted: function mounted() {
    this.getAxios();
  },
  computed: {
    tProps: function tProps() {
      return this.$attrs;
    },
    pProps: function pProps() {
      return this.$attrs.pageOpt;
    },
    getData: function getData() {
      return this.$attrs.getData;
    }
  },
  render: function render(h, context) {
    return h("div", {
      "class": 'ele-table-container'
    }, [h("ele-table", mergeJsxProps([{}, {
      "props": this.tProps
    }, {
      "directives": [{
        name: "loading",
        value: this.loading
      }]
    }])), h("el-pagination", mergeJsxProps([{}, {
      "props": this.pProps
    }, {}, {
      "on": {
        'size-change': this.sizeChange,
        'current-change': this.currentChange
      }
    }]))]);
  }
  /** functional */
  // render(h, context) {
  //     console.log(_loading, '1')
  //     const pProps = context.props.pageOpt
  //     const tProps = context.props
  //     const getData = context.props.getData
  //     if(!created) {
  //         getAxios()
  //         created = true
  //     } 
  //     function getAxios() {
  //         _loading = true
  //         setTimeout(() => {
  //             getData().finally(_loading = false)
  //         })
  //     }
  //     function sizeChange(size) {
  //         pProps.pageSize = size
  //         console.log('sizeChange')
  //         // pProps.loading = true
  //         getAxios()
  //     }
  //     function currentChange(page) {
  //         pProps.currentPage = page
  //         console.log('currentChange')
  //         // pProps.loading = true
  //         getAxios()
  //     }
  //     return (
  //         <div class='ele-table-container'>
  //             <ele-table props={{ ...tProps }} v-loading={_loading}></ele-table>
  //             <el-pagination
  //                 props={{ ...pProps }}
  //                 on={
  //                     {
  //                         'size-change': sizeChange,
  //                         'current-change': currentChange
  //                     }
  //                 }
  //             />
  //         </div >
  //     )
  // },
};

export { eleTable as Table, tableContainer as TableContainer };
//# sourceMappingURL=ele-table.js.map
