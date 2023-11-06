import clsx from 'clsx'
import './menu.scss'

export default interface MenuProps {
  label?: string
  Source?: React.ReactNode
  SourceActive?: React.ReactNode
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
