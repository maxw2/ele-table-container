export default {
    template: `
        <div>
            <ele-table border :data="tableData" :columns="columns" style='max-width: 900px'>
                <template slot='edit'>
                  
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