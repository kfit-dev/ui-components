import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Form, FormItemProps } from 'antd'
import moment from 'moment'
import { CaretDown, ArrowRight } from 'phosphor-react'
import { RangePickerProps, RangePicker } from '../index'

export default {
  title: 'RangePicker',
  component: RangePicker
} as ComponentMeta<typeof RangePicker>

type Args = {
  formItem: FormItemProps
  datePicker: RangePickerProps
}

const Template: ComponentStory<typeof RangePicker> = (args: Args) => {
  return(
    <Form.Item style={{ width: '320px' }} {...args.formItem}>
      <RangePicker 
        style={{ width: '320px' }} 
        disabledDate={(current) => {
          const customDate = moment().format("YYYY-MM-DD");
          return current && current < moment(customDate, "YYYY-MM-DD");
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
