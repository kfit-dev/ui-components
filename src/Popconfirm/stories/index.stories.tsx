import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from 'antd'
import { WarningCircle } from 'phosphor-react'
import { default as Popconfirm, PopconfirmProps } from '../index'

export default {
  title: 'Popconfirm',
  component: Popconfirm
} as ComponentMeta<typeof Popconfirm>

const Template: ComponentStory<typeof Popconfirm> = (args: PopconfirmProps) => {
  return (
    <Popconfirm {...args}>
      <Button type="primary" style={{ margin: '150px' }}>
        Click Me
      </Button>
    </Popconfirm>
  )
}

export const Top = Template.bind({})

Top.args = {
  label: 'Popconfirm',
  title: 'Are you sure you wish to delete this task',
  placement: 'top',
  icon: <WarningCircle size={16} />,
  onConfirm: { confirm },
  okText: 'Button',
  cancelText: 'Button'
}

export const Bottom = Template.bind({})

Bottom.args = {
  label: 'Popconfirm',
  title: 'Are you sure you wish to delete this task',
  placement: 'bottom',
  icon: <WarningCircle size={16} />,
  onConfirm: { confirm },
  okText: 'Button',
  cancelText: 'Button'
}
