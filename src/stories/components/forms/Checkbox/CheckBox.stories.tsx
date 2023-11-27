import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './CheckBox'

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Checkbox Label',
    disabled: false,
    type: 'checkbox',
  },
}
