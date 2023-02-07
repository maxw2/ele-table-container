# EleTableContainer 表格

### 介绍
- 整合Table表格的完整交互
- 适合于中后台管理场景下的业务表格
- 内置 **v-loading** 与 **el-pagination** 
- 自动处理请求数据

### 场景演示
<table-container></table-container>

```
 <tableContainer /> 集成了<ele-table v-loading /> 与 <el-pagination />
 在EleTable的基础上新增了两个属性
 - getData:Function  请求的接口函数,赋值data后抛出Promise
 - pageOpt:Object    配置pagination的对象
```


```js
export default {
    template: `
        <div>
            <ele-table-container 
                class='ele-table-container'
                :data="tableData" 
                :columns="columns" 
                :pageOpt="pageOpt" 
                :getData="getData"
                max-height='300'
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
        getData() {
            const url = `https://mock.presstime.cn/mock/63e1d03b47892c6527977c5f/example/list?page=${this.pageOpt.currentPage}&size=${this.pageOpt.pageSize}`
            return fetch(url)
                .then(res => res.json())
                .then(res => this.tableData = res.data._req)
        }
    }
}
```