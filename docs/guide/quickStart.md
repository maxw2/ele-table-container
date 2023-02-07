# 快速开始

### 介绍
- element-ui@2.15.11 / vue@2.7.14 封装Table组件
- 基于100%原生API
- 实现JSON动态驱动表单
- 为实现自定义表格 / 嵌套表头等需求仅新增 [**slotName**](guide/eleTable?id=自定义列模板) / [**children**](guide/eleTable?id=多级表头) 两个字段



### 初始化
```js

npm install ele-table-container

import {Table, TableContainer} from 'ele-table-container'

Vue.components('ele-table', Table)
// or
export default {
    components: {
        'ele-table': Table
    }
}

```