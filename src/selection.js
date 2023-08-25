import { toggleRowStatus, getKeysMap, getRowIdentity } from './originElement'
export default {
    mounted() {
        this.initSelection()
    },
    methods: {
        initSelection() {
            if(!this.tableRef) throw new Error('MODULE-SELECTION: tableRef is undefined')
            const that = this
            // 全选
            function _toggleAllSelection() {
                const states = this.states;
                const { selection } = states;
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
            function _updateAllSelected() {
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
            this.tableRef.store.toggleAllSelection = _toggleAllSelection
            this.tableRef.store.updateAllSelected = _updateAllSelected
        }
    }
}