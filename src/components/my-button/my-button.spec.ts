import { newSpecPage } from '@stencil/core/testing';
import { MyButton } from './my-button';

describe('my-button', () => {
  it('renders', async () => {
    const {
      root,
    } = await newSpecPage({
      components: [MyButton],
      html: '<my-button first-name="foo"></my-button>',
    });

    expect(root)
      .toEqualHtml(`
        <my-button first-name="foo">
          <mock:shadow-root>
            <div class="wrapper">
              <p class="greeting">Hello, World! I'm <span class="name">foo</span></p>
              <button class="button primary">Button</button>
            </div>
          </mock:shadow-root>
        </my-button>
      `);
  });
});
