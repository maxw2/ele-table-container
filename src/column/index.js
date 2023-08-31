var eleColumn = {
    name: 'eleColumn',
    functional: true,
    components: { eleColumn },
    render(h, context) {
        const props = context.props
        const globalSlots = props.globalSlots || null

        function defaultRender(h, props) {
            return props.render ?
                { default: (prop) => props.render(h, prop) } : {}
        }

        return (
            <el-table-column props={props} scopedSlots={defaultRender(h, props)} >
                {
                    props.children ?
                        props.children.map(col =>
                            <eleColumn props={{ ...col, globalSlots }} ></eleColumn>
                        ) : null
                }
            </el-table-column >)
    }
}


export default eleColumn