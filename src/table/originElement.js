export function toggleRowStatus(statusArr, row, newVal) {
    let changed = false;
    const index = statusArr.indexOf(row);
    const included = index !== -1;

    const addRow = () => {
        statusArr.push(row);
        changed = true;
    };
    const removeRow = () => {
        statusArr.splice(index, 1);
        changed = true;
    };

    if (typeof newVal === 'boolean') {
        if (newVal && !included) {
            addRow();
        } else if (!newVal && included) {
            removeRow();
        }
    } else {
        if (included) {
            removeRow();
        } else {
            addRow();
        }
    }
    return changed;
}

export const getKeysMap = function (array, rowKey) {
    const arrayMap = {};
    (array || []).forEach((row, index) => {
        arrayMap[getRowIdentity(row, rowKey)] = { row, index };
    });
    return arrayMap;
};

export const getRowIdentity = (row, rowKey) => {
    if (!row) throw new Error('row is required when get row identity');
    if (typeof rowKey === 'string') {
        if (rowKey.indexOf('.') < 0) {
            return row[rowKey];
        }
        let key = rowKey.split('.');
        let current = row;
        for (let i = 0; i < key.length; i++) {
            current = current[key[i]];
        }
        return current;
    } else if (typeof rowKey === 'function') {
        return rowKey.call(null, row);
    }
};

export function getRowClass(row, rowIndex) {
    const classes = ['el-table__row', `row_${rowIndex}`];
    if (this.table.highlightCurrentRow && row === this.store.states.currentRow) {
        classes.push('current-row');
    }

    if (this.stripe && rowIndex % 2 === 1) {
        classes.push('el-table__row--striped');
    }
    const rowClassName = this.table.rowClassName;
    if (typeof rowClassName === 'string') {
        classes.push(rowClassName);
    } else if (typeof rowClassName === 'function') {
        classes.push(rowClassName.call(null, {
            row,
            rowIndex
        }));
    }

    if (this.store.states.expandRows.indexOf(row) > -1) {
        classes.push('expanded');
    }

    return classes;
}