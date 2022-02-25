import * as React from 'react'
import { Input as AntInput, InputProps as AntInputProps } from 'antd'

import '../assets/style/form-item.css'
import 'antd/lib/input/style/index.css'
import './style.css'

export type InputProps = AntInputProps & {
  rounded?: true | false
}

const Input: React.FC<InputProps> = props => {
  const { rounded, ...restProps } = props
  return <AntInput className={!rounded ? undefined : 'roundedSearch'} {...restProps} />
}

export default Input
