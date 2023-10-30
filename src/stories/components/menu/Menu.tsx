import clsx from 'clsx'
import React from 'react'
import './menu.scss'

interface MenuProps {
  label?: string
  iconSource?: React.ComponentType<{ classNames?: string }>
  iconSourceActive?: React.ComponentType<{ classNames?: string }>
  hoverOpen?: boolean
  activeOpen?: boolean
}

export const Menu = (props: MenuProps) => {
  const {
    label = 'Genel Bakış',
    iconSource: HomeIcon,
    iconSourceActive: HomeActiveIcon,
    hoverOpen = false,
    activeOpen = false,
  } = props
  return (
    <div
      className={clsx(
        'text-menu',
        'position',
        'padding',
        'gap',
        'border-radius',
        hoverOpen ? 'bg-open' : '',
        activeOpen ? 'bg-open' : '',
      )}
    >
      {activeOpen && HomeActiveIcon ? (
        <HomeActiveIcon />
      ) : (
        HomeIcon && <HomeIcon />
      )}
      {label}
    </div>
  )
}
