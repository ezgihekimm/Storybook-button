import clsx from 'clsx'
import Image from 'next/image'
import { IconType, renderIcon } from '../icon/icon'
import './menu.scss'
export default interface MenuProps {
  label?: string
  icon?: IconType
  activedIcon?: IconType
  actived?: boolean
}

export const Menu = (props: MenuProps) => {
  const { label = 'Genel Bakış', actived, icon, activedIcon } = props
  const active = activedIcon ? renderIcon(activedIcon) : null
  const baseIcon = icon ? renderIcon(icon) : null
  return (
    <div className={clsx('menu', actived ? 'actived' : '')}>
      {actived ? (
        <Image src={active} alt="activedIcon" width={24} height={24} />
      ) : (
        <Image src={baseIcon} width={24} height={24} alt="baseIcon" />
      )}
      {label}
    </div>
  )
}
