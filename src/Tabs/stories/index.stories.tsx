import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Badge } from 'antd'
import 'antd/lib/badge/style/index.css'
import { default as Tabs, TabPane, TabsProps } from '../index'

export default {
  title: 'Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args: TabsProps) => <Tabs {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Tabs'
}

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
        <TabPane tab="Selected Tab" key="1">
          Tab 1
        </TabPane>
        <TabPane
          tab={
            <>
              <span>
                Not Selected Tab<Badge style={{ marginLeft: '6px' }} status="error"></Badge>
              </span>
            </>
          }
          key="2"
        >
          Tab 2
        </TabPane>
        <TabPane tab="Disabled Tab" disabled key="3">
          Tab 3
        </TabPane>
      </Tabs>
    </>
  )
}
