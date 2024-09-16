// @ts-expect-error: File could not be found
import readme from './readme.md?raw';
import { withActions } from '@storybook/addon-actions/decorator';
import type {
  ArgTypes,
  Decorator,
  Meta,
  StoryObj,
} from '@storybook/web-components';
import events from './my-button.events';
import { JSX as customJSX } from '../../components';
import { JSX as stencilJSX } from '@stencil/core';
import { MyButton } from './my-button';

/* ------------------------------------------------------ */
/* Storytype */
/* ------------------------------------------------------ */

type Story = StoryObj<MyButton> & { args: customJSX.MyButton };

/* ------------------------------------------------------ */
/* ArgTypes & Args */
/* ------------------------------------------------------ */

const argTypes: ArgTypes = {
  foo: {
    control: {
      type: 'select',
    },
    options: [
      'primary',
      'secondary',
    ],
  },
  variant: {
    control: {
      type: 'select',
    },
    options: [
      'primary',
      'secondary',
    ],
  },
};

const defaultArgs: customJSX.MyButton = {
  firstName: 'Storybook',
  variant: 'primary',
};

/* ------------------------------------------------------ */
/* Meta */
/* ------------------------------------------------------ */

const meta: Meta = {
  argTypes,
  args: defaultArgs,
  component: 'my-button',
  decorators: [withActions as Decorator],
  parameters: {
    actions: {
      handles: [events.clicked],
    },
    docs: {
      extractComponentDescription: (): any => readme,
    },
  },
  tags: ['autodocs'],
  title: 'MyButton',
};

export default meta;

/* ------------------------------------------------------ */
/* Custom Render */
/* ------------------------------------------------------ */

const renderTemplate = (_args: customJSX.MyButton): stencilJSX.Element => `
  <my-button first-name="${_args.firstName}"></my-button>
 `;

/* ------------------------------------------------------ */
/* Stories */
/* ------------------------------------------------------ */

export const primary: Story = {
  args: defaultArgs,
};

export const secondary: Story = {
  args: {
    ...defaultArgs,
    firstName: 'the second Storybook',
    variant: 'secondary',
  },
};

export const customTemplateRender: Story = {
  args: {
    ...defaultArgs,
    firstName: 'the custom renderer',
  },
  render: (args: customJSX.MyButton): any => renderTemplate(args),
};
