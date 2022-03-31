import * as React from 'react';
import {
  TreeSelect as AntTreeSelect,
  TreeSelectProps as AntTreeSelectProps,
  TreeNodeProps as AntTreeNodeProps
} from 'antd';

import 'antd/lib/tree-select/style/index.css';
import './style.css';

export type TreeSelectProps = AntTreeSelectProps & {
  children: React.ReactNode;
};
export type TreeSelectTreeNodeProps = AntTreeNodeProps;

const TreeSelect: React.FC<TreeSelectProps> = props => {
  return <AntTreeSelect {...props} />;
};

export const TreeSelectTreeNode: React.FC<TreeSelectTreeNodeProps & {
  value: string;
}> = props => {
  return <AntTreeSelect.TreeNode {...props} />;
};

TreeSelect.defaultProps = {};

export default TreeSelect;
