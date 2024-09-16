import { newSpecPage } from '@stencil/core/testing';
import { MyButton } from './my-button';

describe('my-button', () => {
  it('renders', async () => {
    const {
      root,
    } = await newSpecPage({
      components: [MyButton],
      html: '<my-button></my-button>',
    });

    expect(root)
      .toEqualHtml(`
        <my-button>
          <mock:shadow-root>
            <div class="wrapper">
              <p class="greeting">Hello, World! I'm <span class="name"></span></p>
              <button class="primary">Button</button>
            </div>
          </mock:shadow-root>
        </my-button>
      `);
  });

  it('renders with values', async () => {
    const {
      root,
    } = await newSpecPage({
      components: [MyButton],
      html: '<my-button first-name="John"></my-button>',
    });

    expect(root)
      .toEqualHtml(`
        <my-button first-name="John">
          <mock:shadow-root>
            <div class="wrapper">
              <p class="greeting">
                Hello, World! I'm
                <span class="name">
                  John
                </span>
              </p>
              <button class="primary">Button</button>
            </div>
          </mock:shadow-root>
        </my-button>
      `);
  });
});
