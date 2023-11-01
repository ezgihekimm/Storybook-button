import clsx from 'clsx'
import './text.scss'

interface TextProps {
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
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  heading?: boolean
  children?: React.ReactNode
}

export const Text = (props: TextProps) => {
  const { size = 'base', weight = 'normal', heading = false, children } = props

  return (
    <div
      className={clsx(
        'typography',
        `tw-text-${size}`,
        `tw-font-${heading ? 'bold' : weight}`,
        heading ? 'font-local' : 'font-archivo',
      )}
    >
      {children}
    </div>
  )
}
