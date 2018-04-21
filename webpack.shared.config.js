'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alias = exports.extentions = exports.output = exports.rules = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rules = [{
  enforce: 'pre',
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'eslint-loader',
  options: {
    // eslint options (the build will fail if there are any errors or warnings)
    failOnWarning: true,
    failOnError: true
  }
}, {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      plugins: ['react-hot-loader/babel', 'transform-flow-comments', 'transform-object-rest-spread'],
      presets: ['react', ['env', {
        'targets': {
          'browserlist': ['>2%', 'last 2 versions']
        },
        modules: false
      }]]
    }
  }
}]; // Non env specific Webpack settings


var output = {
  filename: '[name].bundle.js',
  path: _path2.default.resolve(__dirname, 'dist'),
  publicPath: '/'
};

var alias = {
  // Create aliases to import or require certain modules more easily. For example:
  // Components: path.resolve(__dirname, 'src/components/')
};

var extentions = ['.js', '.jsx', '.scss'];

exports.rules = rules;
exports.output = output;
exports.extentions = extentions;
exports.alias = alias;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(rules, 'rules', 'webpack-src/webpack.shared.config.js');

  __REACT_HOT_LOADER__.register(output, 'output', 'webpack-src/webpack.shared.config.js');

  __REACT_HOT_LOADER__.register(alias, 'alias', 'webpack-src/webpack.shared.config.js');

  __REACT_HOT_LOADER__.register(extentions, 'extentions', 'webpack-src/webpack.shared.config.js');
}();

;