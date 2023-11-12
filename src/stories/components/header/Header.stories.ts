import type { Meta, StoryObj } from '@storybook/react'
import Logo from '../../assets/logo1.svg'
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
    logo: Logo,
    dropDownText: 'Pro',
    searchBar: true,
    blueBox: true,
    blueBoxText: 'Beta',
    firstIcon: 'Wallet',
    secondIcon: 'Bell',
    thirdIcon: 'QuestionMarkCircle',
    endIcon: 'User',
  },
}
