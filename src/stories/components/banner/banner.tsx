import Academy from '../../assets/Banner/Academy.svg'
import FiyatDeposit from '../../assets/Banner/FiyatDeposit.svg'
import LowFee from '../../assets/Banner/LowFee.svg'
import Markets from '../../assets/Banner/Markets.svg'
import Notification from '../../assets/Banner/Notification.svg'
import Security from '../../assets/Banner/Security.svg'
import Support from '../../assets/Banner/Support.svg'
import Trade from '../../assets/Banner/Trade.svg'

export type BannerType =
  | 'Academy'
  | 'FiyatDeposit'
  | 'LowFee'
  | 'Markets'
  | 'Notification'
  | 'Security'
  | 'Support'
  | 'Trade'

const bannerMap: {
  [key in BannerType]: React.ComponentType<React.SVGProps<SVGSVGElement>>
} = {
  Academy: Academy,
  FiyatDeposit: FiyatDeposit,
  LowFee: LowFee,
  Markets: Markets,
  Notification: Notification,
  Security: Security,
  Support: Support,
  Trade: Trade,
}

export interface BannerProps {
  type?: BannerType
  className?: string
  children?: React.ReactNode
}

export const Banner: React.FC<BannerProps> = (props) => {
  const { type, className, children } = props
  const NewBanner = type ? bannerMap[type] : null
  return NewBanner ? (
    <NewBanner className={className}>{children}</NewBanner>
  ) : null
}

export default Banner
