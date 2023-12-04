import clsx from 'clsx'
import Icon, { IconType } from '../icon/icon'
import './menu.scss'

export interface MenuProps {
  label?: string
  icon?: IconType
  activedIcon?: IconType
  actived?: boolean
  onMenuClick?: () => void
}

export const Menu = (props: MenuProps) => {
  const {
    label = 'Genel Bakış',
    icon,
    activedIcon,
    actived,
    onMenuClick,
  } = props

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
      {label}
    </div>
  )
}
