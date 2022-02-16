/* eslint-disable no-console */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// import { AntSelect as Select } from "antd";
import { Select as AntSelect, SelectProps } from 'antd'
// import { default as Select, SelectProps } from '../index'
import 'antd/lib/button/style/index.css'

export default {
  title: 'Select',
  component: AntSelect
} as ComponentMeta<typeof AntSelect>

const Template: ComponentStory<typeof AntSelect> = (args: SelectProps) => (
  <AntSelect style={{ width: 120 }} {...args}>
    <AntSelect.Option value="jack">Jack</AntSelect.Option>
    <AntSelect.Option value="lucy">Lucy</AntSelect.Option>
    <AntSelect.Option value="disabled" disabled>
      Disabled
    </AntSelect.Option>
    <AntSelect.Option value="Yiminghe">yiminghe</AntSelect.Option>
  </AntSelect>
)

// const { Option } = Select;

// const children = [];
// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }

// const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

export const Primary = Template.bind({})

Primary.args = {
  // children:
  // <>
  //   <AntSelect.Option value="MY">Malaysia</AntSelectOption>
  //   <AntSelect.Option value="SG">Singapore</AntSelect.Option>
  //   <AntSelect.Option value="ID">Indonesia</AntSelect.Option>
  // </>
}
