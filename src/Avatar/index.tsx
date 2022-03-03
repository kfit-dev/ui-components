import * as React from 'react';
import { Avatar as AntAvatar, AvatarProps as AntAvatarProps } from 'antd';

import 'antd/lib/avatar/style/index.css';
import './style.css';

export type AvatarProps = AntAvatarProps;

const Avatar: React.FC<AvatarProps> = props => {
  const { src } = props;
  return (
    <AntAvatar className={src ? 'image-avatar' : 'text-avatar'} {...props} />
  );
};

Avatar.defaultProps = {
  size: 'default'
};

export default Avatar;
