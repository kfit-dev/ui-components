import * as React from 'react'
import { Progress as AntProgress, ProgressProps as AntProgressProps } from 'antd'

import 'antd/lib/progress/style/index.css'
import './style.css'

export type ProgressProps = AntProgressProps

const Progress: React.FC<ProgressProps> = ({ size, type, strokeWidth, ...restProps }) => {
  // const { sm, lg } = type === 'line' ? { sm: 4, lg: 6 } : { sm: 10, lg: 9 }

  const defaultStrokeWidth = strokeWidth || (size && size === 'small' ? 4 : 6)

  // const className = size && size === 'small' ? 'mini' : ''

  return (
    <>
      {/* <XCircle size={16} color={'#DC2626'} /> */}
      <AntProgress strokeWidth={defaultStrokeWidth} size={size} type={type} {...restProps} />
    </>
  )
}

Progress.defaultProps = {}

export default Progress
