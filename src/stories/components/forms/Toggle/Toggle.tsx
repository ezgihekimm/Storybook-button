import clsx from 'clsx'
import './Toggle.scss'

export interface ToogleProps {
  label?: string
  disabled?: boolean
}

export const Toggle = (props: ToogleProps) => {
  const { label, disabled } = props
  return (
    <div className="flex items-center">
      <label className="switch">
        <input type="checkbox" disabled={disabled} />
        <span className="slider round"></span>
      </label>
      <span
        className={clsx(
          'ml-2',
          `${disabled ? 'text-neutral-600' : 'text-neutral-800'}`,
        )}
      >
        {label}
      </span>
    </div>
  )
}
