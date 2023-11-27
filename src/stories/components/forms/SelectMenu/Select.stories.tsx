import type { Meta, StoryObj } from '@storybook/react'
import { SelectMenu } from './Select'

const meta = {
  title: 'Forms/SelectMenu',
  component: SelectMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
    disabled: false,
  },
}
