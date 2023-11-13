import type { Meta, StoryObj } from '@storybook/react'
import { Menu } from './Menu'

const meta = {
  title: 'Example/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Genel Bakış',
    icon: 'Home',
    activedIcon: 'HomeSolid',
    actived: false,
  },
}
