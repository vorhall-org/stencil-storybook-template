import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.describe('__name__', () => {
  test('should render the correct name', async ({
    page,
  }) => {
    await page.setContent('<__name__ foo="bar"></__name__>');

    const component = await page.locator('__name__');

    await expect(component)
      .toHaveText('Component with param bar');
  });
});
