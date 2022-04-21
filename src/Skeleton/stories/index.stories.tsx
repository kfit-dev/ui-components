import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadMoreList } from '../../List/stories/index.stories'
import { default as Skeleton, SkeletonProps } from '../index'

export default {
  title: 'Skeleton',
  component: Skeleton,
  argTypes: {
    active: {
      options: ['true', 'false'],
      control: { type: 'radio' }
    },
    avatar: {
      options: ['true', 'false'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args: SkeletonProps) => <Skeleton {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Skeleton',
  active: true
}

export const List = Template.bind({})

List.argTypes = {
  active: {
    table: {
      disable: true
    }
  },
  avatar: {
    table: {
      disable: true
    }
  }
}

List.decorators = [() => <LoadMoreList />]
