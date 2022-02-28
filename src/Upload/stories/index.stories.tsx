import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { UploadChangeParam } from 'antd/lib/upload'

import { UploadFile } from 'antd/lib/upload/interface'
import { default as Upload, UploadButton } from '../index'

export default {
  title: 'Upload',
  component: Upload
} as ComponentMeta<typeof Upload>

type PictureItem = UploadFile<{}>

const initialList: UploadFile<PictureItem>[] = [
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-2',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-3',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-4',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-xxx',
    percent: 50,
    name: 'image.png',
    status: 'uploading',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-5',
    name: 'image.png',
    status: 'error'
  }
]

export const PicturesWall = () => {
  const [fileList, setFileList] = useState<UploadFile<PictureItem>[]>(initialList)

  const handleChange = ({ fileList }: UploadChangeParam<PictureItem>) => setFileList(fileList)

  return (
    <Upload listType="picture-card" fileList={fileList} onChange={handleChange}>
      {fileList.length >= 8 ? null : <UploadButton />}
    </Upload>
  )
}

// const args = {
//   label: 'Upload'
// }
