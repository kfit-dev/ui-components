import React, { useState } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Avatar, Button } from 'antd'
import { DotsThree } from 'phosphor-react'
import { default as Card, CardProps, Meta, MetaProps } from '../index'

export default {
  title: 'Card',
  component: Card
} as ComponentMeta<typeof Card>

type Args = {
  card: CardProps
  meta: MetaProps
}

const Template: Story<Args> = (args: Args) => {
  const { hasmeta, ...argsMeta } = args.meta
  const { hasmetaextra } = args.card
  
  return (
    <>
      {args.meta.hasmeta === false && <Card {...args.card} />}

      {hasmeta === true && (
        <Card {...args.card}>
          <Meta {...argsMeta}/>
          {hasmetaextra && argsMeta.extra}
        </Card>
      )}
    </>
  )
}

const content = (
  <div>
    <p>Card Content</p>
    <p>Card Content</p>
    <p>Card Content</p>
  </div>
)

export const DefaultCardButton = Template.bind({})

DefaultCardButton.args = {
  card: {
    label: 'Card',
    title: 'Default Card Title',
    children: content,
    hasbutton:"true",
    extra: <Button type="text">Button</Button>
  },
  meta: {
    hasmeta: false
  }
}

export const DefaultCardMore = Template.bind({})

DefaultCardMore.args = {
  card: {
    label: 'Card',
    title: 'Default Card Title',
    children: content,
    extra: <DotsThree size={16} />
  },
  meta: {
    hasmeta: false
  }
}

export const SmallCardButton = Template.bind({})

SmallCardButton.args = {
  card: {
    label: 'Card',
    size: 'small',
    title: 'Small Card Title',
    children: content,
    hasbutton:"true",
    extra: (
      <Button size="small" type="text">
        Button
      </Button>
    )
  },
  meta: {
    hasmeta: false
  }
}

export const SmallCardMore = Template.bind({})

SmallCardMore.args = {
  card: {
    label: 'Card',
    size: 'small',
    title: 'Small Card Title',
    children: content,
    extra: <DotsThree size={16} />
  },
  meta: {
    hasmeta: false
  }
}

export const BasicCard = Template.bind({})

BasicCard.args = {
  card: {
    label: 'Card',
    children: content
  },
  meta: {
    hasmeta: false
  }
}

export const CardDescription = Template.bind({})

CardDescription.args = {
  card: {},
  meta: {
    label: 'Card',
    hasmeta: true,
    avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    title: 'Default Card Title',
    description: 'Card description'
  }
}

export const CardDescriptionMore = Template.bind({})

CardDescriptionMore.args = {
  card: {
    hasmetaextra:"true"
  },
  meta: {
    label: 'Card',
    hasmeta: true,
    avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    title: 'Default Card Title',
    description: 'Card description',
    extra: <DotsThree size={16} />
  }
}

export const CoverCard = Template.bind({})

CoverCard.args = {
  card: {
    cover: <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
  },
  meta: {
    label: 'Card',
    hasmeta: true,
    title: 'Default Card Title',
    description: 'Card description',
    extra: <DotsThree size={16} />
  }
}

export const CoverCardAvatar = Template.bind({})

CoverCardAvatar.args = {
  card: {
    cover: <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />,
    hasmetaextra:"true"
  },
  meta: {
    label: 'Card',
    hasmeta: true,
    avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    title: 'Default Card Title',
    description: 'Card description',
    extra: <DotsThree size={16} />
  }
}

export const TabsCard = () => {
  const tabList = [
    {
      key: 'tab1',
      tab: 'Selected Tab'
    },
    {
      key: 'tab2',
      tab: 'Non Selected Tab'
    },
    {
      key: 'tab3',
      tab: 'Non Selected Tab'
    }
  ]

  const contentList = {
    tab1: (
      <div>
        <p>Card Content 1</p>
        <p>Card Content</p>
        <p>Card Content</p>
      </div>
    ),
    tab2: (
      <div>
        <p>Card Content 2</p>
        <p>Card Content</p>
        <p>Card Content</p>
      </div>
    ),
    tab3: (
      <div>
        <p>Card Content 3</p>
        <p>Card Content</p>
        <p>Card Content</p>
      </div>
    )
  }

  const [activeTabKey, setActiveTabKey] = useState('tab1')

  const onTab1Change = key => {
    setActiveTabKey(key)
  }

  return (
    <>
      <Card
        style={{ width: '100%' }}
        title="Default Card Title"
        extra={<DotsThree size={16} />}
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={key => {
          onTab1Change(key)
        }}
      >
        {contentList[activeTabKey]}
      </Card>
    </>
  )
}
