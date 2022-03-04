import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { default as Progress, ProgressProps } from '../index'

export default {
  title: 'Progress',
  component: Progress,
  argTypes: {
    type: {
      control: { type: 'radio', options: ['line', 'circle'] },
      defaultValue: 'line'
    },
    size: {
      control: { type: 'radio', disable: true, options: ['default', 'small'] },
      defaultValue: 'default'
    },
    status: {
      control: { type: 'radio', options: ['default', 'success', 'exception'] },
      defaultValue: 'default'
    }
  }
} as ComponentMeta<typeof Progress>

const args = {
  label: 'Progress',
  percent: 10
}

const circleArgs = {
  ...args,
  type: 'circle',
  percent: 65,
  width: 80
  // format: (percent, successPercent) => {
  //   console.log(successPercent)
  //   return percent === successPercent ? <Check size={24} /> : `${percent}%`
  // }
}

const circleSmallArgs = {
  ...circleArgs,
  size: 'small',
  width: 48
}

const Template: ComponentStory<typeof Progress> = (args: ProgressProps) => <Progress {...args} />

export const Normal = Template.bind({})

Normal.args = {
  ...args
  // size: 'small'
}

export const Finished = Template.bind({})

Finished.args = {
  ...args,
  percent: 100
}

export const Exception = Template.bind({})

Exception.args = {
  ...args,
  percent: 50,
  status: 'exception'
}

export const NormalSmall = Template.bind({})

NormalSmall.args = {
  ...args,
  size: 'small'
}

export const FinishedSmall = Template.bind({})

FinishedSmall.args = {
  ...args,
  percent: 100,
  size: 'small'
}

export const ExceptionSmall = Template.bind({})

ExceptionSmall.args = {
  ...args,
  percent: 50,
  status: 'exception',
  size: 'small'
}

export const NormalCircle = Template.bind({})

NormalCircle.args = {
  ...circleArgs
  // strokeWidth: 30
}

export const FinishedCircle = Template.bind({})

FinishedCircle.args = {
  ...circleArgs,
  percent: 100
}

export const ExceptionCircle = Template.bind({})

ExceptionCircle.args = {
  ...circleArgs,
  percent: 50,
  status: 'exception'
}

export const NormalCircleSmall = Template.bind({})

NormalCircleSmall.args = {
  ...circleSmallArgs
}

export const FinishedCircleSmall = Template.bind({})

FinishedCircleSmall.args = {
  ...circleSmallArgs,
  percent: 100
}

export const ExceptionCircleSmall = Template.bind({})

ExceptionCircleSmall.args = {
  ...circleSmallArgs,
  percent: 50,
  status: 'exception'
}
