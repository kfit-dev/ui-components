import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Form, FormItemProps } from 'antd'
import { differenceInDays } from 'date-fns'
import { DatePicker } from '../index'

import '../../assets/style/form-item.css'

export default {
  title: 'DatePicker/QuarterPicker',
  component: DatePicker
} as ComponentMeta<typeof DatePicker>

type Args = {
  formItem: FormItemProps
  datePicker: typeof DatePicker
}

const Template: Story<Args> = (args: Args) => {
  return (
    <Form layout='vertical'>
      <Form.Item style={{ width: '320px' }} {...args.formItem}>
        <DatePicker
          style={{ width: '320px' }}
          disabledDate={current => {
            return current && differenceInDays(current, new Date()) < 0
          }}
          {...args.datePicker}
        />
      </Form.Item>
    </Form>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  datePicker: {
    label: 'DatePicker',
    picker: 'quarter',
    format: "YYYY-'Q'Q",
  },
  formItem: {
    label: 'Date'
  }
}
