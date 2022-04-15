import * as React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin as AntSpin, SpinProps as AntSpinProps } from 'antd'
import { SpinSize } from 'antd/lib/spin'

import './style.css'

export type SpinProps = AntSpinProps

const iconSize = (size: SpinSize | number) => {
  if (size === 'small') return 14
  else if (size === 'default') return 20
  else if (size === 'large') return 32
  else return size
}

export const SpinIcon: React.FC<{ size: SpinSize | number }> = props => {
  const { size = 'default' } = props
  return <LoadingOutlined style={{ fontSize: iconSize(size) }} />
}

const Spin: React.FC<SpinProps> = props => {
  const { indicator, size = 'default', ...restProps } = props
  return <AntSpin indicator={<SpinIcon size={size} /> || indicator} {...restProps} />
}

export default Spin
