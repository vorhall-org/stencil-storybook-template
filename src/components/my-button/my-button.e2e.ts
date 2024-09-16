import { newE2EPage } from '@stencil/core/testing';

describe('my-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-button></my-button>');
    const element = await page.find('my-button');

    expect(element)
      .toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-button></my-button>');
    const component = await page.find('my-button');
    const element = await page.find('my-button >>> div p.greeting');

    expect(element.textContent)
      .toEqual('Hello, World! I\'m ');

    component.setProperty('firstName', 'James');
    await page.waitForChanges();
    expect(element.textContent)
      .toEqual('Hello, World! I\'m James');
  });
});
