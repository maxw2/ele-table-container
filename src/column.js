const eleColumn = {
    name: 'eleColumn',
    functional: true,
    components: { eleColumn },
    render(h, context) {
        const props = context.props
        const globalSlots = props.globalSlots
        const slotName = props.slotName
        /**
         * 1. <template slot=slotName>
         *     // slot=header
         *     // slot=default 
         *     </template>
         * 2. <el-button slot=slotName></el-button>
         */
        let slot = null
        let scopedSlots = {}
        let slotHeader = []
        let slotDefault = []
        if (slotName) {
            slot = filterColumnSlots(globalSlots, slotName)
            slot?.children?.forEach(vnode => {
                if (vnode.data?.slot === 'header') slotHeader.push(vnode)
                else if (vnode.data?.slot === 'default') slotDefault.push(vnode)
                else slotDefault.push(vnode)
            })
            scopedSlots = slot?.data?.scopedSlots
            // console.log(slotName)
            // console.log('slot作用域', scopedSlots)
            // console.log('slot具名', slotHeader, slotDefault)
            // console.log('=========')
        }
        return (
            <el-table-column props={props} scopedSlots={scopedSlots} >
                {
                    // column 嵌套 slot=default 不可用
                    props.children ?
                        props.children.map(col => <eleColumn props={{ ...col, globalSlots }}></eleColumn>) :
                        columnContext(h, slotHeader, slotDefault)

                    // 

                }
            </el-table-column >)
    }
}


function filterColumnSlots(globalSlots, slotName) {
    return globalSlots.filter(vnode => {
        if (vnode.data?.slot === slotName) return true
    })[0]
}

function columnContext(h, slotHeader, slotDefault) {
    let vnodeArr = []

    if (slotHeader && slotHeader.length) {
        vnodeArr.push(
            h(
                'template',
                {
                    slot: 'header'
                },
                slotHeader
            )
        )
    }

    if (slotDefault && slotDefault.length) {
        vnodeArr.push(
            h(
                'template',
                {
                    slot: 'default'
                },
                slotDefault
            )
        )
    }

    return vnodeArr

}


export default eleColumn