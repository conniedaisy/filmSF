var webpack = require('webpack');

module.exports = {
  entry: [
    './client/src/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }
    ]
  },
  output: {
    path: './client/dist',
    filename: 'bundle.js'
  },

};