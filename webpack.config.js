const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  mode: 'none',
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    disableHostCheck: true,
    index: path.join(__dirname, 'public', 'index.html'),
    contentBase: path.join(__dirname, 'public'),
  },
  entry: './main.tsx',
  output: {
    path: path.resolve(__dirname, 'public', 'static'),
    publicPath: '/static/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
};