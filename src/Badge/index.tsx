import * as React from 'react';
import { Badge as AntBadge, BadgeProps as AntBadgeProps } from 'antd';
import classNames from 'classnames';

import './style.css';

export type BadgeProps = AntBadgeProps;

const Badge: React.FC<BadgeProps> = ({ className, ...props }) => {
  const { dot } = props;
  return (
    <AntBadge
      className={classNames(dot ? 'status-badge' : '', className)}
      {...props}
    />
  );
};

Badge.defaultProps = {};

export default Badge;
