import * as React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin as AntSpin, SpinProps as AntSpinProps } from 'antd'

import './style.css'

export type SpinProps = AntSpinProps

const Spin: React.FC<SpinProps> = props => {
  return <AntSpin {...props} />
}

export const SpinIcon: React.FC<{ size?: number }> = props => {
  const { size = 24 } = props
  return <LoadingOutlined style={{ fontSize: size }} />
}

Spin.defaultProps = {
  indicator: <SpinIcon />
}

export default Spin
