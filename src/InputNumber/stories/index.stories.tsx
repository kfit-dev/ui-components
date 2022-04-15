import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as InputNumber, InputNumberProps } from '../index'

export default {
  title: 'InputNumber',
  component: InputNumber,
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args: InputNumberProps) => <InputNumber style={{ width:"320px" }} {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  label: 'InputNumber',
  controls:false,
  bordered:false,
};

export const BasicDisabled = Template.bind({});

BasicDisabled.args = {
  label: 'InputNumber',
  controls:false,
  bordered:false,
  disabled:true,
  value:123,
};

export const BasicPrefixCurrencyRM = Template.bind({});

BasicPrefixCurrencyRM.args = {
  label: 'InputNumber',
  controls:false,
  bordered:false,
  prefix:"RM"
};

export const BasicPrefixCurrencyRMDisbaled = Template.bind({});

BasicPrefixCurrencyRMDisbaled.args = {
  label: 'InputNumber',
  controls:false,
  bordered:false,
  prefix:"RM",
  value:123,
  disabled:true,
};


export const BasicPrefixCurrencySG = Template.bind({});

BasicPrefixCurrencySG.args = {
  label: 'InputNumber',
  controls:false,
  bordered:false,
  prefix:"$S"
};

export const BasicPrefixCurrencyRP = Template.bind({});

BasicPrefixCurrencyRP.args = {
  label: 'InputNumber',
  controls:false,
  bordered:false,
  prefix:"Rp"
};

export const BasicPercentage = Template.bind({});

BasicPercentage.args = {
  label: 'InputNumber',
  controls:false,
  min:0,
  max:100,
  bordered:false,
  formatter:(value => `${value}%`),
  parser:(value => value.replace('%', ''))
};

export const BasicResponsive = () => {
  return(
    <div style={{ width:"320px", display:"flex" }}>
      <InputNumber
        style={{ flexBasis:"fit-content",marginRight:"16px" }}
        controls={false}
        bordered={false}
      />
      <InputNumber
        style={{ flexBasis:"fit-content" }}
        controls={false}
        bordered={false}
      />
    </div>
  );
}


