## start script verbosity

the start script looks rather verbose. storybook imports the components bundle from the www directory. for the first run, we need to make sure that the www directory is present, otherwise storybook will throw an error that it could not import the bundle. this is why the start script is first doing a stencil build before kicking of a parallel task of running stencil and storybook.
