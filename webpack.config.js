const path = require('path')

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js',
    library: 'myLibrary',
    libraryTarget: 'umd',
    publicPath: '/dist/',
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
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
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
      }
    ]
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    }
  }

}
