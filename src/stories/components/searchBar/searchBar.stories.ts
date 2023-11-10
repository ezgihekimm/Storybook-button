import type { Meta, StoryObj } from '@storybook/react'
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
    startIcon: 'MagnifyingGlass',
    endIcon: 'CommandSolid',
  },
}
