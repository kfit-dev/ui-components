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
  placeholder: 'Please select'
};

const treeNodesArray: TreeSelectTreeNodeProps[] = [
  {
    title: 'Main 1',
    value: 'A-0',
    children: [
      {
        title: 'Sub 1',
        value: 'A-0-0'
      },
      {
        title: 'Sub 2',
        value: 'A-0-1',
        disabled: true
      }
    ]
  },
  {
    title: 'Main 2',
    value: 'B-0',
    children: [
      {
        title: 'Sub 1',
        value: 'B-0-0',
      },
      {
        title: 'Sub 2',
        value: 'B-0-1',
        children: [
          {
            title: 'Content 1',
            value: 'B-0-1-0'
          },
          {
            title: 'Content 2',
            value: 'B-0-1-1'
          }
        ]
      }
    ]
  },
  {
    title: 'Dropdown 3',
    value: 'C-0',
    children: [
      {
        title: 'Sub 1',
        value: 'C-0-0'
      },
      {
        title: 'Sub 2',
        value: 'C-0-1'
      }
    ]
  },
  {
    title: 'Dropdown 4',
    value: 'D-0'
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
