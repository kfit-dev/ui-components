import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Checkbox, CheckboxProps } from '../index'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => <Checkbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Checkbox',
  children:"Checkbox",
};

export const PrimaryChecked = Template.bind({});

PrimaryChecked.args = {
  label: 'Checkbox',
  children:"Checkbox",
  defaultChecked:true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'Checkbox',
  children:"Checkbox",
  disabled:true
};

export const DisabledChecked = Template.bind({});

DisabledChecked.args = {
  label: 'Checkbox',
  children:"Checkbox",
  defaultChecked:true,
  disabled:true
};

export const CheckAll = Template.bind({});

CheckAll.args = {
  label: 'Checkbox',
  children:"Check All",
  indeterminate:"indeterminate"
};
