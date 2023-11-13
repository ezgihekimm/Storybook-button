import clsx from 'clsx'
import Icon, { IconType } from '../icon/icon'
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

  return (
    <div className={clsx('search-bar')} onClick={onClick}>
      <div className="column">
        {startIcon && <Icon type={startIcon} size="md" />}
        <div className="placeholder-text">{placeholder}</div>
      </div>
      <div className="column">
        {endIcon && <Icon type={endIcon} size="xs" />}
        <div className="end-text">{endLetter}</div>
      </div>
    </div>
  )
}
