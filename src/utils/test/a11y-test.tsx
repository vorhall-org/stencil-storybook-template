import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';
import Axe from '@axe-core/playwright';

export default (elem :string): void => {
  test('should not have any detectable a11y issues', async ({
    page,
  }) => {
    const accessibilityScanResults = await new Axe({
      page,
    })
      .include(elem)
      .analyze();

    expect(accessibilityScanResults.violations)
      .toEqual([]);
  });
};
