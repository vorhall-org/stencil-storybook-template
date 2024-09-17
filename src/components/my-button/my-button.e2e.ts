import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';
import a11y from '../../utils/test/a11y-test';
import events from './my-button.events';

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
      .spyOnEvent(events.clicked);

    await component.getByTestId('button')
      .click();

    await expect(spy)
      .toHaveReceivedEvent();
  });

  a11y('my-button');
});
