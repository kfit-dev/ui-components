import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Divider, DividerProps } from '../index'

export default {
  title: 'Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args: DividerProps) => <Divider {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	label: 'Divider'
};