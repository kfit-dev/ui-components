import * as React from 'react'
import { Tag as AntTag, TagProps as AntTagProps } from 'antd'
import classNames from 'classnames'
import { X } from 'phosphor-react'

import 'antd/lib/tag/style/index.css'
import './style.css'

export type TagProps = AntTagProps & {
  isCustom: boolean
}

const Tag: React.FC<TagProps> = ({ isCustom, className, color, ...rest }) => {
  const classes = classNames(isCustom && 'custom', !color && 'none', className)
  return <AntTag className={classes} color={color} {...rest} />
}

Tag.defaultProps = {
  isCustom: true,
  closeIcon: <X size={12} />
}

export default Tag
