import type { StorybookConfig } from '@storybook/nextjs'

const {
  patchWebpackConfig,
} = require('storybook-addon-live-examples/dist/cjs/utils')

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook-addon-live-examples',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
    'storybook-addon-sass-postcss',
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        loadSassAfterPostCSS: true,
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
        sassLoaderOptions: {
          implementation: require('sass'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {},
  webpackFinal: (config) => {
    patchWebpackConfig(config)

    return config
  },
}
export default config
