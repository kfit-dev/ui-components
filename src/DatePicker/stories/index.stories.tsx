import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Form, FormItemProps } from 'antd'
import { CaretDown } from 'phosphor-react'
import { default as DatePicker, DatePickerProps } from '../index'

export default {
  title: 'DatePicker',
  component: DatePicker
} as ComponentMeta<typeof DatePicker>

type Args = {
  formItem: FormItemProps
  datePicker: DatePickerProps
}

const Template: ComponentStory<typeof DatePicker> = (args: Args) => (
  <Form.Item style={{ width: '320px' }} {...args.formItem}>
    <DatePicker style={{ width: '320px' }} {...args.datePicker} />
  </Form.Item>
)

export const Basic = Template.bind({})

Basic.args = {
  datePicker: {
    label: 'DatePicker',
    showToday: false,
    // bordered:false,
    format: 'DD/MM/YYYY',
    suffixIcon: <CaretDown color="#737373" />
  },
  formItem: {
    label: 'Date'
  }
}

export const BasicQuater = Template.bind({})

BasicQuater.args = {
  datePicker: {
    label: 'DatePicker',
    showToday: false,
    format: 'DD/MM/YYYY',
    picker: 'quarter',
    suffixIcon: <CaretDown color="#737373" />
  },
  formItem: {
    label: 'Date'
  }
}

export const ErrorBasic = Template.bind({})

ErrorBasic.args = {
  datePicker: {
    label: 'RangePicker',
    showToday: false,
    format: 'DD/MM/YYYY',
    suffixIcon: <CaretDown />
  },
  formItem: {
    label: 'Date',
    validateStatus: 'error',
    help: 'Error text here. No more than one line'
  }
}
