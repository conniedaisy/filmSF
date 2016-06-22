// const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client',
    './client/src/App.jsx'
  ],

  output: {
    path: './client/dist',
    filename: 'bundle.js'
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [ "react-hot", "babel-loader" ]
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }
    ]
  }
};