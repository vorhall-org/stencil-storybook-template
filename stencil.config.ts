import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'postauto',
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
  testing: {
    browserHeadless: 'new',
  },
};
