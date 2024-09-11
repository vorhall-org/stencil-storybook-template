/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
};

export default config;
