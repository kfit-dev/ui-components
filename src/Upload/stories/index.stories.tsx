import React, { useState } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { UploadChangeParam } from 'antd/lib/upload'

import { UploadFile } from 'antd/lib/upload/interface'
import { default as Upload, Dragger, UploadButtonContent, UploadProps } from '../index'

export default {
  title: 'Upload',
  component: Upload
} as ComponentMeta<typeof Upload>

type PictureItem = UploadFile<{}>

type Args = UploadProps<PictureItem> & {
  label: string
  text?: string
}

const args: Args = {
  label: 'Upload',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
}

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

const Template: Story<Args> = ({ text, ...restArgs }: Args) => {
  const [fileList, setFileList] = useState<UploadFile<PictureItem>[]>(initialList)

  const handleChange = ({ fileList }: UploadChangeParam<PictureItem>) => setFileList(fileList)

  return (
    <>
      <Upload fileList={fileList} onChange={handleChange} {...restArgs}>
        <UploadButtonContent>{text}</UploadButtonContent>
      </Upload>
    </>
  )
}

const DraggerTemplate: Story<Args> = (args: Args) => <Dragger {...args} />

export const Normal = Template.bind({})

Normal.args = {
  ...args,
  text: 'Click to upload'
}

export const PicturesWall = Template.bind({})

PicturesWall.args = {
  ...args,
  listType: 'picture-card'
}

export const DragnDrop = DraggerTemplate.bind({})

DragnDrop.args = {
  ...args,
  name: 'file',
  multiple: true,
  fileList: initialList,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file

    if (status !== 'uploading') {
    }
    if (status === 'done') {
      alert(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      alert(`${info.file.name} file upload failed.`)
    }
  }
}
