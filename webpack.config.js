'use strict';

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');

module.exports = {
  target: 'web',
  cache: true,
  entry: {
    main: path.join(srcPath, 'main.js'),
    common: ['react',
      'react-dom',
      'react-router',
      'history',
      'alt',
    ],
    // shims: [
    //   'es5-shim',
    //   'es5-shim/es5-sham',
    //   'console-polyfill',
    // ],
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: path.join(__dirname, 'pack'),
    publicPath: '',
    filename: '[name].js',
    library: ['Example', '[name]'],
    pathInfo: true
  },

  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: 'babel?optional[]=runtime&cacheDirectory&stage=0'}
    ],
    postLoaders: [{
        test: /\.js$/,
        exclude: /\/(node_modules|bower_components)\//,
        loader: 'autopolyfiller',
        query: { browsers: [ 'last 2 versions', 'ie >= 8', 'safari >= 5' ] }
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new webpack.NoErrorsPlugin()
  ],

  // debug: true,
  // devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './pack',
    historyApiFallback: true
  }
};
