import clsx from 'clsx'
import BellIcon from '../../assets/bell'
import ChevronDown from '../../assets/chevronDown'
import Command from '../../assets/command'
import magnifyingGlass from '../../assets/magnifyingGlass'
import QuestionIcon from '../../assets/question'
import UserIcon from '../../assets/user'
import WalletIcon from '../../assets/wallet'
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
        <Text size="xl" weight="medium">
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
        <div className="sub-col-right">
          <Button
            onClick={walletClick}
            type="pillInstance"
            IconSource={WalletIcon}
            iconPosition="only"
            size="md"
          />
          <Button
            onClick={bellClick}
            type="pillInstance"
            IconSource={BellIcon}
            iconPosition="only"
            size="md"
          />
          <Button
            onClick={questionClick}
            type="pillInstance"
            IconSource={QuestionIcon}
            iconPosition="only"
            size="md"
          />
        </div>
        <div className="vl"></div>
        <Button
          onClick={userClick}
          type="pillInstance"
          IconSource={UserIcon}
          iconPosition="only"
          size="md"
        />
      </div>
    </div>
  )
}
