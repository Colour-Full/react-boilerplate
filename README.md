## Technologies used

Unit Testing: Jest for snapshots Enzyme for shallow rendering. Start with 'npm run test:module'   

Integration testing: Puppeteer running on it's on or as part of Jest and Enzyme test. Start with 'npm run test:integration'

Run all tests: 'npm test'

Http calls: 
* use fetch. 
* Mock `fetch` calls for integration testing. Investigate declarative file based api responses.
* generate correlation ID and include as X-Request-Id header

Type checking: Flow - integrated as part of the webpack build script. If there are any errors the bundle will not compile

Linting: eslint2016 - also integrated as part of the webpack build script, linting errors will not allow the bundle to be compiled. At the moment we are using the 'JavaScript Standard Style' (https://standardjs.com/) with the additional rule to allow only const.

Code style: flow type annotations, eslint, single quotes, indent 2 spaces, import not require,
await async, no promise chains. Prefer es6 syntax.

config for vscode belongs here. The below will replace tabs with spaces, add emmet support for jsx and flow support after the installation of the Flow Language plugin:

```
{
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.detectIndentation": true,
    "emmet.syntaxProfiles": {
    "javascript": "jsx"
    },
    "emmet.showSuggestionsAsSnippets": true,
    "flow.useNPMPackagedFlow": true,
    "javascript.validate.enable": false,
}
```

Module aliasing: this is currently implemented both as part of webapck with the resolve.alias setting and natively in babel. We need to updated the setting in both webpack.config and babelrc to make sure we are getting similar results when building with webapck and through babel-cli. For now we are using only webpack but I am keeping the setup identical for babel if we decide to do some compiling through the babel-cli as well for some reason.

Logging: Looking at Winston with integration for Kibana

Env variable based configuration to configure web server. e.g. configurable web
service end points to hit different envrionments: dev, test, train, production, staging, ...

babel-env-preset: currently set to support last 2 versions of all browsers with more than 2% market share

styling technology: need to investigate: react-jss, styled-components, ... ?

rullion common ui: styles, themes, components, layouts, ...

we need a README.md to give new users documentation, links to tools

Dockerfile
ste to do

Jenkinsfile
ste to do



export default is the public API for module. Named exports for private methods for automated testing.

Components should normally be data containers or ui components.

investigate flux implementation (redux, rx-js, good support for async actions)
