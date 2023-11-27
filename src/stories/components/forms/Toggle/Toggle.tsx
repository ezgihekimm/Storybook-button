import clsx from 'clsx'
import { useState } from 'react'
import './Toggle.scss'

export interface ToogleProps {
  label?: string
  disabled?: boolean
}

export const Toggle = (props: ToogleProps) => {
  const { label, disabled } = props
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {
    if (!disabled) {
      setIsChecked(!isChecked)
    }
  }

  return (
    <div className="flex items-center">
      <label className="switch">
        <input
          type="checkbox"
          disabled={disabled}
          checked={isChecked}
          onChange={handleToggle}
        />
        <span className="slider round"></span>
      </label>
      <span
        className={clsx(
          'ml-2',
          `${disabled ? 'text-neutral-600' : 'text-neutral-800'}`,
          { 'text-neutral-500': isChecked }, // Eğer checked ise line-through ekle
        )}
      >
        {label}
      </span>
    </div>
  )
}
