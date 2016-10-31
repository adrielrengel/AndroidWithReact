var path = require('path');

module.exports = {
  resolve: {
    root: [
      path.resolve('src')
    ],
    extensions: ['', '.webpack.js', '.js', '.jsx']
  },
  entry: [
    'es6-shim',
    path.resolve('src/Index.jsx')
  ],
  output: {
    path: path.resolve('www'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.json/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.woff2?(.*)?$/,
      loader: 'url'
    }, {
      test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      loader: 'file'
    }, {
      test: /\.jpg$/,
      loader: 'url-loader?mimetype=image/jpg'
    }, {
      test: /\.png$/,
      loader: 'url-loader?mimetype=image/png'
    }, {
      test: /\.gif$/,
      loader: 'url-loader?mimetype=image/gif'
    }]
  }
};
