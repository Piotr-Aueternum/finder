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
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'sass-loader',
      ],
    },
    {
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
    host: JSON.parse(process.env.LAN) ? process.env.LAN_IP : 'localhost',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
  ],
};

