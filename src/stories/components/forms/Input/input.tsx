import clsx from 'clsx'
import { Icon, IconType } from '../../icon/icon'
import './input.scss'

export interface InputProps {
  placeholder?: string
  title?: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  optinal?: boolean
  optinalIcon?: IconType
  endIcon?: IconType
  icon?: boolean
  value?: string
}

export const Input = (props: InputProps) => {
  const {
    placeholder,
    title,
    disabled,
    error,
    errorMessage,
    optinal,
    optinalIcon,
    endIcon,
    icon,
    value,
  } = props
  return (
    <div className="input-box">
      <div className="flex flex-row items-center">
        {title && <p className="title">{title}</p>}
        {optinal && <Icon type={optinalIcon} color="neutral" size="sm" />}
      </div>
      <div
        className={clsx(
          'input-label',
          `${disabled ? 'disabled' : ''}`,
          `${error ? 'input-error' : ''}`,
          `${error ? 'custom-box-shadow' : ''}`,
        )}
      >
        <input
          placeholder={placeholder}
          value={value}
          className={clsx('w-full', `${disabled ? 'disabled:' : ''}`)}
          id="myInput"
          disabled={disabled}
        />
        {icon && <Icon type={endIcon} color="neutral" size="lg" />}
      </div>
      {error && <p className="error-text">{errorMessage}</p>}
    </div>
  )
}

export default Input
