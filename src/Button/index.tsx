import * as React from 'react'
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'

import 'antd/lib/button/style/index.css'
import './style.css'

export type ButtonProps = AntButtonProps & {
  iconPlacement?: 'start' | 'end'
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...restProps } = props
  return (
    <AntButton {...restProps}>
      <span
        className={
          props.iconPlacement === 'start'
            ? 'start'
            : props.iconPlacement != null
            ? 'end'
            : props.shape === 'circle'
            ? ''
            : 'default'
        }
      >
        {children}
      </span>
    </AntButton>
  )
}

Button.propTypes = {}

export default Button;
