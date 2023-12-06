import type { Preview } from '@storybook/react'

import { withThemeByClassName } from '@storybook/addon-styling'

import '../src/app/globals.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
  // Add the getTheme function to access the current theme
  // in the story's parameters.
}

export default preview
