import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Badge } from 'antd'
import { default as Tabs, TabPane } from '../index'

export default {
  title: 'Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>

export const BasicTab = () => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Selected Tab" key="1">
          Tab 1
        </TabPane>
        <TabPane tab="Not Selected Tab" key="2">
          Tab 2
        </TabPane>
        <TabPane tab="Disabled Tab" disabled key="3">
          Tab 3
        </TabPane>
      </Tabs>
    </>
  )
}

export const BasicTabBadge = () => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <>
              <span>
                Selected Tab<Badge status="default"></Badge>
              </span>
            </>
          }
          key="1"
        >
          Tab 1
        </TabPane>
        <TabPane tab="Not Selected Tab" key="2">
          Tab 2
        </TabPane>
        <TabPane tab="Not Selected Tab" key="3">
          Tab 3
        </TabPane>
        <TabPane tab="Disabled Tab" disabled key="4">
          Tab 4
        </TabPane>
      </Tabs>
    </>
  )
}
