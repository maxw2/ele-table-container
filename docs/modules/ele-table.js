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
    var globalSlots = props.globalSlots;
    var slotName = props.slotName;
    /**
     * 1. <template slot=slotName>
     *     // slot=header
     *     // slot=default 
     *     </template>
     * 2. <el-button slot=slotName></el-button>
     */
    var slot = null;
    var scopedSlots = {};
    var slotHeader = [];
    var slotDefault = [];
    if (slotName) {
      var _slot, _slot$children, _slot2, _slot2$data;
      slot = filterColumnSlots(globalSlots, slotName);
      (_slot = slot) === null || _slot === void 0 ? void 0 : (_slot$children = _slot.children) === null || _slot$children === void 0 ? void 0 : _slot$children.forEach(function (vnode) {
        var _vnode$data, _vnode$data2;
        if (((_vnode$data = vnode.data) === null || _vnode$data === void 0 ? void 0 : _vnode$data.slot) === 'header') slotHeader.push(vnode);else if (((_vnode$data2 = vnode.data) === null || _vnode$data2 === void 0 ? void 0 : _vnode$data2.slot) === 'default') slotDefault.push(vnode);else slotDefault.push(vnode);
      });
      scopedSlots = (_slot2 = slot) === null || _slot2 === void 0 ? void 0 : (_slot2$data = _slot2.data) === null || _slot2$data === void 0 ? void 0 : _slot2$data.scopedSlots;
      // console.log(slotName)
      // console.log('slot作用域', scopedSlots)
      // console.log('slot具名', slotHeader, slotDefault)
      // console.log('=========')
    }

    return h("el-table-column", mergeJsxProps([{}, {
      "props": props
    }, {
      "scopedSlots": scopedSlots
    }]), [
    // column 嵌套 slot=default 不可用
    props.children ? props.children.map(function (col) {
      return h(eleColumn, mergeJsxProps([{}, {
        "props": _objectSpread2(_objectSpread2({}, col), {}, {
          globalSlots: globalSlots
        })
      }]));
    }) : columnContext(h, slotHeader, slotDefault)

    // 
    ]);
  }
};

function filterColumnSlots(globalSlots, slotName) {
  return globalSlots.filter(function (vnode) {
    var _vnode$data3;
    if (((_vnode$data3 = vnode.data) === null || _vnode$data3 === void 0 ? void 0 : _vnode$data3.slot) === slotName) return true;
  })[0];
}
function columnContext(h, slotHeader, slotDefault) {
  var vnodeArr = [];
  if (slotHeader && slotHeader.length) {
    vnodeArr.push(h('template', {
      slot: 'header'
    }, slotHeader));
  }
  if (slotDefault && slotDefault.length) {
    vnodeArr.push(h('template', {
      slot: 'default'
    }, slotDefault));
  }
  return vnodeArr;
}

var eleTable = {
  name: 'eleTable',
  functional: true,
  components: {
    eleColumn: eleColumn
  },
  render: function render(h, context) {
    var data = context.data;
    var props = context.props;
    data.attrs = {};
    var columns = context.props.columns || [];
    var globalSlots = context.children || [];
    var slotAppend = globalSlots.filter(function (vnode) {
      var _vnode$data;
      return (vnode === null || vnode === void 0 ? void 0 : (_vnode$data = vnode.data) === null || _vnode$data === void 0 ? void 0 : _vnode$data.slot) === 'append';
    })[0];
    return h("el-table", mergeJsxProps([{}, _objectSpread2({
      props: props
    }, data)]), [columns.map(function (col) {
      return h(eleColumn, mergeJsxProps([{}, {
        "props": _objectSpread2(_objectSpread2({}, col), {}, {
          globalSlots: globalSlots
        })
      }]));
    }), slotAppend ? h("template", {
      "slot": 'append'
    }, [slotAppend]) : null]);
  }
};

var tableContainer = {
  name: 'eleTableContainer',
  components: {
    eleTable: eleTable
  },
  data: function data() {
    return {
      loading: false,
      getData: null,
      tProps: null,
      pProps: null
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
    this.getData = this.$attrs.getData;
    this.tProps = this.$attrs;
    this.pProps = this.$attrs.pageOpt;
    this.getAxios();
  },
  computed: {
    tableData: function tableData() {
      return this.$attrs.data;
    }
  },
  render: function render(h, context) {
    return h("div", {
      "class": 'ele-table-container'
    }, [h("ele-table", mergeJsxProps([{}, {
      "props": _objectSpread2(_objectSpread2({}, this.tProps), {}, {
        'data': this.tableData
      })
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
};

export { eleTable as Table, tableContainer as TableContainer };
//# sourceMappingURL=ele-table.js.map
