import * as React from 'react'
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd'
import '../assets/style/form-item.css'
import 'antd/lib/style/default.css'
import 'antd/lib/select/style/index.css'
import 'antd/lib/empty/style/index.css'
import './style.css'

export type SelectProps = AntSelectProps

const Select: React.FC<SelectProps> = props => {
  return <AntSelect {...props} />
}

export default Select
