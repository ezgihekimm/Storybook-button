import { TextSize, Weight } from '@/lib/types'
import clsx from 'clsx'
import './text.scss'
export default interface TextProps {
  textSize?: TextSize
  weight?: Weight
  heading?: boolean
  children?: React.ReactNode
}

export const Text = (props: TextProps) => {
  const {
    textSize = 'base',
    weight = 'normal',
    heading = false,
    children,
  } = props

  return (
    <div
      className={clsx(
        'typography',
        `tw-text-${textSize}`,
        `tw-font-${heading ? 'bold' : weight}`,
        heading ? 'font-local' : 'font-archivo',
      )}
    >
      {children}
    </div>
  )
}
