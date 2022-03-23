import * as React from 'react'
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd'

import './style.css'

export type ModalProps = AntModalProps

const Modal: React.FC<ModalProps> = props => {
  return <AntModal {...props} />
}

Modal.defaultProps = {
  cancelButtonProps: { className: 'ant-btn-text' }
}

export default Modal
