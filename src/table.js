import eleColumn from './column'

import init from './init'
import selection from './selection'
import vertual from './vertual'



export default {
    name: 'eleTable',
    components: { eleColumn },
    mixins: [init, selection, vertual],
    data() {
        return {
            // 
            itemHeight: 0,
            // 
            vCount: 5,
            startIdx: 0,
            // top
            selections: [],
            WeakMap: new Map(),
            posMap: [],
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
        },
        bufferCount: {
            type: Number,
            default: 0
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
            if (this.vertual) {

                return this.position[this.data.length - 1] || 0
            } 
            else {
                this.elWarp.style.height = this.data.length * this.itemHeight + 'px'
                return this.data.length * this.itemHeight
            } 
        },
    },
    mounted() {
        console.log('mounted', this)
        
        this.$nextTick(() => {
            this.updateAllData()
        })

    },
    methods: {
        updateAllData() {
            this.$nextTick(()=>{
                this.initItemHeight()  
                this.getPosition()
                this.getposMap()
                
                this.eventScroll()
            })
        },
        eventScroll(ev) {
            const scrollTop = ev?.target?.scrollTop || 0
            let topTo = 0

            if (!this.vertual) {
                this.startIdx = Math.floor(scrollTop / this.itemHeight)
                const bufferTop = (this.startIdx - this.bufferIdx) * this.itemHeight
                topTo = (scrollTop - scrollTop % this.itemHeight) - bufferTop

            }

            if (this.vertual) {
                const [idx, height, bottom] = this.getPosIdx(scrollTop)
                this.startIdx = idx
                topTo = bottom - height
            }

            this.elWarp.style.height = this.globalHeight - topTo + 'px'
            this.elWarp.style.transform = `translate3d(0, ${topTo}px, 0)`


            // // left
            // if (this.leftWarp) {
            //     this.leftWarp.style.height = this.globalHeight - topTo + 'px'
            //     this.leftWarp.style.transform = `translate3d(0, ${topTo}px, 0)`
            // }
            // // right
            // if (this.rightWarp) {
            //     this.rightWarp.style.height = this.globalHeight - topTo + 'px'
            //     this.rightWarp.style.transform = `translate3d(0, ${topTo}px, 0)`
            // }

        }

    },
    render(h) {
        return (
            <el-table data={this.vData} attrs={this.$attrs} on={this.$listeners}  >
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

