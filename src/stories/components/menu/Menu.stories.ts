import type { Meta, StoryObj } from '@storybook/react'
import { Menu } from './Menu'

const meta = {
  title: 'Components/Menu',
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
    children: 'Genel Bakış',
    icon: 'Home',
    activedIcon: 'HomeActive',
    actived: false,
  },
}
