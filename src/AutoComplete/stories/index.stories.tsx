import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Form, FormItemProps } from 'antd'
import { MagnifyingGlass } from 'phosphor-react'
import { default as AutoComplete, AutoCompleteProps } from '../index'
export default {
  title: 'AutoComplete',
  component: AutoComplete
} as ComponentMeta<typeof AutoComplete>
type Args = {
  formItem: FormItemProps
  autoComplete: AutoCompleteProps
}
const Template: ComponentStory<typeof AutoComplete> = (args: Args) => (
  <Form.Item style={{ width: '320px' }} {...args.formItem}>
    <AutoComplete {...args.autoComplete} />
  </Form.Item>
)
export const Basic = Template.bind({})
Basic.args = {
  autoComplete: {
    label: 'AutoComplete',
    placeholder: 'Search',
    allowClear: true,
    suffixIcon: <MagnifyingGlass size={16} />,
    options: [
      { label: 'Poland', value: 'Poland' },
      { label: 'Malaysia', value: 'Malaysia' },
      { label: 'Singapore', value: 'Singapore' },
      { label: 'Indonesia', value: 'Indonesia' },
      { label: 'India', value: 'India' },
      { label: 'Vietnam', value: 'Vietnam' }
    ]
  },
  formItem: {
    label: 'Text field title'
  }
}
export const BasicRounded = Template.bind({})
BasicRounded.args = {
  autoComplete: {
    label: 'AutoComplete',
    placeholder: 'Search',
    allowClear: true,
    rounded: true,
    options: [
      { label: 'Poland', value: 'Poland' },
      { label: 'Malaysia', value: 'Malaysia' },
      { label: 'Singapore', value: 'Singapore' },
      { label: 'Indonesia', value: 'Indonesia' },
      { label: 'India', value: 'India' },
      { label: 'Vietnam', value: 'Vietnam' }
    ]
  }
}
