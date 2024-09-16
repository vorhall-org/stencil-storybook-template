import { newE2EPage } from '@stencil/core/testing';

describe('__name__', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<__name__></__name__>');
    const element = await page.find('__name__');

    expect(element)
      .toHaveClass('hydrated');
  });

  it('renders param value', async () => {
    const page = await newE2EPage();

    await page.setContent('<__name__ foo="bar"></__name__>');
    const element = await page.find('__name__ >>> div');

    expect(element.textContent)
      .toEqual('Component with param bar');
  });
});
