import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Button component',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = {
  args: {
    type: 'filled',
    size: 'md',
    label: 'Button',
    iconPosition: 'none',
    disabled: false,
    IconSource: 'PaperAirplane',
    IconLoadingSource: 'LoadingSolid',
    loading: false,
  },
}

export const Pill: Story = {
  args: {
    type: 'pill',
    size: 'md',
    label: 'Button',
    iconPosition: 'none',
    disabled: false,
    IconSource: 'PaperAirplane',
    IconLoadingSource: 'LoadingSolid',
  },
}
export const Outline: Story = {
  args: {
    type: 'outline',
    size: 'md',
    label: 'Button',
    iconPosition: 'none',
    disabled: false,
    IconSource: 'PaperAirplane',
    IconLoadingSource: 'LoadingSolid',
  },
}

export const Link: Story = {
  args: {
    type: 'link',
    size: 'md',
    label: 'Button',
    iconPosition: 'none',
    disabled: false,
    IconSource: 'PaperAirplane',
    IconLoadingSource: 'LoadingSolid',
  },
}
