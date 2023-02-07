export default {
    template: `
        <div>
            <ele-table :data="tableData" :columns="columns" height='500' />

            <el-popover
                placement="right"
                width="400"
                trigger="click">
                <el-tree
                    ref="tree"
                    :data="def_columns"
                    default-expand-all
                    show-checkbox
                    node-key="label"
                    draggable
                    @check="checkChange"
                />

                <el-button slot="reference" style='margin-top: 30px'>拖拽表头</el-button>
            </el-popover>
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
            def_columns: [
                {
                    prop: "date",
                    label: "日期",
                }, {
                    label: '配送信息',
                    children: [
                        {
                            prop: "name",
                            label: "姓名",
                        }, {
                            label: "区域",
                            children: [{
                                prop: "city",
                                label: "市区",
                            }, {
                                prop: "address",
                                label: "地址",
                            }]
                        }
                    ]
                }, {
                    prop: "province",
                    label: "城市",
                }],
            columns: []
        };
    },
    mounted() {
        this.$refs.tree.setCheckedNodes(this.def_columns)
        this.columns = this.def_columns
    },
    methods: {
        checkChange(data, check) {
            const checkNdoeKey = [].concat(check.checkedKeys, check.halfCheckedKeys)
            this.columns = []
            this.$nextTick(() => {
                this.columns = this.filtercolumns(this.def_columns, checkNdoeKey)
            })
        },
        filtercolumns(columns, keysArr) {
            let filterCols = []

            columns.forEach(col => {
                if (col.children) {
                    let filter = { ...col }
                    filter.children = this.filtercolumns(col.children, keysArr)
                    if (filter.children.length) filterCols.push(filter)
                } else if (keysArr.includes(col.label)) filterCols.push(col)
            })

            return filterCols
        }
    }
}