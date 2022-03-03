import * as React from 'react';
import { Avatar as AntAvatar, AvatarProps as AntAvatarProps } from 'antd';

import 'antd/lib/avatar/style/index.css';
import './style.css';

const Avatar: React.FC<AntAvatarProps> = props => {
  return <AntAvatar {...props} />;
};

Avatar.defaultProps = {
  size: 'default'
};

export default Avatar;
