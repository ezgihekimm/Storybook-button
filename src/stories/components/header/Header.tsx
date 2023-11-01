import clsx from 'clsx'
import React from 'react'
import BellIcon from '../../assets/bell'
import QuestionIcon from '../../assets/question'
import UserIcon from '../../assets/user'
import WalletIcon from '../../assets/wallet'
import { Button } from '../button/Button'
import { Text } from '../text/Text'
import './header.scss'

interface HeaderProps {
  logo?: React.ComponentType<{ classNames?: string }>
  buttonText?: string
}

export const Header = (props: HeaderProps) => {
  const { logo: LogoComponent, buttonText } = props
  return (
    <div className={clsx('header')}>
      <div className="flex flex-row flex-wrap content-center justify-center">
        <LogoComponent />
        <div className="hl"></div>
        <Text size="xl" weight="medium">
          Pro
        </Text>
      </div>
      <div className="col-right">
        <Button label={buttonText} />
        <div className="ml-4 flex flex-row flex-wrap gap-2">
          <Button
            type="pillInstance"
            IconSource={WalletIcon}
            iconPosition="only"
            size="md"
          />
          <Button
            type="pillInstance"
            IconSource={BellIcon}
            iconPosition="only"
            size="md"
          />
          <Button
            type="pillInstance"
            IconSource={QuestionIcon}
            iconPosition="only"
            size="md"
          />
        </div>
        <div className="hl"></div>
        <Button
          type="pillInstance"
          IconSource={UserIcon}
          iconPosition="only"
          size="md"
        />
      </div>
    </div>
  )
}
