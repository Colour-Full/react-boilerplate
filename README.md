## React Boilerplate

This is a react-redux boilerplate for building SPA's. The boilerplate is aimed at building the client side part of micro services or the front end of a headless CMS.

The boilerplate provides all the tools necessary for bundling your code, type checking, setting up a server, unit integration and end to end testing.

## Installing

Please make sure you have `npm` and `yarn` installed and clone/download the repo from github and then run

```sh
yarn
```
## Using

```sh
yarn start
```

This will start the server. By default the server is set to run in non hod-modules-reload mode. For development you will need to set the `HOT_MODULES=true` global environment. You can do that in the env.server file or directly from the command line:

```sh
HOT_MODULES=true yarn start
```

## Bundling - Webpack

The boilerplate uses the `spa-webpack` module for setting up and configure webpack. Checkout the [module repo](https://github.com/Colour-Full/spa-webpack) for more information.

To generate the webpack config files just run `yarn setup-webpack-config`

### Why we are using a separate module instead of providing Webpack as part of the boilerplate?

The   main reason is consistency. If you are working on multiple projects/services simultaneously you want to have the same version of Webpack and it's plugins across all of them. Saving time by not worrying about configuring Webpack every single time, also helps.

### My project needs a specific plugin that is not provided as part of the webpack module

That's fine you are free to modify/update the webpack config if needed. Just make sure to document any differences with the `spa-webpack` module. If you need those updated across multiple projects, I will suggest to clone the `spa-webpack` module and make your own updated version of it.

### I dont like/want to use the spa-webpack module

No offense taken, everyone needs are different so if you dont want to use the module you are free to not do it. The configuration provided by the module is pretty standard so you should be able to still use the boilerplate as long as your custom configuration matches the paths used.

## Styles
At the moment the boilerplate does not provide css support since it is intended to be used with [styled components](https://www.styled-components.com/). However I am planing to update the `spa-webpack` module with css/sass support.

## Redux Dev Tools

The boilerplate support Redux Dev Tools. They are turned `off` by default, to use them you will need to set the `OPEN_REDUX_DEV_TOOLS` global environment. To do that you will need to add the following line to `plugins` in your webpack.dev.js file:

```js
    new webpack.DefinePlugin({
      'process.env.OPEN_REDUX_DEV_TOOLS': JSON.stringify('false')
    })
```


## Server - koa.js

This is a client-side service boilerplate so all back-end functionality is provided as a separate module. We provide koa js server as part of the dependencies in the package.js.  Please check out the [module repository](https://github.com/Colour-Full/koa-server) for more info.


## Linting

Code style is a touchy subject in every dev team. The boilerplate uses the ["JavaScript Standard Style"](https://standardjs.com/) (no semicolons, sorry)  and some specific settings to support Flow. You are free to completely override them or tweak them however you like. 


## Flow Type

The boilerplate comes with Flow Type support for static typing


#### Lint/Flow Note 
If you are using the config provided with the boilerplate, every linting/flow error will prevent Webpack to bundle your code. This might sound very annoying but I believe it imposes good coding practices and make it harder for errors to slip through in production.

## Testing

### Unit tests

The boilerplate comes with Jest and Enzyme support out of the box for unit testing.
To run your test:

```sh
yarn test:unit
```

### End To End tests

The boilerplate provides you with Puppeteer environment for writing an end to end tests.
TODO - at the moment there is no end to end test written for the demo To Do app

To run the full test suit simply:

```sh
yarn test
```

## Example To-Do App

The boilerplate comes with a To-Do App example. This follows the example given at the redux website but with few additions:

- all components are Flow Typed
- there are unit test examples
- TODO - write an end to end test examples

The demo app is built with the [Atlass Kit Components](https://atlaskit.atlassian.com/). The Atlass Kit is a great example of how to build a design system and the react components to support it.

### File structure

Some reasoning behind the file structure used in the To Do example. The demo app use [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) plugin, this can help with writing shorter and more readable import paths as well as better organising your project. The idea here is to organize your folders by function and treat them similarly to npm modules. You should be able to remove a "functional component module" easily with minimal changes to the main `App` code.
The component itself is usually composed of three folders
```
.
|----- api    # This folder holds your actions, reducers and any other related code
|----- components   # React functional stateless(dumb) components
|----- containers # React components aware of `state`
|_index.js  # File with all your exports available to the `App`
```

And of course, each folder containing their co-responding __tests__ folders.

Coming soon - I am working on a version of the To-Do App build with the [Material-UI](https://material-ui.com/) library. I will also introduce some asynchronous data fetching so there can be some demonstration of using redux-thunks in the project.


## Docker

The boilerplate comes with a Dockerfile that can be used to build an image for development purposes. Please note that this is not intended to be used in production and it should be used to run the full app in container for dev use.
