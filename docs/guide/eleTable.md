# EleTable 表格

### 基础表格
基础的表格展示用法。
<basic-table></basic-table>

```js
export default {
    template: `
        <div>
          <ele-table :data="tableData" :columns="columns" />
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columns: [{
                prop: "date",
                label: "日期",
                width: "180",
            }, {
                prop: "name",
                label: "姓名",
                width: "180",
            }, {
                prop: "address",
                label: "地址"
            }]
        };
    },
}
```

### 带斑马纹表格
<stripe-table></stripe-table>

```js
export default {
    template: `
        <div>
            <ele-table stripe :data="tableData" :columns="columns" />
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columns: [{
                prop: "date",
                label: "日期",
                width: "180",
            }, {
                prop: "name",
                label: "姓名",
                width: "180",
            }, {
                prop: "address",
                label: "地址"
            }]
        };
    },
}
```


### 带边框表格
<border-table></border-table>
```js
export default {
    template: `
        <div>
            <ele-table border :data="tableData" :columns="columns" />
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columns: [{
                prop: "date",
                label: "日期",
                width: "180",
            }, {
                prop: "name",
                label: "姓名",
                width: "180",
            }, {
                prop: "address",
                label: "地址"
            }]
        };
    },
}
```

### 带状态表格
<row-class-name-table></row-class-name-table>
```js
export default {
    template: `
        <div>
            <ele-table border :data="tableData" :columns="columns" :row-class-name="tableRowClassName" />
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columns: [{
                prop: "date",
                label: "日期",
                width: "180",
            }, {
                prop: "name",
                label: "姓名",
                width: "180",
            }, {
                prop: "address",
                label: "地址"
            }]
        };
    },
    methods: {
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex === 1) {
                return 'warning-row';
            } else if (rowIndex === 3) {
                return 'success-row';
            }
            return '';
        }
    },
}
```

### 固定表头
<height-table></height-table>
```js
export default {
    template: `
        <div>
            <ele-table :data="tableData" :columns="columns" height="250" border />
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            },{
                date: '2016-05-05',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columns: [{
                prop: "date",
                label: "日期",
                width: "180",
            }, {
                prop: "name",
                label: "姓名",
                width: "180",
            }, {
                prop: "address",
                label: "地址"
            }]
        };
    },

}
```

### 固定列
> 如果要设置自定义表头和列 需要在columnData中添加**slotName**.

<fixed-table></fixed-table>

```js
export default {
    template: `
        <div>
            <ele-table border :data="tableData" :columns="columns" style='width: 900px'>
                <template slot='edit'>
                    // slot=header
                    // <template slot='header' .... >
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </template>
            </ele-table>
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄',
                zip: 200333
            }, {
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄',
                zip: 200333
            }],
            columns: [{
                prop: "date",
                label: "日期",
                width: "150",
                fixed: 'left',
            }, {
                prop: "name",
                label: "姓名",
                width: "120",
            }, {
                prop: "province",
                label: "省份",
                width: "120",
            }, {
                prop: "city",
                label: "市区",
                width: "120",
            }, {
                prop: "address",
                label: "地址",
                width: '300'
            }, {
                prop: "zip",
                label: "邮编",
                width: '120'
            }, {
                fixed: 'right',
                label: "操作",
                width: '100',
                slotName: 'edit'
            }]
        };
    },
    methods: {
        handleClick(row) {
            console.log(row);
        }
    },
}
```

### 固定列和表头
<height-and-fixed-table></height-and-fixed-table>
```js
export default {
    template: `
        <div>
            <ele-table :data="tableData" :columns="columns" style='max-width: 900px' height='250'>
            </ele-table>
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄',
                zip: 200333
            }, {
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄',
                zip: 200333
            }, {
                date: '2016-05-05',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄',
                zip: 200333
            }, {
                date: '2016-05-06',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄',
                zip: 200333
            }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄',
                zip: 200333
            }],
            columns: [{
                prop: "date",
                label: "日期",
                width: "150",
                fixed: 'left',
            }, {
                prop: "name",
                label: "姓名",
                width: "120",
            }, {
                prop: "province",
                label: "省份",
                width: "120",
            }, {
                prop: "city",
                label: "市区",
                width: "120",
            }, {
                prop: "address",
                label: "地址",
                width: '300'
            }, {
                prop: "zip",
                label: "邮编",
                width: '120'
            }]
        };
    }
}
```

### 流体高度
<max-height-table></max-height-table>
```js
export default {
    template: `
        <div>
            <ele-table :data="tableData" :columns="columns" max-height="250">
                <template slot='edit'>
                    <el-button
                        slot-scope="scope"
                        @click.native.prevent="deleteRow(scope.$index, tableData)"
                        type="text"
                        size="small">
                        移除
                    </el-button>
                </template>
            </ele-table>
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄',
                zip: 200333
            }, {
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄',
                zip: 200333
            }, {
                date: '2016-05-05',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄',
                zip: 200333
            }, {
                date: '2016-05-06',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄',
                zip: 200333
            }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄',
                zip: 200333
            }],
            columns: [{
                prop: "date",
                label: "日期",
                width: "150",
                fixed: 'left',
            }, {
                prop: "name",
                label: "姓名",
                width: "120",
            }, {
                prop: "province",
                label: "省份",
                width: "120",
            }, {
                prop: "city",
                label: "市区",
                width: "120",
            }, {
                prop: "address",
                label: "地址",
                width: '300'
            }, {
                prop: "zip",
                label: "邮编",
                width: '120'
            }, {
                label: "操作",
                width: '120',
                slotName: 'edit',
                fixed: 'right'
            }]
        };
    },
    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        }
    },
}
```

### 多级表头
<column-child></column-child>
```
- 使用多级表头需要在columns中添加children字段进行包裹
    - columns: [{
        label: '一级'
        children:[{
            label: '二级'
            ...
        }]
    }]
```

```js
export default {
    template: `
        <div>
            <ele-table :data="tableData" :columns="columns">
            </ele-table>
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-05',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columns: [{
                prop: "date",
                label: "日期",
                width: "150",
            }, {
                label: '配送信息',
                children: [
                    {
                        prop: "name",
                        label: "姓名",
                        width: "120",
                    }, {
                        prop: "province",
                        label: "省份",
                        width: "120",
                    }, {
                        prop: "city",
                        label: "市区",
                        width: "120",
                    }, {
                        prop: "address",
                        label: "地址",
                    }
                ]
            }]
        };
    }
}
```

### 单选
<hight-light-table></hight-light-table>
```js
export default {
    template: `
        <div>
            <ele-table :data="tableData" :columns="columns" 
                ref="singleTable" 
                highlight-current-row
                @current-change="handleCurrentChange" />
            <div style="margin-top: 20px">
                <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
                <el-button @click="setCurrent()">取消选择</el-button>
            </div>
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columns: [{
                type: 'index',
                width: '50'
            }, {
                prop: "date",
                label: "日期",
                width: "180",
            }, {
                prop: "name",
                label: "姓名",
                width: "180",
            }, {
                prop: "address",
                label: "地址"
            }],
            currentRow: null
        };
    },

    methods: {
        setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
        },
        handleCurrentChange(val) {
            this.currentRow = val;
        }
    }
}
```

### 多选
<selection-table></selection-table>

```js
export default {
    template: `
        <div>
            <ele-table :data="tableData" :columns="columns" 
                ref="multipleTable" 
                tooltip-effect="dark" 
                @selection-change="handleSelectionChange" />
            <div style="margin-top: 20px">
                <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
                <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columns: [{
                type: 'selection',
                width: '55'
            }, {
                prop: "date",
                label: "日期",
                width: "180",
            }, {
                prop: "name",
                label: "姓名",
                width: "180",
            }, {
                prop: "address",
                label: "地址"
            }],
            multipleSelection: []
        };
    },
    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }

}
```

### 排序
<sortable-table></sortable-table>
```js
export default {
    template: `
        <div>
            <ele-table :data="tableData" :columns="columns" :default-sort = "{prop: 'date', order: 'descending'}" />
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columns: [{
                prop: "date",
                label: "日期",
                width: "180",
                sortable: true
            }, {
                prop: "name",
                label: "姓名",
                width: "180",
                sortable: true
            }, {
                prop: "address",
                label: "地址",
                formatter: this.formatter
            }]
        };
    },
    methods: {
        formatter(row, column) {
            return row.address + ' | formatter'
        }
    }

}
```

### 筛选
<filter-table></filter-table>
```js
export default {
    template: `
        <div>
            <el-button @click="resetDateFilter">清除日期过滤器</el-button>
            <el-button @click="clearFilter">清除所有过滤器</el-button>
            <ele-table :data="tableData" :columns="columns" ref="filterTable">
                <template slot='tag'>
                    <el-tag
                      slot-scope="scope"
                      :type="scope.row.tag === '家' ? 'primary' : 'success'"
                      disable-transitions>
                        {{scope.row.tag}}
                    </el-tag>
                </template>
            </ele-table>
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                tag: '家'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                tag: '公司'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                tag: '家'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                tag: '公司'
            }],
            columns: [{
                prop: "date",
                sortable: true,
                columnKey:"date",
                label: "日期",
                width: "180",
                filters: [{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}],
                filterMethod: this.filterHandler
            }, {
                prop: "name",
                label: "姓名",
                width: "180",
            }, {
                prop: "address",
                label: "地址"
            }, {
                prop: 'tag',
                label: '标签',
                width: '100',
                slotName: 'tag',
                filters: [{ text: '家', value: '家' }, { text: '公司', value: '公司' }],
                filterMethod: this.filterTag,
                filterPlacement: "bottom-end"             
            }]
        };
    },
    methods: {
        resetDateFilter() {
            this.$refs.filterTable.clearFilter('date');
        },
        clearFilter() {
            this.$refs.filterTable.clearFilter();
        },
        formatter(row, column) {
            return row.address;
        },
        filterTag(value, row) {
            return row.tag === value;
        },
        filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        }
    }
}
```

### 自定义列模板
<slot-table></slot-table>
```
- column中添加插槽姓名slotName
    - columns: [{
        slotName: 'name'
        ...
    }]
- 元素中添加相应插槽元素
    <ele-table>
        <template slot='name'>
            ... headerSlot slot-scope='scope'
            ... defaultSlot
        </template>
        ... append
    </ele-table>

```

```js
export default {
    template: `
        <div>
            <ele-table :data="tableData" :columns="columns">
                // date
                <template slot='date'>
                    <template slot-scope='scope'>
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </template>
                // name
                <template slot='name'>
                    <template slot-scope='scope'>
                        <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <p>住址: {{ scope.row.address }}</p>
                            <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                        </el-popover>
                    </template>
                </template>
                // edit
                <template slot='edit'>
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </template>


            </ele-table>
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columns: [{
                prop: "date",
                label: "日期",
                width: "180",
                slotName: 'date'
            }, {
                prop: "name",
                label: "姓名",
                width: "180",
                slotName: 'name'
            }, {
                slotName: 'edit',
                label: "操作"
            }]
        };
    },
    methods: {
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        }
      }
}
```

### 展开行
<expand-table></expand-table>
```js
export default {
    template: `
        <div>
            <ele-table :data="tableData" :columns="columns">
                <template slot='id'>
                    <el-form slot-scope="props" label-position="left" class="demo-table-expand" style='padding: 20px 50px'>
                        <el-form-item label="商品名称">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="所属店铺">
                            <span>{{ props.row.shop }}</span>
                        </el-form-item>
                        <el-form-item label="商品 ID">
                            <span>{{ props.row.id }}</span>
                        </el-form-item>
                        <el-form-item label="店铺 ID">
                            <span>{{ props.row.shopId }}</span>
                        </el-form-item>
                        <el-form-item label="商品分类">
                            <span>{{ props.row.category }}</span>
                        </el-form-item>
                        <el-form-item label="店铺地址">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
                        <el-form-item label="商品描述">
                            <span>{{ props.row.desc }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </ele-table>
        </div>
    `,
    data() {
        return {
            tableData: [{
                id: '12987122',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
            }, {
                id: '12987123',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
            }, {
                id: '12987125',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
            }, {
                id: '12987126',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
            }],
            columns: [{
                type: "expand",
                slotName: 'id'
            },{
                label: '商品ID',
                prop: 'id',
            },{
                label: '商品名称',
                prop: 'name'
            },{
                label: '描述',
                prop: 'desc'
            }]
        };
    },

}
``` 

### 树形数据与懒加载
<tree-table></tree-table>
```js
export default {
    template: `
        <div>
            <ele-table :data="tableData" :columns="columns" 
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                border
                default-expand-all
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}" 
            />
            <ele-table :data="tableData1" :columns="columns" 
                style="width: 100%"
                row-key="id"
                border
                lazy
                :load="load"
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
            />
        </div>
    `,
    data() {
        return {
            tableData: [{
                id: 1,
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 2,
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                id: 3,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                children: [{
                    id: 31,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    id: 32,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }]
            }, {
                id: 4,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            tableData1: [{
                id: 1,
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 2,
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                id: 3,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                hasChildren: true
            }, {
                id: 4,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columns: [{
                prop: "date",
                label: "日期",
                width: "180",
                sortable: true
            }, {
                prop: "name",
                label: "姓名",
                width: "180",
                sortable: true
            }, {
                prop: "address",
                label: "地址"
            }]
        };
    },
    methods: {
        load(tree, treeNode, resolve) {
          setTimeout(() => {
            resolve([
              {
                id: 31,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                id: 32,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }
            ])
          }, 1000)
        }
      },
}
```


### 自定义表头
<header-slot-table></header-slot-table>
```js
export default {
    template: `
        <div>
            <ele-table 
                :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" 
                :columns="columns">
                <template slot='edit'>
                    <template slot="header" slot-scope="scope">
                        <el-input
                        v-model="search"
                        size="mini"
                        placeholder="输入关键字搜索"/>
                    </template>
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                    </template>
                </template>
            </ele-table>
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columns: [{
                prop: "date",
                label: "日期",
                width: "180",
            }, {
                prop: "name",
                label: "姓名",
                width: "180",
            }, {
                label: "地址",
                slotName: 'edit'
            }],
            search: ''
        };
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    },
}
```


### 表尾合计行
<show-summary-table></show-summary-table>
```js
export default {
    template: `
        <div>
            <ele-table 
                :data="tableData"
                :columns="columns"
                border
                show-summary
                style="width: 100%" 
            />

            <ele-table 
                :data="tableData"
                :columns="columns"
                border
                height="200"
                :summary-method="getSummaries"
                show-summary
                style="width: 100%; margin-top: 20px" 
            />    


        </div>
    
    `,
    data() {
        return {
            tableData: [{
                id: '12987122',
                name: '王小虎',
                amount1: '234',
                amount2: '3.2',
                amount3: 10
            }, {
                id: '12987123',
                name: '王小虎',
                amount1: '165',
                amount2: '4.43',
                amount3: 12
            }, {
                id: '12987124',
                name: '王小虎',
                amount1: '324',
                amount2: '1.9',
                amount3: 9
            }, {
                id: '12987125',
                name: '王小虎',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
            }, {
                id: '12987126',
                name: '王小虎',
                amount1: '539',
                amount2: '4.1',
                amount3: 15
            }],
            columns: [{
                prop: "id",
                label: "ID",
                width: "180",
            },
            {
                prop: "name",
                label: "姓名"
            },
            {
                prop: "amount1",
                label: "数值 1",
                sortable: true
            },
            {
                prop: "amount2",
                label: "数值 2",
                sortable: true
            },
            {
                prop: "amount3",
                label: "数值 3",
                sortable: true
            }]
        }
    },
    methods: {
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = '总价';
                    return;
                }
                const values = data.map(item => Number(item[column.property]));
                if (!values.every(value => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    sums[index] += ' 元';
                } else {
                    sums[index] = 'N/A';
                }
            });

            return sums;
        }
    }

}
``` 

### 合并行或列
<row-span-table></row-span-table>
```js
export default {
    template: `
        <div>
            <ele-table 
                :data="tableData"
                :columns="columns"
                :span-method="arraySpanMethod"
                border
                style="width: 100%"
            />

            <ele-table 
                :data="tableData"
                :columns="columns"
                :span-method="objectSpanMethod"
                border
                style="width: 100%; margin-top: 20px"
            />    


        </div>
    
    `,
    data() {
        return {
            tableData: [{
                id: '12987122',
                name: '王小虎',
                amount1: '234',
                amount2: '3.2',
                amount3: 10
            }, {
                id: '12987123',
                name: '王小虎',
                amount1: '165',
                amount2: '4.43',
                amount3: 12
            }, {
                id: '12987124',
                name: '王小虎',
                amount1: '324',
                amount2: '1.9',
                amount3: 9
            }, {
                id: '12987125',
                name: '王小虎',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
            }, {
                id: '12987126',
                name: '王小虎',
                amount1: '539',
                amount2: '4.1',
                amount3: 15
            }],
            columns: [{
                prop: "id",
                label: "ID",
                width: "180",
            },
            {
                prop: "name",
                label: "姓名"
            },
            {
                prop: "amount1",
                label: "数值 1",
                sortable: true
            },
            {
                prop: "amount2",
                label: "数值 2",
                sortable: true
            },
            {
                prop: "amount3",
                label: "数值 3",
                sortable: true
            }]
        }
    },
    methods: {
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
          if (rowIndex % 2 === 0) {
            if (columnIndex === 0) {
              return [1, 2];
            } else if (columnIndex === 1) {
              return [0, 0];
            }
          }
        },
  
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
          if (columnIndex === 0) {
            if (rowIndex % 2 === 0) {
              return {
                rowspan: 2,
                colspan: 1
              };
            } else {
              return {
                rowspan: 0,
                colspan: 0
              };
            }
          }
        }
      }

}
```


### 自定义索引
<index-table></index-table>
```js
export default {
    template: `
        <div>
            <ele-table :data="tableData" :columns="columns" />
        </div>
    `,
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columns: [{
                type: 'index',
                index: this.indexMethod
            }, {
                prop: "date",
                label: "日期",
                width: "180",
            }, {
                prop: "name",
                label: "姓名",
                width: "180",
            }, {
                prop: "address",
                label: "地址"
            }]
        };
    },
    methods: {
        indexMethod(index) {
            return index * 2;
        }
    }
}
```


