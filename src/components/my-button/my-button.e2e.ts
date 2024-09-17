import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.describe('my-button', () => {
  test('should render the correct name', async ({
    page,
  }) => {
    await page.setContent('<my-button first-name="bar"></my-button>');

    const component = await page.locator('my-button');

    await expect(component)
      .toHaveText('Hello, World! I\'m barButton');
  });
});
