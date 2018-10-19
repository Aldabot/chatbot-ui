const path = require('path')

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
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
              ['@babel/preset-env',
               {
                 targets: {
                   node: "8.10"
                 }
               }],
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
    contentBase: './dist'
  }
}
