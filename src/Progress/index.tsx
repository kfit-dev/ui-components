import * as React from 'react'
import { Progress as AntProgress, ProgressProps as AntProgressProps } from 'antd'

import './style.css'

export type ProgressProps = AntProgressProps

// AntProgress does NOT support passing icons
const Progress: React.FC<ProgressProps> = ({ size, type, strokeWidth, ...restProps }) => {
  const defaultStrokeWidth = strokeWidth || (size && size === 'small' ? 4 : 6)

  return <AntProgress strokeWidth={defaultStrokeWidth} size={size} type={type} {...restProps} />
}

Progress.defaultProps = {}

export default Progress
