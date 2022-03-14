import * as React from 'react'
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd'

import './style.css'

export type SelectProps = AntSelectProps

const Select: React.FC<SelectProps> = props => {
  return <AntSelect {...props} />
}

export default Select
