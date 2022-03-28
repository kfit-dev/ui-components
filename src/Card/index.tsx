import * as React from 'react'
import { default as AntCard, CardProps as AntCardProps, CardMetaProps as AntCardMetaProps } from 'antd/lib/card'

import './style.css'

export type CardProps = AntCardProps & {
  hasButton?:boolean,
}

export type MetaProps = AntCardMetaProps & {
  hasmeta: boolean,
}

export const { Meta } = AntCard

const Card: React.FC<CardProps> = props => {
  const { hasButton, ...restProps } = props
  return <AntCard {...restProps} className={ hasButton ? "with-button" : ""}/>
}

export default Card
