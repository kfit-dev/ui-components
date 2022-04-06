import React, { useState } from 'react'
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons'
import { ComponentMeta, Story } from '@storybook/react'
import { Col, Row } from 'antd'
import { Handshake, Person } from 'phosphor-react'

import WithAntIconSpan from '../../HOCs'
import { default as Menu, MenuItem, SubMenu } from '../../Menu'
import Select from '../../Select'
import Tag from '../../Tag'

import {
  Content,
  default as Layout,
  Header,
  LayoutProps,
  Sider,
  SiderHeader,
  LogoutButton,
  BottomPane,
  HeaderEndContent,
  PageHeaderTitle,
  PageHeaderSubtitle
} from '../index'

import 'antd/lib/typography/style/index.css'

type Args = LayoutProps & {
  label: string
  type?: string
}

export default {
  title: 'Layout',
  component: Layout,
  argTypes: {
    type: {
      options: ['staging', 'production'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Layout>

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3']

const Template: Story<Args> = (args: Args) => {
  const [collapsed, setCollapsed] = useState(true)
  const [openKeys, setOpenKeys] = React.useState([])

  const handleMenuOpen = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) setOpenKeys(keys)
    else setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
  }

  const handleLogoutClick = () => confirm('Are you sure? :(')
  const isStaging = args.type && args.type === 'staging'

  return (
    <Layout {...args} style={{ height: 600 }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SiderHeader text={'Katelyn Soo'} collapsed={collapsed} setCollapsed={setCollapsed} />

        <Menu
          mode="inline"
          defaultSelectedKeys={['10']}
          inlineIndent={16}
          openKeys={openKeys}
          onOpenChange={handleMenuOpen}
        >
          <SubMenu key="sub3" icon={<WithAntIconSpan icon={<Handshake size={16} />} />} title="Merchant Connect">
            <MenuItem key="10">My Merchants</MenuItem>
            <MenuItem key="11">My Submissions</MenuItem>
            <MenuItem key="12">My Drafts</MenuItem>
            <MenuItem key="13">My Attentions</MenuItem>
          </SubMenu>
          <SubMenu key="sub1" icon={<WithAntIconSpan icon={<Person />} />} title="User">
            <MenuItem key="3">Tom</MenuItem>
            <MenuItem key="4">Bill</MenuItem>
            <MenuItem key="5">Alex</MenuItem>
          </SubMenu>
          <MenuItem key="1" icon={<PieChartOutlined />}>
            Option 1
          </MenuItem>
          <MenuItem key="2" icon={<DesktopOutlined />}>
            Option 2
          </MenuItem>
        </Menu>

        <BottomPane>
          <LogoutButton onClick={handleLogoutClick} />
        </BottomPane>
      </Sider>
      <Layout className={isStaging ? 'staging' : ''}>
        <Header>
          <HeaderEndContent>
            {isStaging && <Tag color={'success'}>ia-staging</Tag>}
            <Select
              style={{ width: 110 }}
              defaultValue={'MY'}
              bordered={false}
              dropdownMatchSelectWidth={false}
              showArrow
              options={[
                { label: 'Malaysia', value: 'MY' },
                { label: 'Singapore', value: 'SG' },
                { label: 'Indonesia', value: 'ID' },
                { label: 'India', value: 'IN' }
              ]}
            />
          </HeaderEndContent>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Row>
            <Col offset={1} span={22}>
              <PageHeaderTitle>My Merchants</PageHeaderTitle>
              <PageHeaderSubtitle>{"This is the list of merchants you're in charge of."}</PageHeaderSubtitle>
            </Col>
          </Row>
        </Content>
        {/* need to keep */}
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  )
}

export const Default = Template.bind({})

Default.args = {
  type: 'staging',
  label: 'Layout'
}
