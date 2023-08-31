import eleColumn from '@/column/index.js'

import init from './init'
import selection from './selection'
import vertual from './vertual'
import merge from './merge'

export default {
    name: 'eleTable',
    components: { eleColumn },
    mixins: [init, selection, vertual, merge],
    data() {
        return {
            attrs: {},
            // 
            itemHeight: 0,
            // 
            vCount: 10,
            startIdx: 0,
            scrollTop: 0
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
    watch: {
        data() {
            this.updateAllData()
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
        this.updateAllData()
    },
    methods: {
        updateAllData() {
            this.resetPosMap()
            this.$nextTick(() => {
                this.initItemHeight()
                this.getPosition()
                this.getposMap()

                if (this.elWarpper) {
                    this.elWarpper.scrollTo({
                        top: 0,
                        left: 0,
                        // behavior: "smooth",
                    })
                }
                this.eventScroll()
            })
        },
        eventScroll(ev) {
            const scrollTop = ev?.target?.scrollTop || 0
            this.scrollTop = scrollTop
            let topTo = 0

            if (!this.vertual) {
                this.startIdx = Math.floor(scrollTop / this.itemHeight) || 0
                const bufferTop = (this.startIdx - this.bufferIdx) * this.itemHeight
                topTo = (scrollTop - scrollTop % this.itemHeight) - bufferTop

            }

            if (this.vertual) {
                const [idx, top, bufferTop] = this.getPosIdx(scrollTop)
                this.startIdx = idx
                topTo = top - bufferTop
            }



            this.elWarp.style.height = this.getGloHeight() + 'px'
            this.elItems.style.transform = `translate3d(0, ${topTo}px, 0)`


            // left
            if (this.leftWarp) {
                this.leftWarp.style.height = this.getGloHeight() - topTo + 'px'
                this.leftWarp.style.transform = `translate3d(0, ${topTo}px, 0)`
            }
            // right
            if (this.rightWarp) {
                this.rightWarp.style.height = this.getGloHeight() - topTo + 'px'
                this.rightWarp.style.transform = `translate3d(0, ${topTo}px, 0)`
            }
        }

    },
    render() {
        return (
            <el-table data={this.vData} props={{ ...this.$attrs, ...this.attrs }} on={this.$listeners}  >
                {
                    this.columns.map(col => {
                        return <eleColumn attrs={{ ...col }} />
                    })
                }
                <template slot='append'>
                    {this.$slots['append']}
                </template>
            </el-table>
        )

    }


}

