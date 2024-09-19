import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import projectConfig from './project-config';
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
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: 'dist/react',

      /**
       * SUPER HACKY... /)
       * stencil decided to step away from extensinve configs
       * for the components and defineCustomElements import
       * for the generated wrapper.
       *
       * Theyr approach is working if you work in a monorepo,
       * so you can save the wrapper in the Dir of the consuming
       * app.
       *
       * If you want an independent component library (saving the
       * wrapper to the dist folder) not sitting
       * next to the consumer app, this approach does not work
       * since you'll have the stencil library name as a starting
       * segment in the import of the components.
       */
      stencilPackageName: '../..',
    }),
    {
      type: 'docs-readme',
    },
    {
      serviceWorker: null,
      type: 'www',
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/variables.scss',
        'src/styles/functions.scss',
        'src/styles/mediaqueries.scss',
        'src/styles/utilities.scss',
      ],
    }),
  ],
  rollupPlugins: {
    before: [eventSync('components')],
  },
  testing: {
    browserHeadless: 'new',
    roots: ['<rootDir>/src'],
  },
};
