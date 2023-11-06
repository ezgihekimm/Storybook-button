import clsx from 'clsx'
import './searchBar.scss'

export default interface SearchBarProps {
  placeholder?: string
  endLetter?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  onClick?: () => void
}

export const SearchBar = (props: SearchBarProps) => {
  const {
    placeholder = 'Arama Yap',
    endLetter = 'K',
    startIcon: StartIcon,
    endIcon: EndIcon,
    onClick,
  } = props
  return (
    <div className={clsx('search-bar')} onClick={onClick}>
      <div className="column">
        {StartIcon && <StartIcon />}
        <div className="placeholder-text">{placeholder}</div>
      </div>
      <div className="column">
        {EndIcon && <EndIcon />}
        <div className="end-icon-text">{endLetter}</div>
      </div>
    </div>
  )
}
