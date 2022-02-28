import * as React from 'react'
import { Tooltip as AntTooltip, TooltipProps as AntTooltipProps } from 'antd'

import 'antd/lib/style/default.css'
import 'antd/lib/tooltip/style/index.css'
import 'antd/lib/empty/style/index.css'
import './style.css'

export type TooltipProps = AntTooltipProps

const Tooltip: React.FC<TooltipProps> = props => {
  return <AntTooltip {...props} />
}

export default Tooltip
