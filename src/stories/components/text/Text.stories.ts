import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta = {
  title: 'Example/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>

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
