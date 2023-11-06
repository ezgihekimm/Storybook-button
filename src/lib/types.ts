/* eslint-disable prettier/prettier */

import academicCap from '@/stories/assets/iconSet/academic-cap.svg'
import adjustmnetsHorizontal from '@/stories/assets/iconSet/adjustments-horizontal.svg'
import archiveBoxXMark from '@/stories/assets/iconSet/archive-box-x-mark.svg'
import arrowDownLeft from '@/stories/assets/iconSet/arrow-down-left.svg'
import arrowDownRight from '@/stories/assets/iconSet/arrow-down-right.svg'
import arrowDownTray from '@/stories/assets/iconSet/arrow-down-tray.svg'
import arrowDown from '@/stories/assets/iconSet/arrow-down.svg'
import arrowLeft from '@/stories/assets/iconSet/arrow-left.svg'
import arrowLongDown from '@/stories/assets/iconSet/arrow-long-down.svg'
import arrowPath from '@/stories/assets/iconSet/arrow-path.svg'
import arrowRightOnRectangle from '@/stories/assets/iconSet/arrow-right-on-rectangle.svg'
import arrowRight from '@/stories/assets/iconSet/arrow-right.svg'
import arrowTopRightOnSquare from '@/stories/assets/iconSet/arrow-top-right-on-square.svg'
import arrowUpOnSquare from '@/stories/assets/iconSet/arrow-up-on-square.svg'
import arrowUpRight from '@/stories/assets/iconSet/arrow-up-right.svg'
import arrowUpTray from '@/stories/assets/iconSet/arrow-up-tray.svg'
import arrowUp from '@/stories/assets/iconSet/arrow-up.svg'
import loading from '@/stories/assets/iconSet/loading.svg'
import paperAirplane from '@/stories/assets/iconSet/paper-airplane.svg'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ButtonType = 'filled' | 'outline' | 'pill' | 'link'
export type Position = 'left' | 'right' | 'none' | 'only'
export type TextSize =
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
export type Weight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'

export type IconType =
  | 'academicCap'
  | 'adjustmnetsHorizontal'
  | 'archiveBoxXMark'
  | 'arrowDownLeft'
  | 'arrowDownRight'
  | 'arrowDownTray'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowLongDown'
  | 'arrowPath'
  | 'arrowRightOnRectangle'
  | 'arrowRight'
  | 'arrowTopRightOnSquare'
  | 'arrowUpOnSquare'
  | 'arrowUpRight'
  | 'arrowUpTray'
  | 'arrowUp'
  | 'paperAirplane'
  | 'loading'

const iconMap: Record<IconType, any> = {
  academicCap,
  adjustmnetsHorizontal,
  archiveBoxXMark,
  arrowDownLeft,
  arrowDownRight,
  arrowDownTray,
  arrowDown,
  arrowLeft,
  arrowLongDown,
  arrowPath,
  arrowRightOnRectangle,
  arrowRight,
  arrowTopRightOnSquare,
  arrowUpOnSquare,
  arrowUpRight,
  arrowUpTray,
  arrowUp,
  paperAirplane,
  loading,
}
export function renderIcon(iconType: IconType) {
  if (iconMap[iconType]) {
    return iconMap[iconType]
  } else {
    throw new Error(`Icon not found for type: ${iconType}`)
  }
}
