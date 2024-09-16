// @ts-expect-error: File could not be found
import readme from './readme.md?raw';
import { withActions } from '@storybook/addon-actions/decorator';
import type {
  ArgTypes,
  Decorator,
  Meta,
  StoryObj,
} from '@storybook/web-components';
import { JSX as customJSX } from '../../components';
import { __nameUpperCase__ } from './__name__';

/* ------------------------------------------------------ */
/* Storytype */
/* ------------------------------------------------------ */

type Story = StoryObj<__nameUpperCase__> & { args: customJSX.__nameUpperCase__ };

/* ------------------------------------------------------ */
/* ArgTypes & Args */
/* ------------------------------------------------------ */

const argTypes: ArgTypes = {};
const defaultArgs: customJSX.__nameUpperCase__ = {
  foo: 'bar',
};

/* ------------------------------------------------------ */
/* Meta */
/* ------------------------------------------------------ */

const meta: Meta = {
  argTypes,
  args: defaultArgs,
  component: '__name__',
  decorators: [withActions as Decorator],
  parameters: {
    actions: {},
    docs: {
      extractComponentDescription: (): any => readme,
    },
  },
  tags: ['autodocs'],
  title: '__nameUpperCase__',
};

export default meta;

/* ------------------------------------------------------ */
/* Stories */
/* ------------------------------------------------------ */

export const primary: Story = {
  args: defaultArgs,
};
