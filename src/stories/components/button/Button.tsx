// SOLID, KISS, YAGNI, DRY
// 1. SOLID: Single Responsibility Principle
// 2. KISS: Keep It Simple Stupid
// 3. YAGNI: You Aren't Gonna Need It
// 4. DRY: Don't Repeat Yourself
// classnames
// Packages.json, package-lock.json

import React from 'react'

interface ButtonProps {
  type?: 'filled' | 'pill' | 'outline' | 'link'
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

export const Button = (props: ButtonProps) => {
  const {
    type = 'filled',
    size = 'md',
    label,
    IconSource,
    iconPosition = 'none',
    IconLoadingSource,
    iconLoadingPosition = 'none',
    loading = false,
    onClick,
    disabled = false,
  } = props

  // let BASE_CLASS = `font-archivo items-center ${
  //   disabled
  //     ? 'cursor-not-allowed bg-light-theme-400 text-light-theme-600'
  //     : 'cursor-pointer'
  // }`

  // let TYPE_CLASSES = ''
  // switch (type) {
  //   case 'filled':
  //     if (!disabled) {
  //       TYPE_CLASSES =
  //         'text-white bg-primary-blue-500 dark:bg-black dark:text-white hover:bg-primary-blue-700 focus:border-[3px] focus:border-primary-blue-100 focus:outline-0'
  //     }
  //     const FILLED_SIZE_CLASSES = {
  //       xs: 'rounded-lg',
  //       sm: 'rounded-lg',
  //       md: 'rounded-xl',
  //       lg: 'rounded-xl',
  //       xl: 'rounded-xl',
  //     }[size]

  //     TYPE_CLASSES = `${TYPE_CLASSES} ${FILLED_SIZE_CLASSES}`
  //     break

  //   case 'pill':
  //     if (!disabled) {
  //       TYPE_CLASSES =
  //         'text-white bg-primary-blue-500 dark:bg-black hover:bg-primary-blue-700 focus:border-[3px] focus:border-primary-blue-100 focus:outline-0'
  //     }

  //     TYPE_CLASSES = `${TYPE_CLASSES} rounded-full`
  //     break

  //   case 'outline':
  //     if (!disabled) {
  //       TYPE_CLASSES =
  //         'text-primary-dark-blue-500 bg-white border-[1px] border-light-theme-400 hover:bg-light-theme-300 focus:border-2 focus:border-primary-blue-100 focus:outline-0'
  //     }
  //     const OUTLINE_SIZE_CLASSES = {
  //       xs: 'rounded-lg',
  //       sm: 'rounded-lg',
  //       md: 'rounded-xl',
  //       lg: 'rounded-xl',
  //       xl: 'rounded-xl',
  //     }[size]

  //     TYPE_CLASSES = `${TYPE_CLASSES} ${OUTLINE_SIZE_CLASSES}`
  //     break

  //   case 'link':
  //     if (!disabled) {
  //       TYPE_CLASSES =
  //         'text-primary-blue-500 bg-white hover:bg-primary-blue-50 focus:border-2 focus:border-primary-blue-100 focus:outline-0'
  //     }
  //     const LINK_SIZE_CLASSES = {
  //       xs: 'rounded-lg',
  //       sm: 'rounded-lg',
  //       md: 'rounded-xl',
  //       lg: 'rounded-xl',
  //       xl: 'rounded-xl',
  //     }[size]

  //     TYPE_CLASSES = `${TYPE_CLASSES} ${LINK_SIZE_CLASSES}`
  //     break
  //   default:
  //     break
  // }

  // let SIZE_CLASSES = ''
  // if (IconSource && iconPosition == 'only') {
  //   SIZE_CLASSES = {
  //     xs: 'p-2',
  //     sm: 'p-[10px]',
  //     md: 'p-2',
  //     lg: 'p-3',
  //     xl: 'p-[14px]',
  //   }[size]
  // } else {
  //   SIZE_CLASSES = {
  //     xs: 'px-3 py-2 text-xs',
  //     sm: 'px-3 py-2 text-sm',
  //     md: 'px-[20px] py-[10px] text-base',
  //     lg: 'px-[20px] py-3 text-lg',
  //     xl: 'px-6 py-[14px] text-xl',
  //   }[size]
  // }

  // ICON
  // let ICON_CLASSES = ''
  // if (disabled) {
  //   ICON_CLASSES = `${ICON_CLASSES} fill-light-theme-400`
  // } else {
  //   switch (type) {
  //     case 'filled':
  //       ICON_CLASSES = `${ICON_CLASSES} fill-white`
  //       break
  //     case 'pill':
  //       ICON_CLASSES = `${ICON_CLASSES} fill-white`
  //       break
  //     case 'outline':
  //       ICON_CLASSES = `${ICON_CLASSES} fill-primary-dark-blue-500`
  //       break
  //     case 'link':
  //       ICON_CLASSES = `${ICON_CLASSES} fill-primary-blue-500`
  //       break
  //     default:
  //       break
  //   }
  // }
  // let ICON_CONTAINER_CLASSES = ''
  // switch (iconPosition) {
  //   case 'left':
  //     BASE_CLASS = `${BASE_CLASS} flex flex-row`
  //     switch (size) {
  //       case 'xs':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} mr-2 w-3 h-3`
  //         break
  //       case 'sm':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} mr-2 w-4 h-4`
  //         break
  //       case 'md':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} mr-3  w-[18px] h-[18px]`
  //         break
  //       case 'lg':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} mr-3 w-[24px] h-[24px]`
  //         break
  //       case 'xl':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} mr-3 w-[24px] h-[24px]`
  //         break
  //       default:
  //         break
  //     }
  //     break
  //   case 'right':
  //     BASE_CLASS = `${BASE_CLASS} flex flex-row-reverse`
  //     switch (size) {
  //       case 'xs':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} ml-2 w-3 h-3`
  //         break
  //       case 'sm':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} ml-2 w-4 h-4`
  //         break
  //       case 'md':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} ml-3  w-[18px] h-[18px]`
  //         break
  //       case 'lg':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} ml-3 w-[24px] h-[24px]`
  //         break
  //       case 'xl':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} ml-3 w-[24px] h-[24px]`
  //         break
  //       default:
  //         break
  //     }
  //     break
  //   case 'only':
  //     switch (size) {
  //       case 'xs':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} w-3 h-3`
  //         break
  //       case 'sm':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} w-4 h-4`
  //         break
  //       case 'md':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} w-[20px] h-[20px]`
  //         break
  //       case 'lg':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} w-6 h-6`
  //         break
  //       case 'xl':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} w-6 h-6`
  //         break
  //       default:
  //         break
  //     }
  //   default:
  //     break
  // }
  //LOADING
  // let LOADING_CLASSES = ''
  // if (disabled) {
  //   LOADING_CLASSES = `${LOADING_CLASSES} fill-light-theme-400`
  // } else {
  //   switch (type) {
  //     case 'filled':
  //       LOADING_CLASSES = `${LOADING_CLASSES} fill-white`
  //       break
  //     case 'pill':
  //       LOADING_CLASSES = `${LOADING_CLASSES} fill-white`
  //       break
  //     case 'outline':
  //       LOADING_CLASSES = `${LOADING_CLASSES} fill-primary-dark-blue-500`
  //       break
  //     case 'link':
  //       LOADING_CLASSES = `${LOADING_CLASSES} fill-primary-blue-500`
  //       break
  //     default:
  //       break
  //   }
  // }
  // let LOADING_CONTAINER_CLASSES = ''
  // switch (iconLoadingPosition) {
  //   case 'left':
  //     BASE_CLASS = `${BASE_CLASS} flex flex-row`
  //     switch (size) {
  //       case 'xs':
  //         LOADING_CONTAINER_CLASSES = `${LOADING_CONTAINER_CLASSES} mr-2 w-3 h-3`
  //         break
  //       case 'sm':
  //         LOADING_CONTAINER_CLASSES = `${LOADING_CONTAINER_CLASSES} mr-2 w-4 h-4`
  //         break
  //       case 'md':
  //         LOADING_CONTAINER_CLASSES = `${LOADING_CONTAINER_CLASSES} mr-3  w-[18px] h-[18px]`
  //         break
  //       case 'lg':
  //         LOADING_CONTAINER_CLASSES = `${LOADING_CONTAINER_CLASSES} mr-3 w-[24px] h-[24px]`
  //         break
  //       case 'xl':
  //         LOADING_CONTAINER_CLASSES = `${LOADING_CONTAINER_CLASSES} mr-3 w-[24px] h-[24px]`
  //         break
  //       default:
  //         break
  //     }
  //     break
  //   case 'right':
  //     BASE_CLASS = `${BASE_CLASS} flex flex-row-reverse`
  //     switch (size) {
  //       case 'xs':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} ml-2 w-3 h-3`
  //         break
  //       case 'sm':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} ml-2 w-4 h-4`
  //         break
  //       case 'md':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} ml-3  w-[18px] h-[18px]`
  //         break
  //       case 'lg':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} ml-3 w-[24px] h-[24px]`
  //         break
  //       case 'xl':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} ml-3 w-[24px] h-[24px]`
  //         break
  //       default:
  //         break
  //     }
  //     break
  //   case 'only':
  //     switch (size) {
  //       case 'xs':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} w-3 h-3`
  //         break
  //       case 'sm':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} w-4 h-4`
  //         break
  //       case 'md':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} w-[20px] h-[20px]`
  //         break
  //       case 'lg':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} w-6 h-6`
  //         break
  //       case 'xl':
  //         ICON_CONTAINER_CLASSES = `${ICON_CONTAINER_CLASSES} w-6 h-6`
  //         break
  //       default:
  //         break
  //     }
  //   default:
  //     break
  // }
  return (
    <button
    // onClick={onClick}
    // className={`${BASE_CLASS} ${TYPE_CLASSES} ${SIZE_CLASSES}`}
    ></button>
  )
}
