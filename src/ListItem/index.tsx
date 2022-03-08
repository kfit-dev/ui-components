import * as React from 'react';
import { List as AntList } from 'antd';
import { ListItemProps as AntListItemProps } from 'antd/lib/list';

import 'antd/lib/list/style/index.css';
import './style.css';

export type ListItemProps = AntListItemProps;

const ListItem: React.FC<ListItemProps> = props => {
  return <AntList.Item {...props} />;
};

ListItem.defaultProps = {};

export default ListItem;
