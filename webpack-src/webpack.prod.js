import { rules, output, extentions, alias } from './webpack.shared.config.js'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import webpack from 'webpack'

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/index.js']
  },
  module: {
    rules: rules
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({ options: {} })
  ],
  output: output,
  resolve: {
    alias: alias,
    extensions: extentions
  }
}
