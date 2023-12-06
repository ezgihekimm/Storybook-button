import Commercial from '../../assets/LightCustom/commercial.svg'
import Individual from '../../assets/LightCustom/individual.svg'
import Kyc from '../../assets/LightCustom/kyc.svg'
import Oops from '../../assets/LightCustom/oops-illustration.svg'
import Preferences from '../../assets/LightCustom/preferences.svg'
import Referral from '../../assets/LightCustom/referral.svg'
import Security from '../../assets/LightCustom/security.svg'

import clsx from 'clsx'
import CommercialDark from '../../assets/DarkCustom/commercial.svg'
import IndividualDark from '../../assets/DarkCustom/individual.svg'
import KycDark from '../../assets/DarkCustom/kyc.svg'
import OopsDark from '../../assets/DarkCustom/oops-illustration.svg'
import PreferencesDark from '../../assets/DarkCustom/preferences.svg'
import ReferralDark from '../../assets/DarkCustom/referral.svg'
import SecurityDark from '../../assets/DarkCustom/security.svg'

export type CustomIconType =
  | 'Commercial'
  | 'Individual'
  | 'Kyc'
  | 'Oops'
  | 'Preferences'
  | 'Referral'
  | 'Security'

const customIconMap: {
  [key in CustomIconType]: {
    light: React.ComponentType<React.SVGProps<SVGSVGElement>>
    dark: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }
} = {
  Commercial: {
    light: Commercial,
    dark: CommercialDark,
  },

  Individual: {
    light: Individual,
    dark: IndividualDark,
  },

  Kyc: {
    light: Kyc,
    dark: KycDark,
  },

  Oops: {
    light: Oops,
    dark: OopsDark,
  },

  Preferences: {
    light: Preferences,
    dark: PreferencesDark,
  },

  Referral: {
    light: Referral,
    dark: ReferralDark,
  },

  Security: {
    light: Security,
    dark: SecurityDark,
  },
}

export interface CustomProps {
  type?: CustomIconType
  className?: string
  children?: React.ReactNode
}
export const CustomIcon: React.FC<CustomProps> = (props) => {
  const { type, className, children } = props
  const { light, dark } = type
    ? customIconMap[type]
    : { light: null, dark: null }

  const currentTheme = document.documentElement.classList.contains('dark')
    ? 'dark'
    : 'light'
  console.log(currentTheme)

  const IconComponent =
    currentTheme === 'dark' && dark
      ? dark
      : light ||
        (light as unknown as React.ComponentType<React.SVGProps<SVGSVGElement>>)

  return IconComponent ? (
    <IconComponent className={clsx(`${className}`)}>{children}</IconComponent>
  ) : null
}
