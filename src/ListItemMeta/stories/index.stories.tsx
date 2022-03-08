import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as ListItemMeta, ListItemMetaProps } from '../index';

export default {
  title: 'ListItemMeta',
  component: ListItemMeta
} as ComponentMeta<typeof ListItemMeta>;

const Template: ComponentStory<typeof ListItemMeta> = (
  args: ListItemMetaProps
) => <ListItemMeta {...args} />;

// export const Primary = Template.bind({});

// Primary.args = {
// 	label: 'ListItemMeta'
// };
