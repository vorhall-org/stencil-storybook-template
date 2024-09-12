interface IprojectConfig {
  componentPrefix: string,
  namespace: string,
}

export const projectConfig: IprojectConfig = {

  /**
   * If you generate components via the npm script, we always check if you
   * provided the correct component prefix for your new component.
   * Additionally, we make sure to only scan your components from event-names
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
