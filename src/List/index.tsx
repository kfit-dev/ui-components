import * as React from 'react';
import { List as AntList, ListProps as AntListProps } from 'antd';

import 'antd/lib/list/style/index.css';
import './style.css';

export type ListProps<T> = AntListProps<T>;

const List = <T extends {}>(props: AntListProps<T>) => {
  return <AntList {...props} />;
};

List.defaultProps = {
  size: 'default',
  bordered: true
};

export default List;
