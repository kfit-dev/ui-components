import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Form, FormItemProps } from 'antd'
import { differenceInDays } from 'date-fns'
import { CaretDown, ArrowRight } from 'phosphor-react'
import { default as DatePicker } from '../index'

export default {
  title: 'RangePicker',
  component: DatePicker.RangePicker
} as ComponentMeta<typeof DatePicker.RangePicker>

type Args = {
  formItem: FormItemProps
  datePicker: typeof DatePicker.RangePicker
}

const Template: Story<Args> = (args: Args) => {
  return (
    <Form.Item style={{ width: '320px' }} {...args.formItem}>
      <DatePicker.RangePicker
        style={{ width: '320px' }}
        {...args.datePicker}
        disabledDate={current => {
          return current && differenceInDays(current, new Date()) < 0
        }}
        {...args.datePicker}
      />
    </Form.Item>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  datePicker: {
    label: 'RangePicker',
    showToday: false,
    format: 'DD/MM/YYYY',
    dateRange: true,
    suffixIcon: <CaretDown />,
    separator: <ArrowRight />
  },
  formItem: {
    label: 'Date'
  }
}

export const Error = Template.bind({})

Error.args = {
  datePicker: {
    label: 'RangePicker',
    showToday: false,
    format: 'DD/MM/YYYY',
    dateRange: true,
    suffixIcon: <CaretDown />,
    separator: <ArrowRight />
  },
  formItem: {
    label: 'Date',
    validateStatus: 'error',
    help: 'Error text here. No more than one line'
  }
}
