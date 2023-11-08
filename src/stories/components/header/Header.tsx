import clsx from 'clsx'
import Command from '../../assets/IconSet/command.svg'
import ChevronDown from '../../assets/chevronDown'
import magnifyingGlass from '../../assets/magnifyingGlass'
import { Button } from '../button/Button'
import { SearchBar } from '../searchBar/searchBar'
import { Text } from '../text/Text'
import './header.scss'

export default interface HeaderProps {
  logo?: React.ComponentType<{ classNames?: string }>
  buttonText?: string
  dropDownText?: string
  searchBar?: boolean
  blueBox?: boolean
  blueBoxText?: string
  buttonClick?: () => void
  walletClick?: () => void
  bellClick?: () => void
  questionClick?: () => void
  userClick?: () => void
}

export const Header = (props: HeaderProps) => {
  const {
    logo: LogoComponent,
    buttonText,
    dropDownText,
    buttonClick,
    walletClick,
    bellClick,
    questionClick,
    userClick,
    searchBar,
    blueBox,
    blueBoxText,
  } = props
  return (
    <div className={clsx('header')}>
      <div className="column">
        {LogoComponent && <LogoComponent />}
        <div className="vl"></div>
        <Text textSize="xl" weight="medium">
          {dropDownText}
        </Text>
        {blueBox && <div className="blue-box">{blueBoxText}</div>}
        <ChevronDown />
        {searchBar && (
          <div className="ml-8">
            <SearchBar startIcon={magnifyingGlass} endIcon={Command} />
          </div>
        )}
      </div>
      <div className="column">
        <Button label={buttonText} onClick={buttonClick} />
        <div className="sub-col-right"></div>
        <div className="vl"></div>
      </div>
    </div>
  )
}
