import clsx from 'clsx'
import { useState } from 'react'
import { Input } from '../Input/input'
import './Select.scss'

export interface SelectProps {
  placeholder?: string
  options?: string[]
  disabled?: boolean
}

export const SelectMenu = (props: SelectProps) => {
  const { placeholder, options, disabled } = props
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelect = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }
  const handleSelectOption = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className={clsx('select-box', `${disabled ? 'disabled' : ''}`)}>
      <button className="text-neutral-800" onClick={handleSelect}>
        <Input
          placeholder={placeholder}
          value={selectedOption}
          endIcon="ChevronDownSolid"
          icon
          disabled={disabled}
        />
      </button>

      {isOpen && (
        <div className="dropDown">
          {options?.map((option) => (
            <div
              key={option}
              className="dropDown-option"
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
