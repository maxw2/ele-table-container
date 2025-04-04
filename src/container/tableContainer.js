import eleTable from '@/table/index.js'

export default {
    name: 'eleTableContainer',
    components: {
        eleTable
    },
    data() {
        return {
            loading: false,
            size: 0,
            current: 0
        }
    },
    props: {
        data: {
            type: Array,
            default() {
                return []
            }
        },
        getData: {
            type: Function,
            default: null
        },
        pageOpt: {
            type: Object,
            default() {
                return {
                    background: true,
                    layout: "prev,sizes, pager, next, jumper, ->, total",
                    total: 100,
                    currentPage: 1,
                    pageSize: 100,
                    pageSizes: [10, 20, 30, 40, 50, 100],
                }
            }
        }
    },
    mounted() {
        this.getAxios()
    },
    methods: {
        getAxios() {
            if(!this.getData) return 
            if(!this.size) this.size = this.pageOpt.pageSize
            if(!this.current) this.current = this.pageOpt.currentPage
            this.loading = true
            this.getData({size: this.size, current: this.current })
                .finally(() => {
                    setTimeout(() => {
                        this.loading = false
                    }, 500)
                })
        },
        sizeChange(size) {
            this.size = size
            this.getAxios()
            // this.pProps.pageSize = size
            // this.loading = true
            // this.$emit('update:pageOpt', {...this.pageOpt, pageSize: size})
            // this.getData()
            //     .finally(() => {
            //         setTimeout(() => {
            //             this.loading = false 
            //         }, 500)
            //     })
        },
        currentChange(page) {
            this.current = page
            this.getAxios()
            // if (this.loading) return
            // this.pProps.currentPage = page
            // this.loading = true
            // this.$emit('update:pageOpt', {...this.pageOpt, currentPage: page})
            // this.getData()
            //     .finally(() => {
            //         setTimeout(() => {
            //             this.loading = false
            //         }, 500)
            //     })
        }
    },
    
    computed: {
        // tProps() {
        //     return this.$attrs
        // },
        // pProps() {
        //     return this.$attrs.pageOpt
        // },
        // getData() {
        //     return this.$attrs.getData
        // },
    },
    render() {
        return (
            <div class='ele-table-container'>
                <ele-table data={this.$props.data} attrs={this.$attrs} v-loading={this.loading}></ele-table>
                <el-pagination
                    props={this.pageOpt}
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