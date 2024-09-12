const projectConfig = {

  /**
   * If you generate components via the npm script, we always check if you
   * provided the correct component prefix for your new component.
   * Additionally, we make sure to only scan your components for event-names
   * by using this prefix.
   * Example: if you want to name your components `my-button`, then
   * your prefix is `my`.
   */
  componentPrefix: 'my',

  /**
   * This will become your namespace in the stencil config and serve as the
   * namespace for the build artifacts in the dist folder.
   */
  namespace: 'vorhall',
};

/**
 * Wrapper to support CommonJS and ESM
 * (... unfortunately, we need to use both)
 */

/* eslint-disable */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function () {
  return projectConfig;
}));
/* eslint-enable */
