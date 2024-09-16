import { newSpecPage } from '@stencil/core/testing';
import { __nameUpperCase__ } from './__name__';

describe('__name__', () => {
  it('renders with values', async () => {
    const {
      root,
    } = await newSpecPage({
      components: [__nameUpperCase__],
      html: '<__name__ foo="bar"></__name__>',
    });

    expect(root)
      .toEqualHtml(`
        <__name__ foo="bar">
          <mock:shadow-root>
            <div>
              Component with param bar
            </div>
          </mock:shadow-root>
        </__name__>
      `);
  });
});
