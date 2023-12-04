import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
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
  const { label = 'Genel Bakış', icon, activedIcon, onMenuClick } = props
  const [isActived, setIsActived] = useState(false)
  const menuRef = useRef(null) as any

  const handleClick = () => {
    setIsActived(!isActived)
    if (onMenuClick) {
      onMenuClick()
    }
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isActived
      ) {
        setIsActived(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isActived])

  return (
    <div
      ref={menuRef}
      className={clsx('menu', isActived ? 'actived' : '')}
      onClick={handleClick}
    >
      {isActived ? (
        <Icon type={activedIcon} size="lg" color="primary" />
      ) : (
        <Icon type={icon} size="lg" />
      )}
      {label}
    </div>
  )
}
