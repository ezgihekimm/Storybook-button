import { BadgeType } from '@/lib/types'
import clsx from 'clsx'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { Badge } from '../badges/badge'
import { Button } from '../button/Button'
import Icon, { IconType } from '../icon/icon'
import { SearchBar } from '../searchBar/searchBar'
import { Text } from '../text/Text'
import './header.scss'

export default interface HeaderProps {
  logo?: StaticImport
  firstIcon?: IconType
  secondIcon?: IconType
  thirdIcon?: IconType
  endIcon?: IconType
  buttonText?: string
  dropDownText?: string
  searchBar?: boolean
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
  } = props
  return (
    <div className={clsx('header')}>
      <div className="column">
        {logo && <Image src={logo} alt="logo" />}
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
          <div className="ml-8">
            <SearchBar startIcon="MagnifyingGlass" endIcon="SupportSolid" />
          </div>
        )}
      </div>
      <div className="column">
        <Button label={buttonText} onClick={buttonClick} size="md" />
        <div className="sub-col-right">
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
