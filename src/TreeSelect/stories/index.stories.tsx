import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  default as TreeSelect,
  TreeSelectProps,
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
  showSearch: true,
  style: { width: '100%' },
  dropdownStyle: { maxHeight: 400, overflow: 'auto' },
  placeholder: 'Please select',
  allowClear: true,
  treeDefaultExpandAll: true,
  treeLine: true
};

type TreeNodesType = {
  title: string;
  value: string;
  children?: TreeNodesType[];
  disabled?: boolean;
};

const treeNodesArray: TreeNodesType[] = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1'
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
        children: [
          {
            title: 'Child Node1',
            value: '0-0-0-1',
            children: [
              {
                title: 'Child Node1',
                value: '0-0-0-0-1'
              },
              {
                title: 'Child Node2',
                value: '0-0-0-0-2'
              }
            ]
          },
          {
            title: 'Child Node2',
            value: '0-0-0-2'
          }
        ]
      }
    ]
  },
  {
    title: 'Node2',
    value: '0-1'
  }
];

const recursiveTreeNodes = (tree: TreeNodesType[]) => {
  // tree has to be broken down first
  // base case to check if array has any objects to be traverse down
  if (tree.length === 0) {
    return tree;
  } else {
    return tree.map(item => {
      // base case (condition that breaks the call)
      if (!item.children) {
        return item;
      }
      // condition that keeps on calling itself
      else {
        item.disabled = true;
        return { ...item, children: recursiveTreeNodes(item.children) };
      }
    });
  }
};

Primary.decorators = [
  Story => {
    recursiveTreeNodes([...treeNodesArray])
    const [value, setValue] = React.useState(undefined);
    const onChange = () => {
      setValue(value);
    };
    return (
      <Story onChange={onChange} value={value} treeData={treeNodesArray} />
    );
  }
];
