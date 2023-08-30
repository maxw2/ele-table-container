function throttle(fn, time) {
    let date = null
    return (...arg) => {
        if (date) return
        date = setTimeout(() => {
            fn(...arg)
            date = null
        }, time)
    }
}

export default {
    data() {
        return {
            tableRef: null,
            warpperRef: null,
            // 
            elWarp: null,
            elItems: null,
            elTbody: null,
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
            if (this.itemHeight) return this.itemHeight
            const warpHeight = this.tableRef.$el.offsetHeight
            const tbodyHeight = this.tableRef.$el.querySelector('.el-table__body-wrapper tbody').offsetHeight
            const average = tbodyHeight / (this.vCount + this.bufferCount)
            if (tbodyHeight && average && this.vertual) {
                this.vCount = Math.ceil(warpHeight / average)
                this.itemHeight = Math.round(average)
                console.log('item')
            } else if (tbodyHeight && average && !this.vertual) {
                const tr = this.tableRef.$el.querySelector('.el-table__body-wrapper tr')
                if (tr) {
                    this.itemHeight = tr.offsetHeight
                    console.log(this.itemHeight, 'vas fasle')
                }

            }

            console.log(warpHeight, 'warpJeight', average)
            // 

            this.elWarp.style.height = this.globalHeight + 'px'
            return this.itemHeight
        },
        getGloHeight() {
            if (this.vertual) return this.position[this.data.length - 1] || 0
            else return this.data.length * this.itemHeight
        },
    }
}