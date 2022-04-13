import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  default as TreeSelect,
  recursiveTreeNodes,
  TreeSelectProps,
  TreeSelectTreeNodeProps
} from '../index';

export default {
  title: 'TreeSelect',
  component: TreeSelect
} as ComponentMeta<typeof TreeSelect>;

const Template: ComponentStory<typeof TreeSelect> = (
  args: TreeSelectProps,
  context
) => (
  <TreeSelect
    {...args}
    onChange={args.onChange || context.onChange}
    value={args.value || context.value}
    treeData={args.treeData || context.treeData}
  >
    {args.children || context.children}
  </TreeSelect>
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'TreeSelect',
  style: { width: '100%' },
  dropdownStyle: { maxHeight: 400, overflow: 'auto' },
  placeholder: 'Please select',
  treeDefaultExpandAll: true
};

const treeNodesArray: TreeSelectTreeNodeProps[] = [
  {
    title: 'Node1',
    value: 'A',
    children: [
      {
        title: 'Child Node1',
        value: 'A1'
      },
      {
        title: 'Child Node2',
        value: 'A2',
        children: [
          {
            title: 'Child Node1',
            value: 'A21',
            children: [
              {
                title: 'Child Node1',
                value: 'A211',
                disabled: true
              },
              {
                title: 'Child Node2',
                value: 'A212'
              }
            ]
          },
          {
            title: 'Child Node2',
            value: 'A22'
          }
        ]
      }
    ]
  },
  {
    title: 'Node2',
    value: 'B'
  }
];

Primary.decorators = [
  Story => {
    const [value, setValue] = React.useState(undefined);
    const onChange = () => {
      setValue(value);
    };
    recursiveTreeNodes([...treeNodesArray]);

    return (
      <Story onChange={onChange} value={value} treeData={treeNodesArray} />
    );
  }
];
