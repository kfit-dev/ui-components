import * as React from 'react'
import { Upload as AntUpload, UploadProps as AntUploadProps } from 'antd'
import { DraggerProps as AntDraggerProps } from 'antd/lib/upload'
import { ShowUploadListInterface } from 'antd/lib/upload/interface'

import { UploadSimple } from 'phosphor-react'
import { Eye16 } from '../assets/icons/Eye'
import { Trash16 } from '../assets/icons/Trash'

import './style.css'

export type UploadProps<T> = React.PropsWithChildren<AntUploadProps<T>>

export type DraggerProps = AntDraggerProps & {
  Icon?: React.ReactNode
  Text?: React.ReactNode
  Hint?: React.ReactNode
}

export type UploadButtonContentProps = React.PropsWithChildren<{
  Icon?: React.ReactNode
}>

export const defaultIconOptions: ShowUploadListInterface = {
  previewIcon: <Eye16 />,
  removeIcon: <Trash16 />
}

export const UploadButtonContent = ({ Icon, children }: UploadButtonContentProps) => (
  <>
    {Icon}
    <span>{children}</span>
  </>
)

export const Upload = <T,>(props: UploadProps<T>) => (
  <AntUpload showUploadList action="https://www.mocky.io/v2/5cc8019d300000980a055e76" {...props} />
)

export const Dragger: React.FC<DraggerProps> = ({ Icon, Text, Hint, ...restProps }: DraggerProps) => (
  <AntUpload.Dragger {...restProps}>
    <p className="icon">{Icon}</p>
    <p className="ant-upload-text">{Text}</p>
    <p className="ant-upload-hint">{Hint}</p>
  </AntUpload.Dragger>
)

Upload.defaultProps = {
  showUploadList: defaultIconOptions
}

Dragger.defaultProps = {
  Icon: <UploadSimple size={24} weight={'light'} />,
  Text: 'Click or drag file to this area to upload',
  Hint: 'Each file size is limited to 50MB'
}

UploadButtonContent.defaultProps = {
  Icon: <UploadSimple size={16} weight={'light'} />,
  children: 'Upload'
}

export default Upload
