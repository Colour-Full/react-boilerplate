// Non env specific Webpack settings
const path = require('path')
const spaWebpack = require('spa-webpack')
const CleanWebpackPlugin = spaWebpack.CleanWebpackPlugin

const outputPath = process.env.OUTPUT_PATH || 'dist/public/'

const webpackCleanPlugin = new CleanWebpackPlugin(
  [
    path.resolve('./', outputPath)
  ], {
    root: path.resolve('./')
  })

const rules = [
  {
    enforce: 'pre',
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      // eslint options (the build will fail if there are any errors or warnings)
      failOnWarning: true,
      failOnError: true
    }
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [
          'react-hot-loader/babel',
          'transform-flow-comments',
          'transform-object-rest-spread'
        ],
        presets: [
          'react',
          ['env', {
            'targets': {
              'browserlist': [
                '>2%',
                'last 2 versions'
              ]
            },
            modules: false
          }
          ]
        ]
      }
    }
  }
]

const output = {
  filename: 'bundle.js',
  path: path.resolve('./', outputPath),
  publicPath: '/'
}

const alias = {
  // Create aliases to import or require certain modules more easily. For example:
  // Components: path.resolve(__dirname, 'src/components/')
  src: path.resolve('./', 'src')
}

const extensions = ['.js', '.jsx', '.scss']

module.exports = {
  rules,
  output,
  extensions,
  alias,
  webpackCleanPlugin
}
