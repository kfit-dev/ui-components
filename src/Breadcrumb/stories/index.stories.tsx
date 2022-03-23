import React from 'react'
import { ComponentMeta } from '@storybook/react'

import { default as Breadcrumb, BreadcrumbItem } from '../index'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb
} as ComponentMeta<typeof Breadcrumb>

export const basic = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="">My Merchants</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="">Add New Merchants</a>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
