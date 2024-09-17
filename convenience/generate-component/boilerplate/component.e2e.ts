import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';
import a11y from '../../utils/test/a11y-test';

test.beforeEach(async ({
  page,
}) => {
  await page.setContent('<__name__ foo="bar"></__name__>');
});

test.describe('__name__', () => {
  test('should render attribute', async ({
    page,
  }) => {
    const component = await page.locator('__name__');
    const greeting = await component.getByTestId('greeting');

    await expect(greeting)
      .toHaveText('Component with param bar');
  });

  a11y('__name__');
});
