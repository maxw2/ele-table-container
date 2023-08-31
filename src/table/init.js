// function throttle(fn, time) {
//     let date = null
//     return (...arg) => {
//         if (date) return
//         date = setTimeout(() => {
//             fn(...arg)
//             date = null
//         }, time)
//     }
// }

export default {
    data() {
        return {
            tableRef: null,
            warpperRef: null,
            // 
            elWarp: null,
            elItems: null,
            elTbody: null,
            elWarpper: null
        }
    },
    mounted() {
        this.getTableRef()
    },
    methods: {
        getTableRef() {
            if (this.tableRef) return
            this.tableRef = this.$children[0]
            this.tableRef.$children.forEach(vnode => {
                const option = vnode.$options
                if (option.name === "ElTableBody") this.warpperRef = vnode
            })
            this.elTbody = this.warpperRef.$el.querySelector('tbody')
            // 
            this.initProxy()

            this.appendWarp()

        },
        initProxy() {
            // wrappedRowRender
            const that = this
            const _orgWrappedRowRender = this.warpperRef.wrappedRowRender
            this.warpperRef.wrappedRowRender = function (row, index) {
                return _orgWrappedRowRender(row, index + that.bufferIdx)
            }
        },
        appendWarp() {
            const elTable = this.tableRef.$el
            // 
            this.elWarp = document.createElement('div')
            this.elWarp.className = 'ele-vertual-warp'

            // this.elWarp.style.position = 'relative'
            // 
            this.elItems = document.createElement('div')
            this.elItems.className = 'ele-vertual-warpItems'
            // this.elItems.style.position = 'absolute'
            // this.elItems.style.left = '0px'
            // this.elItems.style.top = '0px'

            const elWarpper = elTable.querySelector('.el-table__body-wrapper')
            this.elWarpper = elWarpper
            const elWarpperTable = elWarpper.querySelector('table')

            elWarpper.insertBefore(this.elWarp, elWarpperTable)
            this.elItems.appendChild(elWarpperTable)
            this.elWarp.appendChild(this.elItems)

            // left
            this.$nextTick(() => {
                const elLeftWarpper = elTable.querySelector('.el-table__fixed .el-table__fixed-body-wrapper')
                if (elLeftWarpper) {
                    this.leftWarp = document.createElement('div')
                    this.leftWarp.className = 'ele-vertual-warp-right'
                    // this.leftWarp.style.height = this.globalHeight + 'px'
                    const elLeftWarrperTable = elLeftWarpper.querySelector('table')
                    elLeftWarpper.insertBefore(this.leftWarp, elLeftWarrperTable)
                    this.leftWarp.appendChild(elLeftWarrperTable)
                }

                // right
                const elRightWarpper = elTable.querySelector('.el-table__fixed-right .el-table__fixed-body-wrapper')
                if (elRightWarpper) {
                    this.rightWarp = document.createElement('div')
                    this.rightWarp.className = 'ele-vertual-warp-right'
                    // this.rightWarp.style.height = this.globalHeight + 'px'
                    const elRightWarrperTable = elRightWarpper.querySelector('table')
                    elRightWarpper.insertBefore(this.rightWarp, elRightWarrperTable)
                    this.rightWarp.appendChild(elRightWarrperTable)
                }
            })


            // scroll-event
            // elWarpper.addEventListener('scroll', throttle.call(this, this.eventScroll, 10))
            elWarpper.addEventListener('scroll', this.eventScroll)

        },
        initItemHeight() {
            if (!this.data.length) return

            if (this.vertual) {
                const eleTableHeight = this.tableRef.$el.offsetHeight
                const tbody = this.tableRef.$el.querySelector('.el-table__body-wrapper tbody')
                const tbodyHeight = tbody.offsetHeight
                const ave = tbodyHeight / this.vCount

                if (tbodyHeight) {
                    this.itemHeight = ave

                    this.vCount = Math.floor(eleTableHeight / ave) || 1
                }

            }

            else if (!this.vertual) {
                const eleTableHeight = this.tableRef.$el.offsetHeight
                const tr = this.tableRef.$el.querySelector('.el-table__body-wrapper tr')
                const trHeight = tr?.offsetHeight
       
                if (trHeight) {
                    this.itemHeight = trHeight
                    this.vCount = Math.floor(eleTableHeight / trHeight) || 1
                }
            }
        },
        getGloHeight() {
            if (this.vertual) return this.position[this.data.length - 1] || 0
            else return this.data.length * this.itemHeight
        },
    }
}