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
    <div className="flex items-center">
      <input type={type} disabled={disabled} id="#check" className="checkbox" />
      <span className={clsx('label', `${disabled ? 'disabled' : ''}`)}>
        {label}
      </span>
    </div>
  )
}
