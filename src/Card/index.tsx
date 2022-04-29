import * as React from 'react'
import { default as AntCard, CardProps as AntCardProps, CardMetaProps as AntCardMetaProps } from 'antd/lib/card'

import './style.css'

export type CardProps = AntCardProps & {
  hasbutton?:string,
  hasmetaextra?:string,
}

export type MetaProps = AntCardMetaProps & {
  hasmeta: boolean,
  extra?:React.ReactNode,
}

export const { Meta } = AntCard

const Card: React.FC<CardProps> = props => {
  const { hasbutton,hasmetaextra } = props
  return <AntCard {...props}  className={ [hasbutton ? "with-button" : "", hasmetaextra ? "with-meta-extra" : ""].join(" ")}/>
}

export default Card
