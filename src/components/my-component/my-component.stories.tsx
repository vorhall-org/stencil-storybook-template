
// @ts-expect-error: File could not be found
import readme from './readme.md?raw';
// import { withActions } from '@storybook/addon-actions/decorator';
// import type { Decorator } from '@storybook/web-components';
// import { JSX } from '@stencil/core';
// import { html } from 'lit-html';

export default {
  // component: 'my-component',
  // decorators: [withActions as Decorator],
  parameters: {
    docs: {
     extractComponentDescription: (): any => readme,
    },
  },
  tags: ['autodocs'],
  title: 'Components/MyComponent',
};

const Template = () => `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`

export const Example = Template.bind({});
Example.args = {};

/*
export const Primary = {
  render: (args): JSX.Element => html`
    <my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
  `,
};
*/