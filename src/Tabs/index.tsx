import * as React from 'react'
import { Tabs as AntTabs, TabsProps as AntTabsProps, TabPaneProps as AntTabPaneProps } from 'antd'

import './style.css'

export type TabsProps = AntTabsProps

export type TabPeneProps = AntTabPaneProps
export const { TabPane } = AntTabs

const Tabs: React.FC<TabsProps> = props => {
  return <AntTabs {...props} />
}

export default Tabs
