import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Form, FormItemProps } from 'antd'
import { differenceInDays } from 'date-fns'
import { CaretDown } from 'phosphor-react'
import { default as DatePicker } from '../index'

export default {
  title: 'DatePicker',
  component: DatePicker
} as ComponentMeta<typeof DatePicker>

type Args = {
  formItem: FormItemProps
  datePicker: typeof DatePicker
}

const Template: Story<Args> = (args: Args) => {
  return (
    <Form.Item style={{ width: '320px' }} {...args.formItem}>
      <DatePicker
        style={{ width: '320px' }}
        {...args.datePicker}
        disabledDate={current => {
          return current && differenceInDays(current, new Date()) < 0
        }}
      />
    </Form.Item>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  datePicker: {
    label: 'DatePicker',
    showToday: false,
    format: 'DD/MM/YYYY'
  },
  formItem: {
    label: 'Date'
  }
}

export const BasicQuarter = Template.bind({})

BasicQuarter.args = {
  datePicker: {
    label: 'DatePicker',
    format: "YYYY-'Q'Q",
    picker: 'quarter'
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
