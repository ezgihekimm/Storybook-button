import clsx from 'clsx'
import { ReactNode } from 'react'
import Icon, { IconType } from '../icon/icon'
import './menu.scss'

export interface MenuProps {
  icon?: IconType
  activedIcon?: IconType
  actived?: boolean
  onMenuClick?: () => void
  children?: ReactNode
}

export const Menu = (props: MenuProps) => {
  const { icon, activedIcon, actived, onMenuClick, children } = props

  const handleClick = () => {
    if (onMenuClick) {
      onMenuClick()
    }
  }

  return (
    <div
      className={clsx('menu', actived ? 'actived' : '')}
      onClick={handleClick}
    >
      {actived ? (
        <Icon type={activedIcon} size="lg" color="primary" />
      ) : (
        <Icon type={icon} size="lg" />
      )}
      {children}
    </div>
  )
}
