import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarProps } from 'antd';
import { default as Avatar } from '../index';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: [64, 'large', 'default', 'small'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: AvatarProps) => (
  <Avatar {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: 'Avatar',
  children: 'KS',
  size: 64
};

export const WithProfilePicture = Template.bind({});

WithProfilePicture.args = {
  label: 'Avatar',
  src: 'https://joeschmoe.io/api/v1/random',
  size: 64
};
