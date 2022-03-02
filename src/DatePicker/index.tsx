import * as React from 'react'
import {
  default as AntDatePicker,
  DatePickerProps as AntDatePickerProps,
  RangePickerProps as AntRangePickerProps
} from 'antd/lib/date-picker'

import '../assets/style/form-item.css'
import 'antd/lib/style/default.css'
import 'antd/lib/date-picker/style/index.css'
import 'antd/lib/empty/style/index.css'
import './style.css'

export type DatePickerProps = AntDatePickerProps
export type RangePickerProps = AntRangePickerProps

export const { RangePicker } = AntDatePicker

const DatePicker: React.FC<AntDatePickerProps> = props => {
  return <AntDatePicker {...props} />
}

export default DatePicker
