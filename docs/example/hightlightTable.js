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