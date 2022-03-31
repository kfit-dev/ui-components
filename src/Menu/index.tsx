import * as React from 'react';
import {
  Menu as AntMenu,
  MenuProps as AntMenuProps,
  MenuItemProps as AntMenuItemProps,
  SubMenuProps as AntSubMenuProps
} from 'antd';
import { MenuItemGroupProps as AntMenuItemGroupProps } from 'antd/lib/menu';

import './style.css';
import { CaretDown } from 'phosphor-react';

export type MenuProps = AntMenuProps;
export type MenuItemProps = AntMenuItemProps;
export type MenuSubMenuProps = AntSubMenuProps;
export type MenuItemGroupProps = AntMenuItemGroupProps;

const Menu: React.FC<MenuProps> = props => {
  return <AntMenu {...props} />;
};

export const MenuItem: React.FC<MenuItemProps> = props => {
  return <AntMenu.Item {...props} />;
};

export const MenuSubMenu: React.FC<MenuSubMenuProps> = props => {
  return <AntMenu.SubMenu {...props} />;
};

export const MenuItemGroup: React.FC<MenuItemGroupProps> = props => {
  return <AntMenu.ItemGroup {...props} />;
};

Menu.defaultProps = {
  expandIcon: ({ isOpen }) => (
    <CaretDown size={16} style={{ transform: isOpen && 'rotate(-180deg)' }} />
  )
};

export default Menu;
