import * as React from 'react'
import { default as AntCard, CardProps as AntCardProps, CardMetaProps as AntCardMetaProps } from 'antd/lib/card'

import './style.css'

export type CardProps = AntCardProps

export type MetaProps = AntCardMetaProps & {
  hasmeta: true | false
}

export const { Meta } = AntCard

const Card: React.FC<CardProps> = props => {
  return <AntCard {...props} />
}

export default Card
