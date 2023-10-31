import clsx from 'clsx'
import React from 'react'
import './menu.scss'

interface MenuProps {
  label?: string
  Source?: React.ComponentType<{ classNames?: string }>
  SourceActive?: React.ComponentType<{ classNames?: string }>
  actived?: boolean
}

export const Menu = (props: MenuProps) => {
  const {
    label = 'Genel Bakış',
    Source: HomeIcon,
    SourceActive: HomeActiveIcon,
    actived = false,
  } = props
  return (
    <div className={clsx('menu', actived ? 'actived' : '')}>
      {actived && HomeActiveIcon ? (
        <HomeActiveIcon />
      ) : (
        HomeIcon && <HomeIcon />
      )}
      {label}
    </div>
  )
}
