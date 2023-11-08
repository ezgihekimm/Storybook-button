import clsx from 'clsx'
import Image from 'next/image'
import Icon, { IconType, renderIcon } from '../icon/icon'
import './searchBar.scss'

export default interface SearchBarProps {
  placeholder?: string
  endLetter?: string
  startIcon?: IconType
  endIcon?: IconType
  onClick?: () => void
}

export const SearchBar = (props: SearchBarProps) => {
  const {
    placeholder = 'Arama Yap',
    endLetter = 'K',
    startIcon,
    endIcon,
    onClick,
  } = props
  const StartIcon = startIcon ? renderIcon(startIcon) : null
  const EndIcon = endIcon ? renderIcon(endIcon) : null
  return (
    <div className={clsx('search-bar')} onClick={onClick}>
      <div className="column">
        {startIcon && (
          <Image src={StartIcon} alt="startIcon" width={24} height={24} />
        )}
        <div className="placeholder-text">{placeholder}</div>
        <Icon type="home" width={25} height={25} className="red" />
      </div>
      <div className="column">
        {endIcon && (
          <Image src={EndIcon} alt="endIcon" width={12} height={12} />
        )}
        <div className="end-icon-text">{endLetter}</div>
      </div>
    </div>
  )
}
