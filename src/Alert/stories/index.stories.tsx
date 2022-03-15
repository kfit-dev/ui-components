import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Alert, AlertProps, alertWithButtons } from '../index';
import { BaseButtonProps } from 'antd/lib/button/button';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    type: {
      options: ['success', 'info', 'warning', 'error'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args: AlertProps) => (
  <Alert {...args} />
);

const message = 'Success Text';
const description =
  'Success Text Success Text Success Text Success Text Success Text';
const type = 'success';
const OneActionButton: BaseButtonProps[] = [
  { type: 'text', children: 'Button' }
];
const TwoActionButtons: BaseButtonProps[] = [
  { type: 'primary', children: 'Button' },
  { type: 'text', children: 'Button' }
];

export const Basic = Template.bind({});

Basic.args = {
  label: 'Alert',
  message: message,
  type: type,
  showIcon: false,
  closable: false,
  banner: false
};

export const BasicWithCustomButton = Template.bind({});

BasicWithCustomButton.args = {
  label: 'Alert',
  message: message,
  type: type,
  showIcon: false,
  closable: false,
  banner: false,
  action: alertWithButtons(OneActionButton)
};

export const TitleWithDescription = Template.bind({});

TitleWithDescription.args = {
  label: 'Alert',
  message: message,
  description: description,
  type: type,
  showIcon: false,
  closable: false
};

export const TitleWithDescriptionWithCustomButton = Template.bind({});

TitleWithDescriptionWithCustomButton.args = {
  label: 'Alert',
  message: message,
  description: description,
  type: type,
  showIcon: false,
  closable: false,
  action: alertWithButtons(TwoActionButtons)
};
