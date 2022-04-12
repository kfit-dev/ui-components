import * as React from 'react'
import { default as generatePicker, PickerTimeProps, RangePickerTimeProps } from 'antd/es/date-picker/generatePicker'
import en from 'antd/es/date-picker/locale/en_US'
import { ArrowRight, CaretDown } from 'phosphor-react'
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns'

import './style.css'
en.lang.quarterFormat = "'Q'Q"

const CaretDownIcon = <CaretDown />
const DatePicker = generatePicker<Date>(dateFnsGenerateConfig)

export type TimePickerProps = PickerTimeProps<Date>  & {
  RangePicker: typeof RangePicker;
};
export type TimeRangePickerProps = RangePickerTimeProps<Date> & {
  popupClassName?: string;
}

export const WeekPicker = DatePicker.WeekPicker
export const MonthPicker = DatePicker.MonthPicker
export const YearPicker = DatePicker.YearPicker
export const RangePicker = DatePicker.RangePicker
export const TimePicker = DatePicker.TimePicker

export const TimeRangePicker = React.forwardRef<any, TimeRangePickerProps>((props, ref) => (<RangePicker {...props} picker="time" mode={undefined} ref={ref}/>));

DatePicker.defaultProps = {
  suffixIcon: CaretDownIcon
}

TimePicker.defaultProps = {
  use12Hours:true,
  suffixIcon: CaretDownIcon,
  minuteStep:5,
  format:"h:mma",
};

DatePicker.RangePicker.defaultProps = {
  use12Hours:true,
  suffixIcon: CaretDownIcon,
  minuteStep:5,
  format:"h:mma",
  separator: <ArrowRight />
}

export default DatePicker
