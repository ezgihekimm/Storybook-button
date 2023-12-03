import { Menu } from '../menu/Menu'
import { Text } from '../text/Text'
import './leftMenu.scss'

export const LeftMenu = () => {
  return (
    <div className="left-menu">
      <div className="col-top">
        <Menu icon="Home" label="Genel Bakış"></Menu>
        <Menu icon="Wallet" label="Varlıklarım"></Menu>
        <Menu icon="BankNotes" label="TL Yatır & Çek"></Menu>
        <Menu icon="Convert" label="Kripto Yatır & Çek"></Menu>
        <Menu icon="TrendingUp" label="Piyasalar"></Menu>
        <Menu icon="LightningBolt" label="Sizin İçin"></Menu>
      </div>
      <div className="col-bottom">
        <Text textSize="xs">Kullanım</Text>
        <Text textSize="xs">· Gizlilik </Text>
        <Text textSize="xs">· Denetim Raporları</Text>
      </div>
    </div>
  )
}
