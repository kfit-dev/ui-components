import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Form, FormItemProps } from 'antd'
import { Search, SearchProps } from '../index'

export default {
  title: 'Search',
  component: Search
} as ComponentMeta<typeof Search>

type Args = {
  formItem: FormItemProps
  input: SearchProps
}

const Template: ComponentStory<typeof Search> = (args: Args) => (
  <Form.Item style={{ width: '320px' }} {...args.formItem}>
    <Search {...args.input} />
  </Form.Item>
)

export const Basic = Template.bind({})

Basic.args = {
  input: {
    label: 'Input',
    placeholder: 'Placeholder',
    allowClear: true,
  },
  formItem: {
    label: 'Text field title'
  }
}

export const SearchError = Template.bind({})

SearchError.args = {
  input: {
    label: 'Input',
    placeholder: 'Placeholder',
    allowClear: true,
  },
  formItem: {
    label: 'Text field title',
    validateStatus: 'error',
    help: 'Error text here. No more than one line'
  }
}

export const SearchLoading = Template.bind({})

SearchLoading.args = {
  input: {
    label: 'Input',
    placeholder: 'Placeholder',
    allowClear: true,
    loading: true,
  },
  formItem: {
    label: 'Text field title'
  }
}
