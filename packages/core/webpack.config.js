const webpack = require('webpack')

const config = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: './src/index.js',
  output: './lib/index.js',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          extends: path.resolve(__dirname, '.babelrc')
        }
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              url: true
            }
          },
          {
            loader: 'sass-loader',
            options: {}
          }
        ]
      }
    ]
  }
}

module.exports = config;

