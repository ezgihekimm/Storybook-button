import type { Meta, StoryObj } from '@storybook/react'
import { Size } from './Size'

const meta = {
  title: 'Example/Size',
  component: Size,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Size>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'base',
    label: 'The quick brown fox jumps over the lazy dog.',
    weight: 'normal',
    heading: false,
  },
}
