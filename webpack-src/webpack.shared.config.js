// Non env specific Webpack settings
import path from 'path'

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
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/'
}

const alias = {
  // Create aliases to import or require certain modules more easily. For example:
  // Components: path.resolve(__dirname, 'src/components/')
}

const extentions = ['.js', '.jsx', '.scss']

export {rules, output, extentions, alias}
