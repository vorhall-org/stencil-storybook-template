/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(?:background|color)$/iu,
        date: /Date$/iu,
      },
    },
  },
};

export default preview;
