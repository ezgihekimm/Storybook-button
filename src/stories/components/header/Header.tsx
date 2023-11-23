import { BadgeType } from '@/lib/types'
import clsx from 'clsx'
import { Badge } from '../badges/badge'
import { Button } from '../button/Button'
import Icon, { IconType } from '../icon/icon'
import { SearchBar } from '../searchBar/searchBar'
import { Text } from '../text/Text'
import './header.scss'

export default interface HeaderProps {
  logo?: any
  firstIcon?: IconType
  secondIcon?: IconType
  thirdIcon?: IconType
  endIcon?: IconType
  buttonText?: string
  dropDownText?: string
  searchBar?: boolean
  mobileLogo?: any
  badge?: boolean
  badgeType?: BadgeType
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
    badge,
    badgeType,
    mobileLogo,
  } = props
  const Logo = logo ? logo : null
  const MobileLogo = mobileLogo ? mobileLogo : null
  return (
    <div className={clsx('header')}>
      <div className="column-left">
        <div className="base-logo">{logo && <Logo />}</div>
        <div className="mobile-logo">{mobileLogo && <MobileLogo />}</div>
        <div className="vl"></div>
        <Text textSize="xl" weight="medium">
          {dropDownText}
        </Text>
        <div className="ml-2 mr-1">
          {badge && <Badge type={badgeType}>Beta</Badge>}
        </div>
        <button className="drop">
          <Icon type="ChevronDownSolid" />
        </button>
        {searchBar && (
          <div className="searchBar">
            <SearchBar startIcon="MagnifyingGlass" endIcon="Command" />
          </div>
        )}
      </div>
      <div className="hamburger-menu">
        <button className="circle">
          <Icon type="Bars" size="md" color="secondary" />
        </button>
      </div>
      <div className="column-right">
        <div className="sub-col-right">
          <Button label={buttonText} onClick={buttonClick} size="sm" />
          <button className="circle" onClick={firstIconClick}>
            <Icon type={firstIcon} size="md" color="secondary" />
          </button>
          <button className="circle" onClick={secondIconClick}>
            <Icon type={secondIcon} size="md" color="secondary" />
          </button>
          <button className="circle" onClick={thirdIconClick}>
            <Icon type={thirdIcon} size="md" color="secondary" />
          </button>
        </div>
        <div className="vl"></div>
        <button className="circle" onClick={endIconClick}>
          <Icon type={endIcon} size="md" color="secondary" />
        </button>
      </div>
    </div>
  )
}
