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