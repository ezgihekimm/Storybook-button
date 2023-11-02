interface ButtonProps {
  type?: 'filled' | 'pill' | 'outline' | 'link' | 'pillInstance'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  label?: string
  IconSource?: React.ComponentType<{ classNames?: string }>
  iconPosition?: 'left' | 'right' | 'only' | 'none'
  IconLoadingSource?: React.ComponentType<{ classNames?: string }>
  iconLoadingPosition?: 'left' | 'right' | 'only' | 'none'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}
interface HeaderProps {
  logo?: React.ComponentType<{ classNames?: string }>
  buttonText?: string
  dropDownText?: string
  searchBar?: boolean
  blueBox?: boolean
  blueBoxText?: string
  buttonClick?: () => void
  walletClick?: () => void
  bellClick?: () => void
  questionClick?: () => void
  userClick?: () => void
}
interface MenuProps {
  label?: string
  Source?: React.ComponentType<{ classNames?: string }>
  SourceActive?: React.ComponentType<{ classNames?: string }>
  actived?: boolean
}
interface SearchBarProps {
  placeholder?: string
  endLetter?: string
  startIcon?: React.ComponentType<{ classNames?: string }>
  endIcon?: React.ComponentType<{ classNames?: string }>
  onClick?: () => void
}
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
