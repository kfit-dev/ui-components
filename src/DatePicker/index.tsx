import * as React from 'react'
import {
  default as AntDatePicker,
  DatePickerProps as AntDatePickerProps,
  RangePickerProps as AntRangePickerProps
} from 'antd/lib/date-picker'

import './style.css'

export type DatePickerProps = AntDatePickerProps
export type RangePickerProps = AntRangePickerProps

export const { RangePicker } = AntDatePicker

const DatePicker: React.FC<AntDatePickerProps> = props => {
  return <AntDatePicker {...props} />
}

export default DatePicker
