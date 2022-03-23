import * as React from 'react'
import {
  default as AntBreadcrumb,
  BreadcrumbProps as AntBreadcrumbProps,
  BreadcrumbItemProps as AntBreadcrumbItemProps
} from 'antd/lib/breadcrumb'

import './style.css'

export type BreadcrumbProps = AntBreadcrumbProps
export type BreadcrumbItemProps = AntBreadcrumbItemProps

export const BreadcrumbItem: React.FC<AntBreadcrumbItemProps> = props => <AntBreadcrumb.Item {...props} />

const Breadcrumb: React.FC<BreadcrumbProps> = props => {
  return <AntBreadcrumb {...props} />
}

export default Breadcrumb
