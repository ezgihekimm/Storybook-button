import type { Meta, StoryObj } from '@storybook/react'
import { renderIcon } from '../icon/icon'
import { Button } from './Button'

const buttonIcon = renderIcon('paperAirplane')
const loadingIcon = renderIcon('loading')

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
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
    IconSource: buttonIcon,
    IconLoadingSource: loadingIcon,
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
    IconSource: buttonIcon,
    IconLoadingSource: loadingIcon,
  },
}
export const Outline: Story = {
  args: {
    type: 'outline',
    size: 'md',
    label: 'Button',
    iconPosition: 'none',
    disabled: false,
    IconSource: buttonIcon,
    IconLoadingSource: loadingIcon,
  },
}

export const Link: Story = {
  args: {
    type: 'link',
    size: 'md',
    label: 'Button',
    iconPosition: 'none',
    disabled: false,
    IconSource: buttonIcon,
    IconLoadingSource: loadingIcon,
  },
}
