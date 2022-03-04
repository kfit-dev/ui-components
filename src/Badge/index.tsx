import * as React from 'react';
import { Badge as AntBadge, BadgeProps as AntBadgeProps } from 'antd';

import 'antd/lib/badge/style/index.css';
import './style.css';

export type BadgeProps = AntBadgeProps;

const Badge: React.FC<BadgeProps> = props => {
  const { dot } = props;
  return <AntBadge className={dot ? 'status-badge' : ''} {...props} />;
};

Badge.defaultProps = {};

export default Badge;
