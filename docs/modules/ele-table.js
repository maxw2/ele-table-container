function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

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
var helper = mergeJsxProps;

var _mergeJSXProps2 = /*@__PURE__*/getDefaultExportFromCjs(helper);

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
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
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    return h("el-table-column", _mergeJSXProps2([{}, {
      "props": props
    }, {
      "scopedSlots": defaultRender(h, props)
    }]), [props.children ? props.children.map(function (col) {
      return h(eleColumn, _mergeJSXProps2([{}, {
        "props": _objectSpread2(_objectSpread2({}, col), {}, {
          globalSlots: globalSlots
        })
      }]));
    }) : null]);
  }
};

// function throttle(fn, time) {
//     let date = null
//     return (...arg) => {
//         if (date) return
//         date = setTimeout(() => {
//             fn(...arg)
//             date = null
//         }, time)
//     }
// }

var init = {
  data: function data() {
    return {
      tableRef: null,
      warpperRef: null,
      // 
      elWarp: null,
      elItems: null,
      elTbody: null,
      elWarpper: null
    };
  },
  mounted: function mounted() {
    this.getTableRef();
  },
  methods: {
    getTableRef: function getTableRef() {
      var _this = this;
      if (this.tableRef) return;
      this.tableRef = this.$children[0];
      this.tableRef.$children.forEach(function (vnode) {
        var option = vnode.$options;
        if (option.name === "ElTableBody") _this.warpperRef = vnode;
      });
      this.elTbody = this.warpperRef.$el.querySelector('tbody');
      // 
      this.initProxy();
      this.appendWarp();
    },
    initProxy: function initProxy() {
      // wrappedRowRender
      var that = this;
      var _orgWrappedRowRender = this.warpperRef.wrappedRowRender;
      this.warpperRef.wrappedRowRender = function (row, index) {
        return _orgWrappedRowRender(row, index + that.bufferIdx);
      };
    },
    appendWarp: function appendWarp() {
      var _this2 = this;
      var elTable = this.tableRef.$el;
      // 
      this.elWarp = document.createElement('div');
      this.elWarp.className = 'ele-vertual-warp';

      // this.elWarp.style.position = 'relative'
      // 
      this.elItems = document.createElement('div');
      this.elItems.className = 'ele-vertual-warpItems';
      // this.elItems.style.position = 'absolute'
      // this.elItems.style.left = '0px'
      // this.elItems.style.top = '0px'

      var elWarpper = elTable.querySelector('.el-table__body-wrapper');
      this.elWarpper = elWarpper;
      var elWarpperTable = elWarpper.querySelector('table');
      elWarpper.insertBefore(this.elWarp, elWarpperTable);
      this.elItems.appendChild(elWarpperTable);
      this.elWarp.appendChild(this.elItems);

      // left
      this.$nextTick(function () {
        var elLeftWarpper = elTable.querySelector('.el-table__fixed .el-table__fixed-body-wrapper');
        if (elLeftWarpper) {
          _this2.leftWarp = document.createElement('div');
          _this2.leftWarp.className = 'ele-vertual-warp-right';
          // this.leftWarp.style.height = this.globalHeight + 'px'
          var elLeftWarrperTable = elLeftWarpper.querySelector('table');
          elLeftWarpper.insertBefore(_this2.leftWarp, elLeftWarrperTable);
          _this2.leftWarp.appendChild(elLeftWarrperTable);
        }

        // right
        var elRightWarpper = elTable.querySelector('.el-table__fixed-right .el-table__fixed-body-wrapper');
        if (elRightWarpper) {
          _this2.rightWarp = document.createElement('div');
          _this2.rightWarp.className = 'ele-vertual-warp-right';
          // this.rightWarp.style.height = this.globalHeight + 'px'
          var elRightWarrperTable = elRightWarpper.querySelector('table');
          elRightWarpper.insertBefore(_this2.rightWarp, elRightWarrperTable);
          _this2.rightWarp.appendChild(elRightWarrperTable);
        }
      });

      // scroll-event
      // elWarpper.addEventListener('scroll', throttle.call(this, this.eventScroll, 10))
      elWarpper.addEventListener('scroll', this.eventScroll);
    },
    initItemHeight: function initItemHeight() {
      if (!this.data.length) return;
      if (this.vertual) {
        var eleTableHeight = this.tableRef.$el.offsetHeight;
        var tbody = this.tableRef.$el.querySelector('.el-table__body-wrapper tbody');
        var tbodyHeight = tbody.offsetHeight;
        var ave = tbodyHeight / this.vCount;
        if (tbodyHeight) {
          this.itemHeight = ave;
          this.vCount = Math.floor(eleTableHeight / ave) || 1;
        }
      } else if (!this.vertual) {
        var _eleTableHeight = this.tableRef.$el.offsetHeight;
        var tr = this.tableRef.$el.querySelector('.el-table__body-wrapper tr');
        var trHeight = tr === null || tr === void 0 ? void 0 : tr.offsetHeight;
        if (trHeight) {
          this.itemHeight = trHeight;
          this.vCount = Math.floor(_eleTableHeight / trHeight) || 1;
        }
      }
    },
    getGloHeight: function getGloHeight() {
      if (this.vertual) return this.position[this.data.length - 1] || 0;else return this.data.length * this.itemHeight;
    }
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
      if (!this.tableRef) throw new Error('MODULE-SELECTION: tableRef is undefined');
      var that = this;
      // 全选
      function _toggleAllSelection() {
        var states = this.states;
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

var vertual = {
  data: function data() {
    return {
      posMap: [],
      position: []
    };
  },
  props: {
    vertual: {
      type: Boolean,
      "default": false
    },
    estimatedHeight: {
      type: Number,
      "default": 0
    }
  },
  updated: function updated() {
    this.getposMap();
  },
  methods: {
    getposMap: function getposMap() {
      var _this = this;
      var tbody = this.elWarp.querySelectorAll('tr');
      var idx = this.startIdx - this.bufferCount > 0 ? this.startIdx - this.bufferCount : 0;
      // if(this.posMap[idx]) return
      // const idx = this.startIdx - this.bufferCount > 0 ? this.bufferIdx : 0
      var bottom = this.position[idx - 1] || 0;
      tbody.forEach(function (el, index) {
        bottom += el.offsetHeight;
        _this.posMap[idx + index] = bottom;
        _this.position[idx + index] = bottom;
      });
    },
    resetPosMap: function resetPosMap() {
      this.position = [];
      this.posMap = [];
    },
    getPosition: function getPosition() {
      var _this2 = this;
      var pos = [];
      var bottom = 0;
      this.data.map(function (val, index) {
        var curMap = _this2.posMap[index];
        if (curMap) bottom = curMap;else bottom += _this2.estimatedHeight || _this2.itemHeight;
        pos[index] = bottom;
      });
      this.position = pos;
      return pos;
    },
    getPosIdx: function getPosIdx(scrollTop) {
      var idx = this.position.findIndex(function (bottom) {
        return scrollTop <= bottom;
      }) || 0;
      // const bufferIdx = idx - this.bufferCount > 0 ? idx - this.bufferCount : 0
      var height = this.position[idx - 1] ? this.position[idx] - this.position[idx - 1] : this.position[idx];
      var bottom = this.position[idx];
      var top = bottom - height || 0;
      var bufferTop = 0;

      // console.log([idx, top, bufferTop],"[idx, top, bufferTop]")
      return [idx, top, bufferTop];
    }
  }
};

var merge = {
  data: function data() {
    return {
      originSpanMehtod: [],
      curRowSpan: {},
      mergeKeyIndex: [],
      mergeMap: {},
      //  [col,col,col]
      bufferMergeMap: {} // 第一次的rowspan
    };
  },

  props: {
    merge: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  watch: {
    data: function data(newVal) {
      this.initMergeMap(newVal);
    }
  },
  created: function created() {
    this.initSpanMethod();
    this.mergeKeyIndex = this.getMergeKeyIndex(this.columns);
    // this.initMergeArr()
  },
  mounted: function mounted() {
    this.initMergeMap(this.data);
  },
  // updated
  methods: {
    initSpanMethod: function initSpanMethod() {
      if (this.$attrs['span-method']) return;else if (this.merge) this.attrs['span-method'] = this.handlerMerge;
    },
    // 初始化映射
    initMergeMap: function initMergeMap() {
      var _this = this;
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;
      // const propsArr = this.getRowKey()
      var rowSpanMap = {};
      data.map(function (row, index) {
        var nextRow = data[index + 1] || {};
        _this.merge.forEach(function (key) {
          if (!_this.mergeMap[key]) _this.mergeMap[key] = [];
          if (row[key] === nextRow[key]) {
            if (rowSpanMap[key]) {
              _this.mergeMap[key].push({
                rowspan: 0,
                colspan: 1
              });
              rowSpanMap[key].rowspan += 1;
            } else {
              rowSpanMap[key] = {
                rowspan: 1,
                colspan: 1
              };
              _this.mergeMap[key].push(rowSpanMap[key]);
            }
          } else {
            if (rowSpanMap[key]) {
              rowSpanMap[key].rowspan += 1;
              _this.mergeMap[key].push({
                rowspan: 0,
                colspan: 1
              });
            } else _this.mergeMap[key].push({
              rowspan: 1,
              colspan: 1
            });
            rowSpanMap[key] = null;
          }
        });
      });

      // console.log(this.mergeMap)
    },
    fixBufferMergeMap: function fixBufferMergeMap(mergeKey, rowIndex) {
      // 修改第一个
      if (rowIndex === this.bufferIdx) {
        //  是否需要重新计算 rowspan
        if (this.mergeMap[mergeKey][this.bufferIdx].rowspan === 0) {
          return {
            rowspan: this.mergeMap[mergeKey].slice(this.bufferIdx).findIndex(function (val) {
              return val.rowspan !== 0;
            }),
            colspan: 1
          };
        } else return this.mergeMap[mergeKey][this.bufferIdx];
      } else return this.mergeMap[mergeKey][rowIndex];
    },
    getMergeKeyIndex: function getMergeKeyIndex(columns) {
      function getKeyIndex(columns, mergeKey) {
        var idx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var merg = {};
        columns.forEach(function (val, index) {
          if (val.prop === mergeKey) {
            merg = {
              key: mergeKey,
              index: index + idx
            };
          } else if (val.children) {
            merg = getKeyIndex(val.children, mergeKey, index);
          }
        });
        return merg;
      }
      return this.merge.map(function (key) {
        return getKeyIndex(columns, key);
      });
    },
    handlerMerge: function handlerMerge(_ref) {
      var _this2 = this;
      var rowIndex = _ref.rowIndex,
        columnIndex = _ref.columnIndex;
      var spanRow = [1, 1];
      this.mergeKeyIndex.forEach(function (_ref2) {
        var key = _ref2.key,
          index = _ref2.index;
        // 设置虚拟列表缓存区
        if (columnIndex === index) {
          spanRow = _this2.fixBufferMergeMap(key, rowIndex);
        }

        // step 2
        // if(columnIndex === index) {
        //     this.changeBuffIdx(key, columnIndex)
        //     spanRow = this.mergeMap[key][rowIndex]
        // }
      });

      return spanRow;
    }
  }
};

var eleTable = {
  name: 'eleTable',
  components: {
    eleColumn: eleColumn
  },
  mixins: [init, selection, vertual, merge],
  data: function data() {
    return {
      attrs: {},
      // 
      itemHeight: 0,
      // 
      vCount: 10,
      startIdx: 0,
      scrollTop: 0
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
    },
    bufferCount: {
      type: Number,
      "default": 0
    }
  },
  watch: {
    data: function data() {
      this.updateAllData();
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
      if (this.vertual) {
        return this.position[this.data.length - 1] || 0;
      } else {
        this.elWarp.style.height = this.data.length * this.itemHeight + 'px';
        return this.data.length * this.itemHeight;
      }
    }
  },
  mounted: function mounted() {
    this.updateAllData();
  },
  methods: {
    updateAllData: function updateAllData() {
      var _this = this;
      this.resetPosMap();
      this.$nextTick(function () {
        _this.initItemHeight();
        _this.getPosition();
        _this.getposMap();
        if (_this.elWarpper) {
          _this.elWarpper.scrollTo({
            top: 0,
            left: 0
            // behavior: "smooth",
          });
        }

        _this.eventScroll();
      });
    },
    eventScroll: function eventScroll(ev) {
      var _ev$target;
      var scrollTop = (ev === null || ev === void 0 ? void 0 : (_ev$target = ev.target) === null || _ev$target === void 0 ? void 0 : _ev$target.scrollTop) || 0;
      this.scrollTop = scrollTop;
      var topTo = 0;
      if (!this.vertual) {
        this.startIdx = Math.floor(scrollTop / this.itemHeight) || 0;
        var bufferTop = (this.startIdx - this.bufferIdx) * this.itemHeight;
        topTo = scrollTop - scrollTop % this.itemHeight - bufferTop;
      }
      if (this.vertual) {
        var _this$getPosIdx = this.getPosIdx(scrollTop),
          _this$getPosIdx2 = _slicedToArray(_this$getPosIdx, 3),
          idx = _this$getPosIdx2[0],
          top = _this$getPosIdx2[1],
          _bufferTop = _this$getPosIdx2[2];
        this.startIdx = idx;
        topTo = top - _bufferTop;
      }
      this.elWarp.style.height = this.getGloHeight() + 'px';
      this.elItems.style.transform = "translate3d(0, ".concat(topTo, "px, 0)");

      // left
      if (this.leftWarp) {
        this.leftWarp.style.height = this.getGloHeight() - topTo + 'px';
        this.leftWarp.style.transform = "translate3d(0, ".concat(topTo, "px, 0)");
      }
      // right
      if (this.rightWarp) {
        this.rightWarp.style.height = this.getGloHeight() - topTo + 'px';
        this.rightWarp.style.transform = "translate3d(0, ".concat(topTo, "px, 0)");
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("el-table", _mergeJSXProps2([{
      "attrs": {
        "data": this.vData
      }
    }, {
      "props": _objectSpread2(_objectSpread2({}, this.$attrs), this.attrs)
    }, {}, {
      "on": this.$listeners
    }]), [this.columns.map(function (col) {
      return h(eleColumn, _mergeJSXProps2([{}, {
        "attrs": _objectSpread2({}, col)
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
  props: {
    data: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    getData: {
      type: Function,
      "default": null
    },
    pageOpt: {
      type: Object,
      "default": function _default() {
        return {
          background: true,
          layout: "prev,sizes, pager, next, jumper, ->, total",
          total: 100,
          currentPage: 1,
          pageSize: 100,
          pageSizes: [10, 20, 30, 40, 50, 100]
        };
      }
    }
  },
  mounted: function mounted() {
    this.getAxios();
  },
  methods: {
    getAxios: function getAxios() {
      var _this = this;
      if (!this.getData) return;
      this.loading = true;
      this.getData()["finally"](function () {
        setTimeout(function () {
          _this.loading = false;
        }, 500);
      });
    },
    sizeChange: function sizeChange(size) {
      var _this2 = this;
      // this.pProps.pageSize = size
      this.loading = true;
      this.$emit('update:pageOpt', _objectSpread2(_objectSpread2({}, this.pageOpt), {}, {
        pageSize: size
      }));
      this.getData()["finally"](function () {
        setTimeout(function () {
          _this2.loading = false;
        }, 500);
      });
    },
    currentChange: function currentChange(page) {
      var _this3 = this;
      // if (this.loading) return
      // this.pProps.currentPage = page
      this.loading = true;
      this.$emit('update:pageOpt', _objectSpread2(_objectSpread2({}, this.pageOpt), {}, {
        currentPage: page
      }));
      this.getData()["finally"](function () {
        setTimeout(function () {
          _this3.loading = false;
        }, 500);
      });
    }
  },
  computed: {
    // tProps() {
    //     return this.$attrs
    // },
    // pProps() {
    //     return this.$attrs.pageOpt
    // },
    // getData() {
    //     return this.$attrs.getData
    // },
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": 'ele-table-container'
    }, [h("ele-table", _mergeJSXProps2([{
      "attrs": {
        "data": this.$props.data
      }
    }, {
      "attrs": this.$attrs
    }, {
      "directives": [{
        name: "loading",
        value: this.loading
      }]
    }])), h("el-pagination", _mergeJSXProps2([{}, {
      "props": this.pageOpt
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
