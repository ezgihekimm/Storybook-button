'use client'
import { useState } from 'react'
import Logo from '../stories/assets/Logo (Resize).svg'
import { Header } from '../stories/components/header/Header'
import { LeftMenu } from '../stories/components/leftMenu/leftMenu'
export default function Home() {
  const [activeMenu, setActiveMenu] = useState('')
  return (
    <>
      <Header
        logo={Logo}
        buttonText="Kripto Al"
        badgeType="primary"
        badge
        dropDownText="Pro"
        searchBar
        firstIcon="Wallet"
        secondIcon="Bell"
        thirdIcon="QuestionMarkCircle"
        endIcon="User"
      ></Header>
      <LeftMenu
        topMenuItems={[
          {
            icon: 'Home',
            label: 'Genel Bakış',
            activedIcon: 'HomeActive',
            onClick: () => {
              setActiveMenu('Genel Bakış')
            },
            actived: activeMenu === 'Genel Bakış',
          },
          {
            icon: 'Wallet',
            label: 'Varlıklarım',
            activedIcon: 'WalletActive',
            onClick: () => {
              setActiveMenu('Varlıklarım')
            },
            actived: activeMenu === 'Varlıklarım',
          },
          {
            icon: 'BankNotes',
            label: 'TL Yatır & Çek',
            activedIcon: 'BankNotesActive',
            onClick: () => {
              setActiveMenu('TL Yatır & Çek')
            },
            actived: activeMenu === 'TL Yatır & Çek',
          },
          {
            icon: 'Convert',
            label: 'Kripto Yatır & Çek',
            activedIcon: 'ConvertActive',
            onClick: () => {
              setActiveMenu('Kripto Yatır & Çek')
            },
            actived: activeMenu === 'Kripto Yatır & Çek',
          },
          {
            icon: 'TrendingUp',
            label: 'Piyasalar',
            activedIcon: 'TrendingUpActive',
            onClick: () => {
              setActiveMenu('Piyasalar')
            },
            actived: activeMenu === 'Piyasalar',
          },
          {
            icon: 'LightningBolt',
            label: 'Sizin İçin',
            activedIcon: 'LightningBoltActive',
            onClick: () => {
              setActiveMenu('Sizin İçin')
            },
            actived: activeMenu === 'Sizin İçin',
          },
        ]}
        bottomMenuItems={[
          { label: 'Kullanım' },
          { label: 'Gizlilik' },
          { label: 'Denetim Raporları' },
        ]}
      ></LeftMenu>
    </>
  )
}
