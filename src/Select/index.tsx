import * as React from 'react'
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd'
import { CaretDown } from 'phosphor-react'

import './style.css'

export type SelectProps = AntSelectProps

const Select: React.FC<SelectProps> = props => {
  return <AntSelect {...props} />
}

Select.defaultProps = {
  suffixIcon: <CaretDown className="rotate-caret" size={16} />
}

export default Select
