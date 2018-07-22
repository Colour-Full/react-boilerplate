const path = require('path')
const {
  HtmlWebpackPlugin,
  UglifyJSPlugin,
  webpack
} = require('spa-webpack')
const {
  rules,
  output,
  extensions,
  alias,
  webpackCleanPlugin
} = require('./webpack.shared.config')

module.exports = {
  mode: 'production',
  entry: ['./src/index.js'],
  module: {
    rules: rules
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    webpackCleanPlugin,
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true
    }),
    new UglifyJSPlugin({
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env.CONFIGURE_REACT_STORE': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({ options: {} })
  ],
  output: output,
  resolve: {
    alias: alias,
    extensions: extensions
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules/spa-webpack/node_modules/'), 'node_modules']
  }
}
