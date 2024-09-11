
// @ts-expect-error: File could not be found
import readme from './readme.md?raw';

export default {
  parameters: {
    docs: {
      extractComponentDescription: (): any => readme,
    },
  },
  tags: ['autodocs'],
  title: 'Components/MyComponent',
};

const template = (): any => '<my-component first="Stencil" last="\'Don\'t call me a framework\' JS"></my-component>';

export const example = template.bind({});
Example.args = {};
