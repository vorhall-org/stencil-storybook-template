# stencil-storybook-template

A a template for building webcomponents with stencil, including storybok.

- Write components and stories in typescript
- Fully compatible with live-reloading / HMR

## Configurations

Since this is a template, you should adapt the `project-config.js`. See
that file for more information.

## Installation

Use the node version specified in `.nvmrc`. Then do:

```
npm install
```

## Start the project

To start the dev environment, use:

```
npm start
```

This will run the stencil dev task and the storybook task in parallel and open storybook in your browser.

!! Important !!

The `start` script will launch 2 npm scripts in the background. So if you want to exit the `start` script, you need to exit the task twice.

### Start script verbosity

The start script looks rather verbose. storybook imports the components bundle from the www directory. For the first run, we need to make sure that the www directory is present, otherwise storybook will throw an error that it could not import the bundle. This is why the start script is first doing a stencil build before kicking of a parallel task of running stencil and storybook.

## Linting

The linting script is automatically executed when you use `git commit` (via pre-commit hook). For convenience, make sure you have eslint and stylelint configured in your code editor.

To run the linting task manually, run the command:

```
npm run lint
```

To run lint for styles or eslint separately, use these commands:

```
npm run lint:styles
```

```
npm run lint:es
```


## Testing

To run e2e and unit tests, run the command

```
npm test
```

### Testing issues

Sometimes, puppeteer may just log out a `JSHandle@error`, and you're left with no idea about what the issue could be. To get a more verbose log message in such situations, add the following listener to the e2e page:
```javascript
page.on('console', async msg => {
	const args = await msg.args();

	args.forEach(async (arg) => {
		const val = await arg.jsonValue();

		if (JSON.stringify(val) !== JSON.stringify({})) {
			console.log(val)
		} else {
			const { type, subtype, description } = arg._remoteObject

			console.log(`type: ${type}, subtype: ${subtype}, description:\n ${description}`)
		}
	})
});
```

## Extras

### Event name extraction

The project contains a custom build mechanism to extract event names from the components, which stores them in a separate file for every component. See `/stencil-build-helpers/rollup/event-sync.ts` for info.

### Generate new components

The project contains a custom boilerplate to bootsrap an new component. Use `npm run generate my-new-component` to create a new component with the name `my-new-component`.

## Production build

To create a production build, run
```
npm run stencil:prod
```

The production build artefacts are saved in the the folder `/dist/`.
