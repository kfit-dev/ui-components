import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from 'antd/lib/button'
import Space from 'antd/lib/space'
import { default as Modal, ModalProps } from '../index'

export default {
  title: 'Modal',
  component: Modal
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => <Modal {...args} />

export const Primary = Template.bind({})

Primary.args = {
  title: 'Modal'
}

export const test = () => {
  return (
    <>
      <Button type="primary">Modal</Button>
      <Modal title="Modal" visible={true} okText="Confirm" cancelText="Button">
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </Modal>
    </>
  )
}

export const Basic = () => {
  // Modal.confirm({
  //   title: 'Confirm',
  //   content: 'Bla bla ...',
  //   okText: '确认',
  //   cancelText: '取消',
  // });

  // eslint-disable-next-line no-unused-expressions
  return (
    <Space>
      <Button onClick={Basic}>Confirm</Button>
    </Space>
  )
}
