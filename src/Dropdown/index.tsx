import * as React from "react";
import { Dropdown as AntDropdown, DropDownProps as AntDropdownProps } from "antd";

import "./style.css"

export type DropdownProps = AntDropdownProps;

const Dropdown: React.FC<DropdownProps> = (props) => {
  return(
    <AntDropdown overlay={props.overlay} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Click me
      </a>
    </AntDropdown>
  );
};

export default Dropdown;
