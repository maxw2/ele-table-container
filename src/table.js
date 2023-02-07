import eleColumn from './column'

export default {
    name: 'eleTable',
    functional: true,
    components: { eleColumn },
    render(h, context) {
        const data = context.data
        const props = context.props
        data.attrs = {}

        const columns = context.props.columns || []
        const globalSlots = context.children || []
        let slotAppend = globalSlots.filter(vnode => vnode?.data?.slot === 'append')[0]

        return (
            <el-table {...{ props, ...data }}  >
                {
                    columns.map(col => {

                        return <eleColumn props={{ ...col, globalSlots }}></eleColumn>
                    })
                }
                {
                    slotAppend ?
                        <template slot='append'>
                            {slotAppend}
                        </template> : null
                }
            </el-table>
        )

    }


}

