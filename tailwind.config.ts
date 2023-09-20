import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['var(--font-archivo)'],
      },
      colors: {
        'primary-blue-50': '#E2EDFE',
        'primary-blue-100': '#B3D1FE',
        'primary-blue-500': '#06F',
        'primary-blue-700': '#0056D4',
        'primary-dark-blue-500': '#25245C',
        'light-theme-300': '#F7F7F8',
        'light-theme-400': '#E7E9EE',
        'light-theme-600': '#A4AEC0',
      }
    },
  },
  plugins: [],
}
export default config
