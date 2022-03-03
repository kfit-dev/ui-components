import * as React from 'react';
import { Avatar as AntAvatar } from 'antd';

import 'antd/lib/avatar/style/index.css';
import './style.css';
import { GroupProps as AntAvatarGroupProps } from 'antd/lib/avatar';

export type AvatarGroupProps = AntAvatarGroupProps;

const AvatarGroup: React.FC<AvatarGroupProps> = props => {
  return <AntAvatar.Group {...props} />;
};

AvatarGroup.defaultProps = {};

export default AvatarGroup;
