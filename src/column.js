const eleColumn = {
    name: 'eleColumn',
    functional: true,
    components: { eleColumn },
    render(h, context) {
        // console.log(context, 'column')
        const props = context.props
        const globalSlots = props.globalSlots || null

        function defaultRender(h, props) {
            return props.render ?
                { default: (prop) => props.render(h, prop) } : {}
        }

        function selectionRender(props) {
            delete props.type
            return (<el-table-column props={{ ...props }} scopedSlots={{
                header: () => h('div', 'selecHeader'),
                default: () => h('div', 'selecDefault')
            }} ></el-table-column>)
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