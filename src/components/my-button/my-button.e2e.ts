import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.beforeEach(async ({
  page,
}) => {
  await page.setContent('<my-button first-name="bar"></my-button>');
});

test.describe('my-button', () => {
  test('should render the correct name', async ({
    page,
  }) => {
    const component = await page.locator('my-button');
    const greeting = await component.getByTestId('greeting');

    await expect(greeting)
      .toHaveText('Hello, World! I\'m bar');
  });

  test('should emitt event on button click', async ({
    page,
  }) => {
    const component = await page.locator('my-button');
    const spy = await page
      .spyOnEvent('my-button_button-clicked');

    await component.getByTestId('button')
      .click();

    await expect(spy)
      .toHaveReceivedEvent();
  });
});
