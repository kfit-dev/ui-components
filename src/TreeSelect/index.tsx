import * as React from 'react';
import {
  TreeSelect as AntTreeSelect,
  TreeSelectProps as AntTreeSelectProps,
  TreeNodeProps as AntTreeNodeProps
} from 'antd';

import './style.css';
import { CaretDown } from 'phosphor-react';

export type TreeSelectProps = AntTreeSelectProps & {
  children?: React.ReactNode;
};
export type TreeSelectTreeNodeProps = AntTreeNodeProps;

export const recursiveTreeNodes: Function = (tree: TreeSelectTreeNodeProps[]) => {
  // base case to check if array has any objects to be traverse down
  if (tree.length === 0) {
    return tree;
  } else {
    return tree.map((item) => {
      // base case (condition that breaks the call)
      if (!item.children) {
        return item;
      }
      // else continue call itself
      else {
        item.selectable = false;
        return { ...item, children: recursiveTreeNodes(item.children as TreeSelectTreeNodeProps[]) };
      }
    });
  }
};

const TreeSelect: React.FC<TreeSelectProps> = props => {
  return <AntTreeSelect {...props} />;
};

export const TreeSelectTreeNode: React.FC<TreeSelectTreeNodeProps & {
  value: string;
}> = props => {
  return <AntTreeSelect.TreeNode {...props} />;
};

TreeSelect.defaultProps = {
  switcherIcon: <CaretDown className="rotate-caret" size={16} weight="light" />,
  suffixIcon: <CaretDown className="rotate-caret" size={16} weight="light" />
};

export default TreeSelect;
