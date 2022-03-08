import * as React from 'react';
import { List as AntList } from 'antd';

import 'antd/lib/list/style/index.css';
import './style.css';
import { ListItemMetaProps as AntListItemMetaProps } from 'antd/lib/list';

export type ListItemMetaProps = AntListItemMetaProps;

const ListItemMeta: React.FC<ListItemMetaProps> = props => {
  return <AntList.Item.Meta {...props} />;
};

ListItemMeta.defaultProps = {};

export default ListItemMeta;
