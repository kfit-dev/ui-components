import * as React from 'react'
import { Table as AntTable, TableProps as AntTableProps } from 'antd'

import './style.css'

export type TableProps<T> = AntTableProps<T>

const Table = <T extends {}>(props: TableProps<T>) => <AntTable {...props} />

Table.defaultProps = {}

export default Table
