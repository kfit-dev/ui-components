import * as React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin as AntSpin, SpinProps as AntSpinProps } from 'antd'
import { SpinSize } from 'antd/lib/spin'

import './style.css'

export type SpinProps = AntSpinProps
const SpinSizeNumbers = {
  small: 14,
  default: 20,
  large: 32
}

const iconSize = (size: SpinSize | number) => {
  if (size === 'small') return SpinSizeNumbers.small
  else if (size === 'default') return SpinSizeNumbers.default
  else if (size === 'large') return SpinSizeNumbers.large
  else return size
}

export const SpinIcon: React.FC<{ size: SpinSize | number }> = props => {
  const { size = 'default' } = props
  return <LoadingOutlined style={{ fontSize: iconSize(size) }} />
}

const Spin: React.FC<SpinProps> = props => {
  const { size = 'default', ...restProps } = props
  const indicator = <SpinIcon size={size} /> || props.indicator
  return <AntSpin {...restProps} indicator={indicator} />
}

export default Spin
