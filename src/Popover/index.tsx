import * as React from "react";
import { Popover as AntPopover, PopoverProps as AntPopoverProps } from "antd";

import 'antd/lib/popover/style/index.css'
import "./style.css"

export type PopoverProps = AntPopoverProps;

const Popover: React.FC<PopoverProps> = (props) => {
  return <AntPopover {...props} />;
};

Popover.defaultProps = {};

export default Popover;
