import clsx from 'clsx'
import './text.scss'

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
