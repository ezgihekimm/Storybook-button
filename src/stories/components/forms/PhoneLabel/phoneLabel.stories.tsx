import type { Meta, StoryObj } from '@storybook/react'
import { PhoneLabel } from './phoneLabel'

const meta = {
  title: 'Forms/PhoneLabel',
  component: PhoneLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PhoneLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: ['+90', '+2', '+3'],
    placeholder: 'Placeholder',
  },
}
