var path = require('path');
var webpack = require('webpack');

module.exports = {

  devtool: 'inline-source-map',

  entry: {
    index: path.resolve(__dirname, 'index.js')
  },

  output: {
    path: __dirname + '/__build__',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },

  resolve: {
    alias: {
      'react-pace-progress': path.join(__dirname, '..', 'src')
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js')
  ]

};
