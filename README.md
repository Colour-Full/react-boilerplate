## React Boilerplate

This is a react-redux boilerplate for building SPA's. The boilerplate is aimed at building the client side part of micro services or the front end of a headless CMS.

The boilerplate provides all the tools necessary for bundling your code, type checking, setting up a server, unit integration and end to end testing.

## Bundling - Webpack

The boilerplate uses the `spa-webpack` module for setting up and configure webpack. Checkout the module repo for more information.

To generate the webpack config files just run `yarn setup-webpack-config`

### Why we are using a separate module instead of providing Webpack as part of the boilerplate?

The   main reason is consistency. If you are working on multiple projects/services simultaneously you want to have the same version of Webpack and it's plugins across all of them. Saving time by not worrying about configuring Webpack every single time, also helps.

### My project needs a specific plugin that is not provided as part of the webpack module

That's fine you are free to modify/update the webpack config if needed. Just make sure to document any differences with the `spa-webpack` module. If you need those updated across multiple projects, I will suggest to clone the `spa-webpack` module and make your own updated version of it.

### I dont like/want to use the spa-webpack module

No offense take, everyone needs are different so if you dont want to use the module you are free to not do it. The configuration provided by the module is pretty standard so you should be able to still use the boilerplate as long as your custom configuration matches the paths used.

## Server - koa.js









