import type { Meta, StoryObj } from '@storybook/react'
import { renderIcon } from '../icon/icon'
import { Menu } from './Menu'

const icon = renderIcon('home')
const activedIcon = renderIcon('homeActive')

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
    icon: icon,
    activedIcon: activedIcon,
    actived: false,
  },
}
