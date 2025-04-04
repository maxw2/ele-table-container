export default {
    template: `
        <div>
            <ele-table-container 
                class='ele-table-container'
                :data="tableData" 
                :columns="columns" 
                :pageOpt="pageOpt" 
                :getData="getData"
                height='300'
            />
        </div>
    `,
    data() {
        return {
            tableData: [],
            columns: [{
                prop: "id",
                label: "ID",
                width: "180",
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
            pageOpt: {
                background: true,
                layout: 'prev,sizes, pager, next, jumper, ->, total',
                total: 100,
                currentPage: 1,
                pageSize: 10,
                pageSizes: [10, 20, 30, 40, 50, 100],
            }
        };
    },
    methods: {
        // request-api
        getData({size, current}) {
            const url = `https://mock.presstime.cn/mock/63e1d03b47892c6527977c5f/example/list?page=${current}&size=${size}`
            return fetch(url)
                .then(res => res.json())
                .then(res => this.tableData = res.data._req)
        }
    }
}