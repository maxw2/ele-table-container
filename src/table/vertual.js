export default {
    data() {
        return {
            posMap: [],
            position: []
        }
    },
    props: {
        vertual: {
            type: Boolean,
            default: true
        },
        estimatedHeight: {
            type: Number,
            default: 0
        }
    },
    updated() {
        this.getposMap()
    },
    methods: {
        getposMap() {
            const tbody = this.elWarp.querySelectorAll('tr')
            const idx = this.startIdx - this.bufferCount > 0 ? this.startIdx - this.bufferCount : 0
            // const idx = this.startIdx - this.bufferCount > 0 ? this.bufferIdx : 0
            let bottom = this.position[idx - 1] || 0
            tbody.forEach((el, index) => {
                bottom += el.offsetHeight
                this.posMap[idx + index] = bottom
                this.position[idx + index] = bottom
            })
        },
        getPosition() {
            let pos = []
            let bottom = 0
            this.data.map((val, index) => {
                const curMap = this.posMap[index]
                if (curMap) bottom = curMap
                else bottom += this.estimatedHeight || this.itemHeight

                pos[index] = bottom
            })
            this.position = pos
            return pos
        },
        getPosIdx(scrollTop) {
            const idx = this.position.findIndex(bottom => scrollTop <= bottom)
            const height = this.position[idx - 1] ? this.position[idx] - this.position[idx - 1] : this.position[idx]
            const bottom = this.position[idx]

            return [idx, height, bottom]
        }
    }
}