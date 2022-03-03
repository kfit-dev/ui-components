import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Avatar } from '../index';
import { AvatarProps } from 'antd';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: [64, 'large', 'default', 'small']
      },
      defaultValue: 64
    }
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: AvatarProps) => (
  <Avatar {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: 'Avatar',
  children: 'KS'
};

export const WithProfilePicture = Template.bind({});

WithProfilePicture.args = {
  label: 'Avatar',
  src: 'https://joeschmoe.io/api/v1/random',
  style: { backgroundColor: 'white' }
};
