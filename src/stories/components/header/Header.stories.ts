import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    buttonText: 'Kripto Al',
    logo: 'logo',
    dropDownText: 'Pro',
    searchBar: true,
    blueBox: true,
    blueBoxText: 'Beta',
    firstIcon: 'wallet',
    secondIcon: 'bell',
    thirdIcon: 'questionMark',
    endIcon: 'user',
  },
}
