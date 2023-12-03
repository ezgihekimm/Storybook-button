import clsx from 'clsx'
import Icon, { IconType } from '../icon/icon'
import './menu.scss'
export default interface MenuProps {
  label?: string
  icon?: IconType
  activedIcon?: IconType
  actived?: boolean
}

export const Menu = (props: MenuProps) => {
  const { label = 'Genel Bakış', actived, icon, activedIcon } = props
  return (
    <div className={clsx('menu', actived ? 'actived' : '')}>
      {actived ? (
        <Icon type={activedIcon} size="lg" color="primary" />
      ) : (
        <Icon type={icon} size="lg" />
      )}
      {label}
    </div>
  )
}
