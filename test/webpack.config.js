const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { app: ['babel-polyfill', path.join(__dirname, './src/index.js')] },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules : [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              '@babel/preset-react'
            ],
            plugins: [
              require('@babel/plugin-proposal-class-properties'),
            ]
          }
        },
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    watchContentBase: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
}
