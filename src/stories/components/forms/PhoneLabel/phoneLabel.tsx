import { Input } from '../Input/input'
import { SelectMenu } from '../SelectMenu/Select'

export interface PhoneProps {
  options?: string[]
  placeholder?: string
}

export const PhoneLabel = (props: PhoneProps) => {
  const { options, placeholder } = props
  return (
    <div className="flex flex-row">
      <div className="mr-3 flex w-20">
        <SelectMenu options={options} />
      </div>
      <div className="w-[350px]">
        <Input placeholder={placeholder} />
      </div>
    </div>
  )
}
