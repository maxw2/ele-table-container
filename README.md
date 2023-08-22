# 快速开始

### 介绍
- element-ui@2.15.11 / vue@2.7.14 封装Table组件
- 基于100%原生API
- 实现JSON动态驱动表单
- 为实现自定义表格 / 嵌套表头等需求仅新增 [**slotName**](guide/eleTable?id=自定义列模板) / [**children**](guide/eleTable?id=多级表头) 两个字段
- [文档地址(demo)]()

### 初始化
```js

npm install ele-table-container

import {Table, TableContainer} from 'ele-table'

Vue.components('ele-table', Table)
// or
export default {
    components: {
        'ele-table': Table
    }
}

```
### 功能点
| 功能         | 状态 |
| ------------ | ---- |
| JSON驱动表格 | ✅    |
| 自定义单元格 | ✅    |
| 虚拟列表     | 🚧    |
| 多选         | ✅    |
| 展开行       | 🚧    |
| 合并         | 🚧    |
| 拖拽         | 🚧    |
| 列固定优化   | 🚧    |
