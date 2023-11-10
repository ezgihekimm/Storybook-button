import ArrowDownLeft from ' ../../assets/IconSet/arrow-down-left.svg'
import AcademicCap from '../../assets/IconSet/academic-cap.svg'
import AdjustmentsHorizontal from '../../assets/IconSet/adjustments-horizontal.svg'
import ArchiveBoxXMark from '../../assets/IconSet/archive-box-x-mark.svg'
import ArrowDownRight from '../../assets/IconSet/arrow-down-right.svg'
import ArrowDownTray from '../../assets/IconSet/arrow-down-tray.svg'
import ArrowDown from '../../assets/IconSet/arrow-down.svg'
import ArrowLeft from '../../assets/IconSet/arrow-left.svg'
import ArrowLongDown from '../../assets/IconSet/arrow-long-down.svg'
import ArrowPath from '../../assets/IconSet/arrow-path.svg'
import ArrowRightOnRectangle from '../../assets/IconSet/arrow-right-on-rectangle.svg'
import ArrowRight from '../../assets/IconSet/arrow-right.svg'
import ArrowTopRightOnSquare from '../../assets/IconSet/arrow-top-right-on-square.svg'
import ArrowUpOnSquare from '../../assets/IconSet/arrow-up-on-square.svg'
import ArrowUpRight from '../../assets/IconSet/arrow-up-right.svg'
import ArrowUpTray from '../../assets/IconSet/arrow-up-tray.svg'
import ArrowUp from '../../assets/IconSet/arrow-up.svg'

export type IconType =
  | 'AcademicCap'
  | 'AdjustmentsHorizontal'
  | 'ArchiveBoxXMark'
  | 'ArrowDownLeft'
  | 'ArrowDownRight'
  | 'ArrowDownTray'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowLongDown'
  | 'ArrowPath'
  | 'ArrowRightOnRectangle'
  | 'ArrowRight'
  | 'ArrowTopRightOnSquare'
  | 'ArrowUpOnSquare'
  | 'ArrowUpRight'
  | 'ArrowUp'
  | 'ArrowUpTray'

export interface IconProps {
  type?: IconType
  width?: number
  height?: number
  className?: string
}

export const Icon: React.FC<IconProps> = (props) => {
  const { type, width, height, className } = props
  const Newicon = type ? iconMap[type] : null
  return Newicon ? (
    <Newicon width={width} height={height} className={className} />
  ) : null
}

const iconMap: Record<IconType, any> = {
  AcademicCap,
  AdjustmentsHorizontal,
  ArchiveBoxXMark,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowDownTray,
  ArrowDown,
  ArrowLeft,
  ArrowLongDown,
  ArrowPath,
  ArrowRightOnRectangle,
  ArrowRight,
  ArrowTopRightOnSquare,
  ArrowUpOnSquare,
  ArrowUpRight,
  ArrowUp,
  ArrowUpTray,
}

export default Icon
