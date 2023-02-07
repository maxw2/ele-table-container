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