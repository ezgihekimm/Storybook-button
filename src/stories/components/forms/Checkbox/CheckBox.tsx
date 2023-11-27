import clsx from 'clsx'
import './CheckBox.scss'

export interface CheckboxProps {
  label?: string
  disabled?: boolean
  type?: 'checkbox' | 'radio'
}

export const Checkbox = (props: CheckboxProps) => {
  const { label, disabled, type } = props
  return (
    <label className="flex items-center">
      <input type={type} disabled={disabled} className="checkbox h-4 w-4" />
      <span
        className={clsx(
          'ml-2',
          `${disabled ? 'text-neutral-600' : 'text-neutral-800'}`,
        )}
      >
        {label}
      </span>
    </label>
  )
}
