const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'index.js')],
  output: {
    path: path.join(__dirname, 'src', 'static'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        'babel-loader',
        'eslint-loader',
      ],
    }],
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    contentBase: 'src/static',
    historyApiFallback: true,
    host: process.env.LAN ? process.env.LAN : 'localhost',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
  ],
};

