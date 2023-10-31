import type { Meta, StoryObj } from '@storybook/react'
import HomeActiveIcon from '../../assets/homeActiveIcon'
import HomeIcon from '../../assets/homeIcon'
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
    Source: HomeIcon,
    SourceActive: HomeActiveIcon,
    actived: false,
  },
}
