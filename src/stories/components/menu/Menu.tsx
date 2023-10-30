import clsx from 'clsx'
import React from 'react'
import './menu.scss'

interface MenuProps {
  label?: string
  iconSource?: React.ComponentType<{ classNames?: string }>
  hoverOpen?: boolean
  activeOpen?: boolean
}

export const Menu = (props: MenuProps) => {
  const {
    label = 'Genel Bakış',
    iconSource: HomeIcon,
    hoverOpen = false,
    activeOpen = false,
  } = props
  return (
    <div
      className={clsx(
        'typography',
        'position',
        'padding',
        'gap',
        'border-radius',
        hoverOpen ? 'hover-open' : 'hover-close',
        activeOpen ? 'active-open' : 'active-close',
      )}
    >
      {HomeIcon && <HomeIcon />}
      {label}
    </div>
  )
}
