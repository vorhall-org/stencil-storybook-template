import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { projectConfig } from './project-config';
import eventSync from './stencil-build-helpers/rollup/event-sync';

export const config: Config = {
  namespace: projectConfig.namespace,
  outputTargets: [
    {
      esmLoaderPath: '../loader',
      type: 'dist',
    },
    {
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      serviceWorker: null,
      type: 'www',
    },
  ],
  plugins: [sass()],
  rollupPlugins: {
    before: [eventSync('components')],
  },
  testing: {
    browserHeadless: 'new',
  },
};
