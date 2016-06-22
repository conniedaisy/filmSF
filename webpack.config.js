var webpack = require('webpack');

module.exports = {
  entry: [
    './client/src/App.jsx'
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
  },
  output: {
    path: './client/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};