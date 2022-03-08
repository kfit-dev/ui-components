import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as ListItem, ListItemProps } from '../index';

export default {
  title: 'ListItem',
  component: ListItem
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args: ListItemProps) => (
  <ListItem {...args} />
);

// export const Primary = Template.bind({});

// Primary.args = {
// label: 'ListItem'
// };
