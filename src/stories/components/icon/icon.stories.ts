import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './icon'

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'ArrowDown',
    size: 'md',
    color: 'neutral',
  },
}
