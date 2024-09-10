## start script verbosity

the start script looks rather verbose. storybook imports the components bundle from the www directory. for the first run, we need to make sure that the www directory is present, otherwise storybook will throw an error that it could not import the bundle. this is why the start script is first doing a stencil build before kicking of a parallel task of running stencil and storybook.


## Using this component

There are two strategies we recommend for using web components built with Stencil.

### Lazy Loading

If your Stencil project is built with the [`dist`](https://stenciljs.com/docs/distribution) output target, you can import a small bootstrap script that registers all components and allows you to load individual component scripts lazily.

For example, given your Stencil project namespace is called `my-design-system`, to use `my-component` on any website, inject this into your HTML:

```html
<script type="module" src="https://unpkg.com/my-design-system"></script>
<!--
To avoid unpkg.com redirects to the actual file, you can also directly import:
https://unpkg.com/foobar-design-system@0.0.1/dist/foobar-design-system/foobar-design-system.esm.js
-->
<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
```

This will only load the necessary scripts needed to render `<my-component />`. Once more components of this package are used, they will automatically be loaded lazily.

You can also import the script as part of your `node_modules` in your applications entry file:

```tsx
import 'foobar-design-system/dist/foobar-design-system/foobar-design-system.esm.js';
```

Check out this [Live Demo](https://stackblitz.com/edit/vitejs-vite-y6v26a?file=src%2Fmain.tsx).

### Standalone

If you are using a Stencil component library with `dist-custom-elements`, we recommend importing Stencil components individually in those files where they are needed.

To export Stencil components as standalone components make sure you have the [`dist-custom-elements`](https://stenciljs.com/docs/custom-elements) output target defined in your `stencil.config.ts`.

For example, given you'd like to use `<my-component />` as part of a React component, you can import the component directly via:

```tsx
import 'foobar-design-system/my-component';

function App() {
  return (
    <>
      <div>
        <my-component
          first="Stencil"
          last="'Don't call me a framework' JS"
        ></my-component>
      </div>
    </>
  );
}

export default App;
```

Check out this [Live Demo](https://stackblitz.com/edit/vitejs-vite-b6zuds?file=src%2FApp.tsx).