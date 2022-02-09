import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MagnifyingGlass, CaretRight, CaretLeft, Plus } from 'phosphor-react'
import Button, { ButtonProps } from '../index'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Button',
  children: 'BUTTON',
  type: 'primary',
  size: 'large',
}

export const PrimaryIconLeft = Template.bind({})

PrimaryIconLeft.args = {
  label: 'Button',
  iconPlacement: 'start',
  children: (
    <>
      <CaretRight size={24} className="iconLeft" /> BUTTON
    </>
  ),
  type: 'primary',
  size: 'large',
}

export const PrimaryIconRight = Template.bind({})

PrimaryIconRight.args = {
  label: 'Button',
  iconPlacement: 'end',
  children: (
    <>
      BUTTON <MagnifyingGlass size={24} className="iconRight" />
    </>
  ),
  type: 'primary',
  size: 'large',
}

export const Text = Template.bind({})

Text.args = {
  label: 'Button',
  children: 'BUTTON',
  type: 'text',
  size: 'large',
}

export const TextIconLeft = Template.bind({})

TextIconLeft.args = {
  label: 'Button',
  type: 'text',
  iconPlacement: 'start',
  children: (
    <>
      <CaretRight size={24} className="iconLeft" /> BUTTON
    </>
  ),
  size: 'large',
}

export const TextIconRight = Template.bind({})

TextIconRight.args = {
  label: 'Button',
  type: 'text',
  iconPlacement: 'end',
  children: (
    <>
      BUTTON <MagnifyingGlass size={24} className="iconRight" />
    </>
  ),
  size: 'large',
}

export const IconSearch = Template.bind({})

IconSearch.args = {
  label: 'Button',
  children: (
    <>
      <MagnifyingGlass size={16} className="circle" />
    </>
  ),
  shape: 'circle',
  size: 'large',
}

export const IconCaretLeft = Template.bind({})

IconCaretLeft.args = {
  label: 'Button',
  children: (
    <>
      <CaretLeft size={16} className="circle" />
    </>
  ),
  shape: 'circle',
  size: 'large',
}

export const IconPlus = Template.bind({})

IconPlus.args = {
  label: 'Button',
  children: (
    <>
      <Plus size={16} className="circle" />
    </>
  ),
  type: 'primary',
  shape: 'circle',
  size: 'large',
}
