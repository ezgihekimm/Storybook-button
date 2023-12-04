import type { Meta, StoryObj } from '@storybook/react'
import { LeftMenu } from './leftMenu'

const meta = {
  title: 'Components/LeftMenu',
  component: LeftMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LeftMenu>

export default meta

type Story = StoryObj<typeof meta>

const HomeOnClick = () => {
  console.log('HomeOnClick')
}
const WalletOnClick = () => {
  console.log('WalletOnClick')
}

export const Default: Story = {
  args: {
    topMenuItems: [
      {
        icon: 'Home',
        label: 'Genel Bakış',
        activedIcon: 'HomeActive',
        onClick: HomeOnClick,
        actived: true,
      },
      {
        icon: 'Wallet',
        label: 'Varlıklarım',
        activedIcon: 'WalletActive',
        onClick: WalletOnClick,
      },
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
