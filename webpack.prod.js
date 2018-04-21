'use strict';

var _webpackSharedConfig = require('./webpack.shared.config.js');

var _uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

var _uglifyjsWebpackPlugin2 = _interopRequireDefault(_uglifyjsWebpackPlugin);

var _cleanWebpackPlugin = require('clean-webpack-plugin');

var _cleanWebpackPlugin2 = _interopRequireDefault(_cleanWebpackPlugin);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: _webpackSharedConfig.rules
  },
  devtool: 'source-map',
  plugins: [new _webpack2.default.optimize.ModuleConcatenationPlugin(), new _cleanWebpackPlugin2.default(['dist']), new _uglifyjsWebpackPlugin2.default({
    sourceMap: true
  }), new _webpack2.default.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }), new _webpack2.default.LoaderOptionsPlugin({ options: {} })],
  output: _webpackSharedConfig.output,
  resolve: {
    alias: _webpackSharedConfig.alias,
    extensions: _webpackSharedConfig.extentions
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;