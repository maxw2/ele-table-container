import eleColumn from './column'
import selection from './selection'


export default {
    name: 'eleTable',
    components: { eleColumn },
    mixins: [selection],
    data() {
        return {
            item: [],
            tableRef: null,
            warpperRef: null,
            // 
            elWarp: null,
            elItems: null,
            // 
            elWarpHeight: null,
            itemHeight: 48,
            itemHeightArr: [],
            // 
            vCount: 7,
            bufferCount: 2,
            bufferHeight: 0,
            startIdx: 0,
            // top
            selections: [],
            btn: true
        }
    },
    props: {
        data: {
            type: Array,
            default() {
                return []
            }
        },
        columns: {
            type: Array,
            default() {
                return []
            }
        }
    },
    watch: {
        data(val) {
            this.elWarp.style.height = this.elItems * val.length + 'px'
        }
    },
    computed: {
        vData() {
            const start = this.bufferIdx
            const end = this.startIdx + this.vCount + this.bufferCount

            return this.data.slice(start, end)
        },
        bufferIdx() {
            return this.startIdx - this.bufferCount > 0 ? this.startIdx - this.bufferCount : 0
        },
        globalHeight() {
            return this.data.length * this.itemHeight
        },
    },
    mounted() {
        this.initProxy()
        console.log('mounted')
    },
    updated() {
        console.log('updated')
    },
    methods: {
        initProxy() {
            // wrappedRowRender
            const that = this
            const _orgWrappedRowRender = this.warpperRef.wrappedRowRender
            this.warpperRef.wrappedRowRender = function (row, index) {
                return _orgWrappedRowRender(row, index + that.bufferIdx)
            }


        },
        refCallBack(el) {
            if (this.tableRef) return
            this.tableRef = el
            this.tableRef.$children.forEach(vnode => {
                const option = vnode.$options
                if (option.name === "ElTableBody") this.warpperRef = vnode
            })
            this.tbody = this.warpperRef.$el.querySelectorAll('tbody')

            this.$nextTick(() => this.appendWarp())


        },
        bufferItemArr() {
            // const trNodes = [...this.elWarp.querySelectorAll('tr')]
            // this.itemHeightArr = trNodes.map((node,index) => {
            //     return node.offsetHeight
            // })
            [...this.elWarp.querySelectorAll('tr')].forEach((node, index) => {
                if (this.bufferIdx) this.itemHeight
            })

        },
        appendWarp() {
            const elTable = this.tableRef.$el
            // 
            this.elWarp = document.createElement('div')
            this.elWarp.className = 'ele-vertual-warp'
            this.elWarp.style.height = this.globalHeight + 'px'
            // 
            this.elItems = document.createElement('div')
            this.elItems.className = 'ele-vertual-warpItems'

            const elWarpper = elTable.querySelector('.el-table__body-wrapper')
            const elWarpperTable = elWarpper.querySelector('table')

            elWarpper.insertBefore(this.elWarp, elWarpperTable)
            this.elItems.appendChild(elWarpperTable)
            this.elWarp.appendChild(this.elItems)

            // left
            const elLeftWarpper = elTable.querySelector('.el-table__fixed .el-table__fixed-body-wrapper')
            if (elLeftWarpper) {
                this.leftWarp = document.createElement('div')
                this.leftWarp.className = 'ele-vertual-warp-right'
                this.leftWarp.style.height = this.globalHeight + 'px'
                const elLeftWarrperTable = elLeftWarpper.querySelector('table')
                console.log(elLeftWarpper)
                elLeftWarpper.insertBefore(this.leftWarp, elLeftWarrperTable)
                this.leftWarp.appendChild(elLeftWarrperTable)
            }

            // right
            const elRightWarpper = elTable.querySelector('.el-table__fixed-right .el-table__fixed-body-wrapper')
            if (elRightWarpper) {
                this.rightWarp = document.createElement('div')
                this.rightWarp.className = 'ele-vertual-warp-right'
                this.rightWarp.style.height = this.globalHeight + 'px'
                const elRightWarrperTable = elRightWarpper.querySelector('table')
                console.log(elRightWarpper)
                elRightWarpper.insertBefore(this.rightWarp, elRightWarrperTable)
                this.rightWarp.appendChild(elRightWarrperTable)
            }




            setTimeout(() => {
                // const that = this
                // let oldStartIdx = this.startIdx
                // let oldStartHeight = this.itemHeight
                // const obsver = new MutationObserver(function (mutationList, observer) {
                //     const idx = that.startIdx - that.bufferIdx
                //     const rect = elWarpper.querySelectorAll('tr')[idx].getBoundingClientRect()
                //     that.itemHeight = rect.height

                //     if (oldStartIdx < that.startIdx) {
                //         that.bufferHeight += rect.height

                //     } else that.bufferHeight -= oldStartHeight

                //     console.log('that.bufferHeight', that.bufferHeight, 'height', idx)
                //     oldStartHeight = rect.height
                //     oldStartIdx = that.startIdx


                //     console.log(mutationList, observer, 'callback', rect)
                // })
                // obsver.observe(elWarpper, { subtree: true, childList: true })

                this.itemHeight = elWarpper.querySelector('tr').offsetHeight
                console.log(elWarpper.querySelector('tr').offsetHeight, 'clientHeight', elWarpperTable.clientHeight / 13)
            })


            // scroll-event
            elWarpper.addEventListener('scroll', this.eventScroll.bind(this))

        },
        eventScroll(ev) {
            const top = ev.target.scrollTop

            this.startIdx = Math.floor(top / this.itemHeight)

            const bufferTop = (this.startIdx - this.bufferIdx) * this.itemHeight
            // const bufferTop = this.bufferHeight

            const topTo = (top - top % this.itemHeight) - bufferTop
            // console.log(bufferTop, 'buffTop',top)
            // console.log(top % this.itemHeight)
            this.elWarp.style.height = this.globalHeight - topTo + 'px'
            this.elWarp.style.transform = `translate3d(0, ${topTo}px, 0)`

            // left
            if (this.leftWarp) {
                this.leftWarp.style.height = this.globalHeight - topTo + 'px'
                this.leftWarp.style.transform = `translate3d(0, ${topTo}px, 0)`
            }
            // right
            if (this.rightWarp) {
                this.rightWarp.style.height = this.globalHeight - topTo + 'px'
                this.rightWarp.style.transform = `translate3d(0, ${topTo}px, 0)`
            }


            // this.bufferItemArr()
        }
    },
    render(h) {
        const attrs = this.$attrs
        return (
            <el-table data={this.vData} attrs={this.$attrs} ref={this.refCallBack} on={this.$listeners}  >
                {
                    this.columns.map(col => {
                        return <eleColumn props={{ ...col, globalSlots: this.$slots }}   >
                            {/* <template slot={col.slotName}><slot name={col.slotName}></slot></template> */}

                        </eleColumn>
                    })
                }
                <template slot='append'>
                    {this.$slots['append']}
                </template>
            </el-table>
        )

    }


}

