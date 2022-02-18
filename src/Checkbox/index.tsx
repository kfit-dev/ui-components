import * as React from 'react'
import { Checkbox as AntCheckbox, CheckboxProps as AntCheckboxProps } from 'antd'
import 'antd/lib/checkbox/style/index.css'
import './style.css'

export type CheckboxProps = AntCheckboxProps
const Checkbox: React.FC<CheckboxProps> = props => {
  const { indeterminate, checked, ...restProps } = props

  const [checkIndeterminate, setIndeterminate] = React.useState(indeterminate)
  const [checkAll, setCheckAll] = React.useState(checked)

  const onCheckAllChange = (e: any) => {
    const option = !checkIndeterminate
    setIndeterminate(option)
    setCheckAll(e.target.checked)
  }

  return (
    <AntCheckbox
      onChange={onCheckAllChange}
      indeterminate={indeterminate !== undefined ? checkIndeterminate : undefined}
      checked={checkAll}
      {...restProps}
    />
  )
}

export default Checkbox
