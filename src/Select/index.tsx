import * as React from 'react'
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd'
import { CaretDown, Check } from 'phosphor-react'

import './style.css'

export type SelectProps = AntSelectProps & {
  showArrow?: boolean
}

export const { Option } = AntSelect

const Select: React.FC<SelectProps> = ({ suffixIcon, showArrow, ...rest }) => {
  return <AntSelect {...rest} suffixIcon={showArrow ? suffixIcon : null} />
}

export const CheckeableItem: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div className="ui-checkable-option">
    <div className="ui-item-text">{children}</div>
    {<Check className="ui-item-check" />}
  </div>
)

Select.defaultProps = {
  suffixIcon: <CaretDown className="rotate-caret" size={16} />
}

export default Select
