import clsx from 'clsx'
import Image from 'next/image'
import chevronDown from '../../assets/IconSet/chevron-down.svg'
import { Button } from '../button/Button'
import { IconType, renderIcon } from '../icon/icon'
import { SearchBar } from '../searchBar/searchBar'
import { Text } from '../text/Text'
import './header.scss'

export default interface HeaderProps {
  logo?: IconType
  firstIcon?: IconType
  secondIcon?: IconType
  thirdIcon?: IconType
  endIcon?: IconType
  buttonText?: string
  dropDownText?: string
  searchBar?: boolean
  blueBox?: boolean
  blueBoxText?: string
  buttonClick?: () => void
  firstIconClick?: () => void
  secondIconClick?: () => void
  thirdIconClick?: () => void
  endIconClick?: () => void
}

export const Header = (props: HeaderProps) => {
  const {
    logo,
    firstIcon,
    secondIcon,
    thirdIcon,
    endIcon,
    buttonText,
    dropDownText,
    buttonClick,
    firstIconClick,
    secondIconClick,
    thirdIconClick,
    endIconClick,
    searchBar,
    blueBox,
    blueBoxText,
  } = props
  const FirstIcon = firstIcon ? renderIcon(firstIcon) : null
  const SecondIcon = secondIcon ? renderIcon(secondIcon) : null
  const ThirdIcon = thirdIcon ? renderIcon(thirdIcon) : null
  const EndIcon = endIcon ? renderIcon(endIcon) : null
  const Logo = logo ? renderIcon(logo) : null
  return (
    <div className={clsx('header')}>
      <div className="column">
        {logo && <Image src={Logo} alt="logo" />}
        <div className="vl"></div>
        <Text textSize="xl" weight="medium">
          {dropDownText}
        </Text>
        {blueBox && <div className="blue-box">{blueBoxText}</div>}
        <button className="drop">
          <Image src={chevronDown} alt="chevronDown" width={24} height={24} />
        </button>
        {searchBar && (
          <div className="ml-8">
            <SearchBar startIcon="magnifyingGlass" endIcon="command" />
          </div>
        )}
      </div>
      <div className="column">
        <Button label={buttonText} onClick={buttonClick} />
        <div className="sub-col-right">
          <button className="circle" onClick={firstIconClick}>
            <Image src={FirstIcon} alt="firstIcon" width={24} height={24} />
          </button>
          <button className="circle" onClick={secondIconClick}>
            <Image src={SecondIcon} alt="secondIcon" width={24} height={24} />
          </button>
          <button className="circle" onClick={thirdIconClick}>
            <Image src={ThirdIcon} alt="thirdIcon" width={24} height={24} />
          </button>
        </div>
        <div className="vl"></div>
        <button className="circle" onClick={endIconClick}>
          <Image src={EndIcon} alt="endIcon" width={24} height={24} />
        </button>
      </div>
    </div>
  )
}
