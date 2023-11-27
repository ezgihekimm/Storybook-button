import clsx from 'clsx'
import './input.scss'

export interface InputProps {
  placeholder?: string
  title?: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
}

export const Input = (props: InputProps) => {
  const { placeholder, title, disabled, error, errorMessage } = props
  return (
    <div className="input-box">
      {title && <p className="mb-1 text-sm text-neutral-800">{title}</p>}
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
          className={clsx('w-full', `${disabled ? 'disabled:' : ''}`)}
          id="myInput"
          disabled={disabled}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}
    </div>
  )
}

export default Input
