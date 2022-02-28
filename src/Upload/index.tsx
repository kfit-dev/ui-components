import * as React from 'react'
import { Upload as AntUpload, UploadProps as AntUploadProps } from 'antd'
import { UploadSimple } from 'phosphor-react'

import 'antd/lib/tooltip/style/index.css'
import 'antd/lib/upload/style/index.css'

import './style.css'

export type UploadProps<T> = React.PropsWithChildren<AntUploadProps<T>>

export type UploadButtonProps = {
  text: string
}

export const UploadButton = ({ text }: UploadButtonProps) => (
  <>
    <UploadSimple size={16} weight={'bold'} />
    <span>{text}</span>
  </>
)

const Upload = <T extends {}>(props: UploadProps<T>) => {
  return <AntUpload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" {...props} />
}

UploadButton.defaultProps = { text: 'Upload' }
Upload.defaultProps = {}

export default Upload
