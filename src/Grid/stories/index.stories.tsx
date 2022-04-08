import React from 'react';
import { ComponentMeta } from '@storybook/react';

// this component does not need stories
const Grid: React.FC = props => {
  return <div {...props} />;
};

export default {
  title: 'Grid',
  component: Grid,
  argTypes: {
    placement: {
      options: ['right', 'bottom', 'left', 'top'],
      control: { type: 'radio' }
    },
    children: {
      table: { disable: true }
    }
  }
} as ComponentMeta<typeof Grid>;
