import * as React from 'react'
import generatePicker from 'antd/es/date-picker/generatePicker'
import en from 'antd/es/date-picker/locale/en_US'
import { CaretDown } from 'phosphor-react'
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns'

import './style.css'
en.lang.quarterFormat = "'Q'Q"

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig)

export const QuarterPicker = DatePicker.QuarterPicker

DatePicker.defaultProps = {
  suffixIcon: <CaretDown color="#737373" />
}

DatePicker.RangePicker.defaultProps = {
  suffixIcon: <CaretDown color="#737373" />
}

export default DatePicker
