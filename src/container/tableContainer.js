import eleTable from '@/table/index.js'

export default {
    name: 'eleTableContainer',
    components: {
        eleTable
    },
    data() {
        return {
            loading: false,
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
        this.getAxios()
    },
    computed: {
        tProps() {
            return this.$attrs
        },
        pProps() {
            return this.$attrs.pageOpt
        },
        getData() {
            return this.$attrs.getData
        },
    },
    render() {
        return (
            <div class='ele-table-container'>
                <ele-table props={this.tProps} v-loading={this.loading}></ele-table>
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





    /** functional */
    // render(h, context) {
    //     console.log(_loading, '1')
    //     const pProps = context.props.pageOpt
    //     const tProps = context.props
    //     const getData = context.props.getData

    //     if(!created) {
    //         getAxios()
    //         created = true
    //     } 

    //     function getAxios() {
    //         _loading = true
    //         setTimeout(() => {
    //             getData().finally(_loading = false)
    //         })
    //     }

    //     function sizeChange(size) {
    //         pProps.pageSize = size
    //         console.log('sizeChange')
    //         // pProps.loading = true
    //         getAxios()


    //     }

    //     function currentChange(page) {
    //         pProps.currentPage = page
    //         console.log('currentChange')
    //         // pProps.loading = true
    //         getAxios()

    //     }



    //     return (
    //         <div class='ele-table-container'>
    //             <ele-table props={{ ...tProps }} v-loading={_loading}></ele-table>
    //             <el-pagination
    //                 props={{ ...pProps }}
    //                 on={
    //                     {
    //                         'size-change': sizeChange,
    //                         'current-change': currentChange
    //                     }
    //                 }
    //             />
    //         </div >
    //     )
    // },
}