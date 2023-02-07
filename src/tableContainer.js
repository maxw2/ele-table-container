import eleTable from './table'

export default {
    name: 'eleTableContainer',
    components: {
        eleTable
    },
    data() {
        return {
            loading: false,
            getData: null,
            tProps: null,
            pProps: null
        }
    },
    methods: {
        getAxios() {
            this.loading = true
            this.getData()
                .finally(() => {
                    this.loading = false
                })
        },
        sizeChange(size) {
            this.pProps.pageSize = size
            this.loading = true
            this.getData()
                .finally(() => {
                    this.loading = false
                })
        },
        currentChange(page) {
            // if (this.loading) return
            this.pProps.currentPage = page
            this.loading = true
            this.getData()
                .finally(() => {
                    this.loading = false
                })
        }
    },
    mounted() {
        this.getData = this.$attrs.getData
        this.tProps = this.$attrs
        this.pProps = this.$attrs.pageOpt
        this.getAxios()
    },
    computed: {
        tableData() {
            return this.$attrs.data
        }
    },
    render(h, context) {
        return (
            <div class='ele-table-container'>
                <ele-table props={{...this.tProps,'data': this.tableData}} v-loading={this.loading}></ele-table>
                <el-pagination
                    props={this.pProps}
                    on={
                        {
                            'size-change': this.sizeChange,
                            'current-change': this.currentChange
                        }
                    }
                />
            </div >
        )
    }
}