import type { Meta, StoryObj } from '@storybook/react'
import CommandIcon from '../../assets/command'
import GlassIcon from '../../assets/magnifyingGlass'

import { SearchBar } from './searchBar'

const meta = {
  title: 'Example/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Genel Bakış',
    endLetter: 'K',
    startIcon: GlassIcon,
    endIcon: CommandIcon,
  },
}
