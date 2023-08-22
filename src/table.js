import eleColumn from './column'
import selection from './selection'


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
            WeakMap: new Map(),
            position: [],
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
        this.$nextTick(() => {
            this.observerCB(null, true)
        })


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

            this.$nextTick(() => {
                this.appendWarp()
                // this.observer()
            })


        },
        appendWarp() {
            const elTable = this.tableRef.$el
            // 
            this.elWarp = document.createElement('div')
            this.elWarp.className = 'ele-vertual-warp'
            this.elWarp.style.height = this.globalHeight + 'px'
            this.elWarp.style.position = 'relative'
            // 
            this.elItems = document.createElement('div')
            this.elItems.className = 'ele-vertual-warpItems'
            this.elItems.style.position = 'absolute'
            this.elItems.style.left = '0px'
            this.elItems.style.top = '0px'

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
                elRightWarpper.insertBefore(this.rightWarp, elRightWarrperTable)
                this.rightWarp.appendChild(elRightWarrperTable)
            }




            setTimeout(() => {
                this.observerCB(null, true)
                this.itemHeight = elWarpper.querySelector('tr').offsetHeight
                console.log(elWarpper.querySelector('tr').offsetHeight, 'clientHeight', elWarpperTable.clientHeight / 13)
            })

            const onScroll = throttle.call(this, this.eventScroll, 10)
            // scroll-event
            elWarpper.addEventListener('scroll', onScroll)

        },
        observer() {
            const table = this.elWarp.querySelector('table')
            const observe = new MutationObserver(this.observerCB)
            observe.observe(table, {
                subtree: true,
                childList: true
            })
        },
        observerCB(mutation, init = false) {
            let buffIdx = this.bufferIdx
            // 初始化
            if (!mutation && init) {
                // const items = this.elWarp.querySelectorAll('tr')
                // items.forEach(el => {
                //     this.WeakMap.set(el, {
                //         index: ++buffIdx,
                //         ele: el,
                //         rect: el.getBoundingClientRect()
                //     })
                // })

                // 
                const items = this.elWarp.querySelectorAll('tr')
                items.forEach(el => {
                    const height = el.getBoundingClientRect().height
                    const oldIdx = buffIdx - 1
                    if (oldIdx >= 0) this.position[buffIdx] = {
                        index: buffIdx,
                        height: height,
                        top: this.position[oldIdx].bottom,
                        bottom: height + this.position[oldIdx].bottom
                    }
                    else {
                        this.position[buffIdx] = {
                            index: buffIdx,
                            height: height,
                            top: 0,
                            bottom: height
                        }
                    }
                    buffIdx++
                })

                console.log(this.position)
            }
            else {
                mutation.forEach(val => {
                    if (val.addedNodes.length) {
                        val.addedNodes.forEach(el => {
                            const height = el.getBoundingClientRect().height
                            const oldIdx = buffIdx - 1
                            if (oldIdx >= 0) this.position[buffIdx] = {
                                index: buffIdx,
                                height: height,
                                top: this.position[oldIdx].bottom,
                                bottom: height + this.position[oldIdx].bottom
                            }
                            else {
                                this.position[buffIdx] = {
                                    index: buffIdx,
                                    height: height,
                                    top: 0,
                                    bottom: height
                                }
                            }
                            buffIdx++
                        })
                    }

                    // if (val.addedNodes.length) {
                    //     val.addedNodes.forEach(el => {
                    //         this.WeakMap.set(el, {
                    //             index: ++buffIdx,
                    //             ele: el,
                    //             rect: el.getBoundingClientRect()
                    //         })
                    //     })

                    // }
                    // else if (val.removedNodes.length) {
                    //     val.removedNodes.forEach(el => {
                    //         // console.log(el, 'removeNodes')
                    //         this.WeakMap.delete(el)
                    //     })
                    // }

                })
            }

            // console.log('observe', mutation)
            console.log('observe', this.position)
        },
        eventScroll(ev) {
            const top = ev.target.scrollTop

            console.log(this.position)
            // part 1
            // this.startIdx = Math.floor(top / this.itemHeight)
            // const bufferTop = (this.startIdx - this.bufferIdx) * this.itemHeight
            // const topTo = (top - top % this.itemHeight) - bufferTop

            // part 2
            let current = this.position.find(val => val.bottom > top && top >= val.top)
            console.log(current.index, 'current', top)
            this.startIdx = current.index
            this.itemHeight = current.height
            const bufferTop = current.top
            
            const topTo = (top - top % current.height)

            

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

