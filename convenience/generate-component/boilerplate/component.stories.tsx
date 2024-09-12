// @ts-expect-error: File could not be found
import readme from './readme.md?raw';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Decorator } from '@storybook/web-components';
// import events from './__name__.events';

const argTypes = {
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

export default {
  argTypes,
  component: '__name__',
  decorators: [withActions as Decorator],
  parameters: {
    actions: {
      // handles: [events.clicked],
    },
    docs: {
      extractComponentDescription: (): any => readme,
    },
  },
  tags: ['autodocs'],
  title: 'Components/__nameUpperCase__',
};

export const primary = {
  args: {
    label: 'button',
    variant: 'primary',
  },
};

export const secondary = {
  args: {
    ...primary.args,
    variant: 'secondary',
  },
};
