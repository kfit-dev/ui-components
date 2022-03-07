import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from '../../Avatar';
import { default as Badge, BadgeProps } from '../index';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    status: {
      control: {
        type: 'radio',
        options: ['success', 'error', 'default', 'processing', 'warning']
      },
      defaultValue: ['error']
    }
  }
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => (
  <Badge {...args} />
);

export const Notification = Template.bind({});

Notification.args = {
  label: 'Badge',
  count: 5,
  overflowCount: 99,
  children: (
    <>
      <Avatar size={40}></Avatar>
    </>
  )
};

export const Status = Template.bind({});

Status.args = {
  label: 'Badge',
  dot: true,
  children: (
    <>
      <Avatar size={40}></Avatar>
    </>
  )
};
