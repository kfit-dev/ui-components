import React from 'react';
import { useState } from '@storybook/addons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserCircle } from 'phosphor-react';
import { default as Menu, MenuItem, MenuSubMenu, MenuItemGroup,MenuDivider } from '../../Menu';
import { default as Dropdown, DropdownProps } from '../index'

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args: DropdownProps) => <Dropdown {...args} />;

const menu = (
  <Menu style={{ width: 320 }}>
    <MenuItem>Dropdown 1</MenuItem>
    <MenuItem>Dropdown 2</MenuItem>
    <MenuItem>Dropdown 3</MenuItem>
    <MenuItem>Dropdown 4</MenuItem>
    <MenuItem>Dropdown 5</MenuItem>
    <MenuItem>Dropdown 6</MenuItem>
  </Menu>
);

const menuWithDivider = (
  <Menu style={{ width: 320 }}>
    <MenuItem>Dropdown 1</MenuItem>
    <MenuItem>Dropdown 2</MenuItem>
    <MenuItem>Dropdown 3</MenuItem>
    <MenuItem>Dropdown 4</MenuItem>
    <MenuDivider />
    <MenuItem>Dropdown 5</MenuItem>
    <MenuItem>Dropdown 6</MenuItem>
  </Menu>
);

const menuWithSubmenu = (
  <Menu style={{ width: 320 }}>
    <MenuItemGroup title="Group title">
      <MenuItem>Dropdown 1</MenuItem>
      <MenuItem>Dropdown 2</MenuItem>
    </MenuItemGroup>
    <MenuSubMenu title="Sub-menu">
      <MenuItem>Sub-menu 1</MenuItem>
      <MenuItem>Sub-menu 2</MenuItem>
    </MenuSubMenu>
    <MenuDivider/>
    <MenuItemGroup title="Title 2">
    </MenuItemGroup>
    <MenuItemGroup title="Title 3">
    </MenuItemGroup>
  </Menu>
);


export const Basic = Template.bind({});

Basic.args = {
  label: 'Dropdown',
  overlay: menu ,
};

export const MenuWithDivider = Template.bind({});

MenuWithDivider.args = {
  label: 'Dropdown',
  overlay: menuWithDivider ,
};

export const MenuWithSubmenu = Template.bind({});

MenuWithSubmenu.args = {
  label: 'Dropdown',
  overlay: menuWithSubmenu ,
};


export const MenuWithState= () => {

  const [current,setCurrent] = useState("sub1");

  const handleClick = e => {
    setCurrent(e.key);
  };

  const menu = (
    <Menu mode="vertical" onClick={handleClick} selectedKeys={[current]}>
      <MenuItem key="1" icon={<UserCircle size={16}/>}>Dropdown 1</MenuItem>
      <MenuSubMenu key="2" title="Dropdown 2">
        <MenuItem key="5">Option 5</MenuItem>
        <MenuItem key="6">Option 6</MenuItem>
      </MenuSubMenu>
      <MenuItem key="7">Dropdown 3</MenuItem>
      <MenuItem key="8" disabled>Dropdown 4</MenuItem>
    </Menu>
  );

  return(
    <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={e => e.preventDefault()}>
      Click me
      </a>
    </Dropdown>
  );
}
