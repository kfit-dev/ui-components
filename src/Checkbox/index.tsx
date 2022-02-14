import * as React from "react";
import { Checkbox as AntCheckbox, CheckboxProps as AntCheckboxProps } from "antd";

import 'antd/lib/checkbox/style/index.css'
import "./style.css"

export type CheckboxProps = AntCheckboxProps;

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <AntCheckbox {...props} />;
};

export default Checkbox;
