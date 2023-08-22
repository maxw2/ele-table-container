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
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
      console.log('removeRow', index);
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
    console.log('updated');
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
      var _this = this;
      if (this.tableRef) return;
      this.tableRef = el;
      this.tableRef.$children.forEach(function (vnode) {
        var option = vnode.$options;
        if (option.name === "ElTableBody") _this.warpperRef = vnode;
      });
      this.tbody = this.warpperRef.$el.querySelectorAll('tbody');
      this.$nextTick(function () {
        return _this.appendWarp();
      });
    },
    bufferItemArr: function bufferItemArr() {
      var _this2 = this;
      // const trNodes = [...this.elWarp.querySelectorAll('tr')]
      // this.itemHeightArr = trNodes.map((node,index) => {
      //     return node.offsetHeight
      // })
      _toConsumableArray(this.elWarp.querySelectorAll('tr')).forEach(function (node, index) {
        if (_this2.bufferIdx) _this2.itemHeight;
      });
    },
    appendWarp: function appendWarp() {
      var _this3 = this;
      var elTable = this.tableRef.$el;
      // 
      this.elWarp = document.createElement('div');
      this.elWarp.className = 'ele-vertual-warp';
      this.elWarp.style.height = this.globalHeight + 'px';
      // 
      this.elItems = document.createElement('div');
      this.elItems.className = 'ele-vertual-warpItems';
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
        console.log(elLeftWarpper);
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
        console.log(elRightWarpper);
        elRightWarpper.insertBefore(this.rightWarp, elRightWarrperTable);
        this.rightWarp.appendChild(elRightWarrperTable);
      }
      setTimeout(function () {
        // const that = this
        // let oldStartIdx = this.startIdx
        // let oldStartHeight = this.itemHeight
        // const obsver = new MutationObserver(function (mutationList, observer) {
        //     const idx = that.startIdx - that.bufferIdx
        //     const rect = elWarpper.querySelectorAll('tr')[idx].getBoundingClientRect()
        //     that.itemHeight = rect.height

        //     if (oldStartIdx < that.startIdx) {
        //         that.bufferHeight += rect.height

        //     } else that.bufferHeight -= oldStartHeight

        //     console.log('that.bufferHeight', that.bufferHeight, 'height', idx)
        //     oldStartHeight = rect.height
        //     oldStartIdx = that.startIdx

        //     console.log(mutationList, observer, 'callback', rect)
        // })
        // obsver.observe(elWarpper, { subtree: true, childList: true })

        _this3.itemHeight = elWarpper.querySelector('tr').offsetHeight;
        console.log(elWarpper.querySelector('tr').offsetHeight, 'clientHeight', elWarpperTable.clientHeight / 13);
      });

      // scroll-event
      elWarpper.addEventListener('scroll', this.eventScroll.bind(this));
    },
    eventScroll: function eventScroll(ev) {
      var top = ev.target.scrollTop;
      this.startIdx = Math.floor(top / this.itemHeight);
      var bufferTop = (this.startIdx - this.bufferIdx) * this.itemHeight;
      // const bufferTop = this.bufferHeight

      var topTo = top - top % this.itemHeight - bufferTop;
      // console.log(bufferTop, 'buffTop',top)
      // console.log(top % this.itemHeight)
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

      // this.bufferItemArr()
    }
  },
  render: function render(h) {
    var _this4 = this;
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
          globalSlots: _this4.$slots
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
