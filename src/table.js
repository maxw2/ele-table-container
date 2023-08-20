import eleColumn from './column'
import { toggleRowStatus, getKeysMap, getRowIdentity } from './originElement'


export default {
    name: 'eleTable',
    components: { eleColumn },
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
            bufferCount: 5,
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
        vColumns() {
            return this.columns.map(val => {
                if (val.type === 'selection') return {
                    ...val,
                    renderHeader: (h, props) => {
                        return h('el-button', '1ds')
                    }
                }
            })
        },
        bufferIdx() {
            return this.startIdx - this.bufferCount > 0 ?  this.startIdx - this.bufferCount : 0
        },
        globalHeight() {
            return this.data.length * this.itemHeight
        },
        isAllSelected() {
            setTimeout(() => {
                const state = this.data.length === this.selections.length ? true : false
                console.log(state, 'isAllSelected')
                return state
            })
            // const state = this.data.length === this.selections.length ? true : false
            // console.log(state, 'isAllSelected')
            // return state
        }
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
            const that = this
            // 全选
            function _toggleAllSelection() {
                const states = this.states;
                const { data = [], selection } = states;
                // when only some rows are selected (but not all), select or deselect all of them
                // depending on the value of selectOnIndeterminate
                const value = states.selectOnIndeterminate
                    ? !states.isAllSelected
                    : !(states.isAllSelected || selection.length);
                states.isAllSelected = value;

                let selectionChanged = false;
                that.data.forEach((row, index) => {
                    if (states.selectable) {
                        if (states.selectable.call(null, row, index) && toggleRowStatus(selection, row, value)) {
                            selectionChanged = true;
                        }
                    } else {
                        if (toggleRowStatus(selection, row, value)) {
                            selectionChanged = true;
                        }
                    }
                });

                if (selectionChanged) {
                    this.table.$emit('selection-change', selection ? selection.slice() : []);
                }
                this.table.$emit('select-all', selection);
            }
            // 全选状态
            function updateAllSelected() {
                const states = this.states;
                const { selection, rowKey, selectable } = states;
                // data 为 null 时，解构时的默认值会被忽略
                const data = that.data || [];
                if (data.length === 0) {
                    states.isAllSelected = false;
                    return;
                }

                let selectedMap;
                if (rowKey) {
                    selectedMap = getKeysMap(selection, rowKey);
                }
                const isSelected = function (row) {
                    if (selectedMap) {
                        return !!selectedMap[getRowIdentity(row, rowKey)];
                    } else {
                        return selection.indexOf(row) !== -1;
                    }
                };
                let isAllSelected = true;
                let selectedCount = 0;
                for (let i = 0, j = data.length; i < j; i++) {
                    const item = data[i];
                    const isRowSelectable = selectable && selectable.call(null, item, i);
                    if (!isSelected(item)) {
                        if (!selectable || isRowSelectable) {
                            isAllSelected = false;
                            break;
                        }
                    } else {
                        selectedCount++;
                    }
                }

                if (selectedCount === 0) isAllSelected = false;
                states.isAllSelected = isAllSelected;
            }
            // wrappedRowRender
            const _orgWrappedRowRender = this.warpperRef.wrappedRowRender
            this.warpperRef.wrappedRowRender = function (row, index) {
                return _orgWrappedRowRender(row, index + that.bufferIdx)
            }

            this.tableRef.store.toggleAllSelection = _toggleAllSelection
            this.tableRef.store.updateAllSelected = updateAllSelected
        },
        refCallBack(el) {
            if (this.tableRef) return
            this.tableRef = el
            this.tableRef.$children.forEach(vnode => {
                const option = vnode.$options
                if (option.name === "ElTableBody") this.warpperRef = vnode
            })
            this.tbody = this.warpperRef.$el.querySelectorAll('tbody')

            this.appendWarp()
            this.$nextTick(()=>{
                this.bufferItemArr()
            })
        },
        bufferItemArr() {
            // const trNodes = [...this.elWarp.querySelectorAll('tr')]
            // this.itemHeightArr = trNodes.map((node,index) => {
            //     return node.offsetHeight
            // })
            [...this.elWarp.querySelectorAll('tr')].forEach((node,index) => {
                if(this.bufferIdx) this.itemHeight
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

            setTimeout(() => {
                // this.elWarpHeight = elWarpper.clientHeight

                this.itemHeight = elWarpper.querySelector('tr').offsetHeight
                console.log(elWarpper.querySelector('tr').offsetHeight, 'clientHeight', elWarpperTable.clientHeight / 13)
            })

            elWarpper.insertBefore(this.elWarp, elWarpperTable)
            this.elItems.appendChild(elWarpperTable)
            this.elWarp.appendChild(this.elItems)
            // scroll-event
            elWarpper.addEventListener('scroll', this.eventScroll.bind(this))

        },
        eventScroll(ev) {
            const top = ev.target.scrollTop

            this.startIdx = Math.floor(top / this.itemHeight)

             const bufferTop =  (this.startIdx - this.bufferIdx) * this.itemHeight
            
            // const bufferTop = this.bufferHeight
            const topTo = (top - top % this.itemHeight) - bufferTop
            console.log(bufferTop, 'buffTop',top)
            console.log(top % this.itemHeight)
            this.elWarp.style.height = this.globalHeight - topTo + 'px'
            this.elWarp.style.transform = `translate3d(0, ${topTo}px, 0)`

            this.bufferItemArr()
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

