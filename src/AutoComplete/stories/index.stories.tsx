import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Form, FormItemProps, Input, InputProps } from 'antd'
import Search from 'antd/lib/input/Search'
import { default as AutoComplete, AutoCompleteProps } from '../index'
export default {
  title: 'AutoComplete',
  component: AutoComplete
} as ComponentMeta<typeof AutoComplete>

type Args = {
  formItem: FormItemProps
  autoComplete: AutoCompleteProps
  input: InputProps
}
const Template: Story<Args> = (args: Args) => (
  <Form.Item style={{ width: '320px' }} {...args.formItem}>
    <AutoComplete
      {...args.autoComplete}
      filterOption={(inputValue, option) =>
        option!.value
          .toString()
          .toUpperCase()
          .indexOf(inputValue.toUpperCase()) !== -1
      }
    >
      <Input {...args.input} />
    </AutoComplete>
  </Form.Item>
)
export const Basic = Template.bind({})
Basic.args = {
  autoComplete: {
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
  },
  input: {
    label: 'Input',
    placeholder: 'Placeholder',
    allowClear: true
  }
}

const inputArgs = {
  autoComplete: {
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
  },
  input: {
    label: 'Input',
    placeholder: 'Placeholder',
    allowClear: true
  }
}

export const BasicSearch = () => {
  return (
    <Form.Item style={{ width: '320px' }} {...inputArgs.formItem}>
      <AutoComplete
        {...inputArgs.autoComplete}
        filterOption={(inputValue, option) =>
          option!.value
            .toString()
            .toUpperCase()
            .indexOf(inputValue.toUpperCase()) !== -1
        }
      >
        <Search {...inputArgs.input} />
      </AutoComplete>
    </Form.Item>
  )
}
