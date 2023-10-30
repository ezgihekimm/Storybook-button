import clsx from 'clsx'
import './size.scss'

interface SizeProps {
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
  label?: string
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  heading?: boolean
}

export const Size = (props: SizeProps) => {
  const {
    size = 'base',
    label = 'The quick brown fox jumps over the lazy dog.',
    weight = 'normal',
    heading = false,
  } = props

  return (
    <div
      className={clsx(
        'typography',
        `tw-text-${size}`,
        `tw-font-${heading ? 'bold' : weight}`,
        heading ? 'font-local' : 'font-archivo',
      )}
    >
      {label}
    </div>
  )
}
