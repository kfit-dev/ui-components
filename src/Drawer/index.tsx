import * as React from 'react';
import { Drawer as AntDrawer, DrawerProps as AntDrawerProps } from 'antd';

import './style.css';

export type DrawerProps = AntDrawerProps & { children: React.ReactNode };

const Drawer: React.FC<DrawerProps> = props => {
  return <AntDrawer {...props} />;
};

Drawer.defaultProps = {
  closable: false
};

export default Drawer;
