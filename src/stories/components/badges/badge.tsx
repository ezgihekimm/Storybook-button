import { BadgeType } from '@/lib/types'
import clsx from 'clsx'
import './badge.scss'

export default interface BadgeProps {
  children?: React.ReactNode
  type?: BadgeType
}

export const Badge = (props: BadgeProps) => {
  const { children, type } = props
  return <div className={clsx(`badge badge-${type}`)}>{children}</div>
}
