import * as React from 'react'
import { default as AntModal, ModalFuncProps as AntModalFuncProps, ModalProps as AntModalProps } from 'antd/lib/modal'
import classNames from 'classnames';

import { Info, WarningCircle, XCircle } from 'phosphor-react'

import Button from '../Button';

import './style.css'

export type ModalProps = AntModalProps & {
  icon ?: React.ReactNode,
  confirmMode?: boolean,
  modalFunc: (args: ModalFuncProps)=>void
}

export type ModalFuncProps = AntModalFuncProps &{
  hasIcon?:boolean
  confirmMode?: boolean,
}

const getClassName = ({ className, hasIcon }: ModalFuncProps) =>{
  return classNames(className, hasIcon ? 'with-icon' : '')
};

const originalFunctions = { ...AntModal } ;

export const ModalFunctions = {
  confirm: ({ icon, className,hasIcon, ...restProps }: ModalFuncProps)=> {   
    return originalFunctions.confirm({ ...restProps, className: getClassName(restProps), icon: hasIcon ? icon : null,cancelButtonProps:{ className:"ant-btn-text" } })
  },
  error: ({ icon = <XCircle size={24} color={'#DC2626'}/>, confirmMode,className, ...restProps }: ModalFuncProps)=> {   
    return confirmMode === undefined || confirmMode ? AntModal.confirm({ ...restProps, className: getClassName(restProps),icon:icon,cancelButtonProps:{ className:"ant-btn-text" } }) : originalFunctions.error({ ...restProps, className: getClassName(restProps), icon:icon })
  },
  warning: ({ icon = <WarningCircle size={24} color={'#FBBF24'}/>, confirmMode,className, ...restProps }: ModalFuncProps)=> {   
    return confirmMode === undefined || confirmMode ? AntModal.confirm({ ...restProps, className: getClassName(restProps),icon:icon,cancelButtonProps:{ className:"ant-btn-text" } }) : originalFunctions.warning({ ...restProps, className: getClassName(restProps), icon:icon })
  },
  info: ({ icon = <Info size={24} color={"#334155"}/>, confirmMode,className, ...restProps }: ModalFuncProps)=> {   
    return confirmMode === undefined || confirmMode ? AntModal.confirm({ ...restProps, className: getClassName(restProps),icon:icon,cancelButtonProps:{ className:"ant-btn-text" } }) : originalFunctions.info({ ...restProps, className: getClassName(restProps), icon:icon })
  },
}

const Modal: React.FC<ModalProps> = props => {
  return <Button onClick={()=>props.modalFunc({ ...props })}>Click</Button>
}

export default Modal
