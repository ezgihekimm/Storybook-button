// SOLID, KISS, YAGNI, DRY
// 1. SOLID: Single Responsibility Principle
// 2. KISS: Keep It Simple Stupid
// 3. YAGNI: You Aren't Gonna Need It
// 4. DRY: Don't Repeat Yourself
// classnames
// Packages.json, package-lock.json

import clsx from 'clsx'
import './button.scss'

interface ButtonProps {
  type?: 'filled' | 'pill' | 'outline' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  label?: string
  IconSource?: React.ComponentType<{ classNames?: string }>
  iconPosition?: 'left' | 'right' | 'only' | 'none'
  IconLoadingSource?: React.ComponentType<{ classNames?: string }>
  iconLoadingPosition?: 'left' | 'right' | 'only' | 'none'
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

  return (
    console.log({ iconPosition, IconSource }),
    (
      <button
        onClick={onClick}
        className={clsx(
          'button',
          `button-variant-${type}-${size}`,
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
              iconLoadingPosition != 'none' && <IconLoadingSource />
            : IconSource && iconPosition != 'none' && <IconSource />}
        </div>
        {iconPosition != 'only' && iconLoadingPosition != 'only' && label}
      </button>
    )
  )
}
