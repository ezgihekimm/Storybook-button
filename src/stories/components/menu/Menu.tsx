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
        <Icon type={activedIcon} className="fill-primary-blue-500" />
      ) : (
        <Icon type={icon} />
      )}
      {label}
    </div>
  )
}
