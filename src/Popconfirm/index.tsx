import * as React from 'react'
import { Popconfirm as AntPopconfirm, PopconfirmProps as AntPopconfirmProps } from 'antd'

import './style.css'

export type PopconfirmProps = AntPopconfirmProps

const Popconfirm: React.FC<PopconfirmProps> = props => {
  return <AntPopconfirm {...props} />
}

Popconfirm.defaultProps = {
  cancelButtonProps: { className: 'ant-btn-text' }
}

export default Popconfirm
