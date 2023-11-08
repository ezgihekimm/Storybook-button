// SOLID, KISS, YAGNI, DRY
// 1. SOLID: Single Responsibility Principle
// 2. KISS: Keep It Simple Stupid
// 3. YAGNI: You Aren't Gonna Need It
// 4. DRY: Don't Repeat Yourself
// classnames
// Packages.json, package-lock.json

import { ButtonSize, ButtonType, Position } from '@/lib/types'
import clsx from 'clsx'
import Image from 'next/image'
import { IconType, renderIcon } from '../icon/icon'
import './button.scss'

export default interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  label?: string
  IconSource?: IconType
  iconPosition?: Position
  IconLoadingSource?: IconType
  iconLoadingPosition?: Position
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  const {
    type = 'filled',
    size = 'md',
    label = 'Button',
    IconSource,
    iconPosition = 'none',
    IconLoadingSource,
    iconLoadingPosition = 'none',
    loading = false,
    onClick,
    disabled = false,
  } = props
  const baseIcon = IconSource ? renderIcon(IconSource) : null
  const loadingIcon = IconLoadingSource ? renderIcon(IconLoadingSource) : null
  return (
    <button
      onClick={!disabled ? onClick : undefined}
      className={clsx(
        'button',
        `button-variant-${type}`,
        `button-size-${size}`,
        { 'button-disabled': disabled },
        {
          [`button-size-icon-${size}`]: IconSource && iconPosition == 'only',
        },
        {
          [`button-size-icon-${size}`]:
            IconLoadingSource && iconLoadingPosition == 'only',
        },
        {
          [`button-icon-${type}`]:
            (IconSource && iconPosition == 'only') || 'left' || 'right',
        },
        {
          [`button-icon-${type}`]:
            (IconLoadingSource && iconLoadingPosition == 'only') ||
            'left' ||
            'right',
        },
      )}
      style={{
        display: 'flex',
        flexDirection:
          iconPosition === 'right' || iconLoadingPosition === 'right'
            ? 'row-reverse'
            : 'row',
      }}
    >
      <div className={clsx(`button-container-${iconPosition}-${size}`)}>
        {loading
          ? IconLoadingSource &&
            iconLoadingPosition != 'none' && <Image src={loadingIcon} alt="" />
          : IconSource &&
            iconPosition != 'none' && <Image src={baseIcon} alt="" />}
      </div>
      {iconPosition != 'only' && iconLoadingPosition != 'only' && label}
    </button>
  )
}
