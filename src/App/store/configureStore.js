// Use DefinePlugin (Webpack)
// together with Uglify to strip the dev branch in prod build
if (process.env.CONFIGURE_REACT_STORE === 'production') {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
// Opens DevTools in new window you need pop ups allowed in Chrome for this to work
}
