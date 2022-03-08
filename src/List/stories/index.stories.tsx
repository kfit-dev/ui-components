import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as List, ListProps } from '../index';
import { default as ListItem } from '../../ListItem';
import ListItemMeta from '../../ListItemMeta';
import { default as Button } from '../../Button';
// import { default as Avatar} from '../../A'

export default {
  title: 'List',
  component: List
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args: ListProps<any>) => (
  <List {...args} />
);

const dataSource = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
];

export const Default = Template.bind({});

Default.args = {
  header: <div>Header</div>,
  footer: <div>Footer</div>,
  label: 'List',
  dataSource: dataSource,
  renderItem: item => <ListItem>{item}</ListItem>
};

Default.argTypes = {
  size: {
    control: {
      type: 'radio',
      options: ['small', 'default', 'large']
    },
    defaultValue: 'default'
  }
};

export const LoadMoreList: React.FC = props => {
  const LoadMoreButton = () => (
    <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px'
      }}
    >
      <Button type={'primary'} onClick={() => {}}>
        Load more
      </Button>
    </div>
  );
  return (
    <List
      loadMore={<LoadMoreButton />}
      bordered={false}
      dataSource={dataSource}
      renderItem={item => (
        <ListItem actions={[<Button type={'text'}>Button</Button>]}>
          <ListItemMeta
            // avatar={<Avatar src={item.picture.large} />}
            title={<a href="https://ant.design">{item}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </ListItem>
      )}
    />
  );
};
