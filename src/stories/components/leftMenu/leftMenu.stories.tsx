import type { Meta, StoryObj } from '@storybook/react'
import { LeftMenu } from './leftMenu'

const meta = {
  title: 'Example/LeftMenu',
  component: LeftMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LeftMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    topMenuItems: [
      { icon: 'Home', label: 'Genel Bakış', activedIcon: 'HomeActive' },
      { icon: 'Wallet', label: 'Varlıklarım', activedIcon: 'WalletActive' },
      {
        icon: 'BankNotes',
        label: 'TL Yatır & Çek',
        activedIcon: 'BankNotesActive',
      },
      {
        icon: 'Convert',
        label: 'Kripto Yatır & Çek',
        activedIcon: 'ConvertActive',
      },
      {
        icon: 'TrendingUp',
        label: 'Piyasalar',
        activedIcon: 'TrendingUpActive',
      },
      {
        icon: 'LightningBolt',
        label: 'Sizin İçin',
        activedIcon: 'LightningBoltActive',
      },
    ],
    bottomMenuItems: [
      { label: 'Kullanım' },
      { label: 'Gizlilik' },
      { label: 'Denetim Raporları' },
    ],
  },
}
