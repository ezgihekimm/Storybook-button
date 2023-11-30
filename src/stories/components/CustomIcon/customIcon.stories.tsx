import type { Meta, StoryObj } from '@storybook/react'
import { CustomIcon } from './customIcon'

const meta = {
  title: 'Example/CustomIcon',
  component: CustomIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'Commercial',
    theme: 'light',
  },
}
