var webpack = require('webpack');
var Merge = require('webpack-merge');
var CommonConfig = require('./webpack.config.common.js');

module.exports = Merge(CommonConfig, {
  devtool: 'cheap-module-inline-source-map',
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
  ],
  output: {
    hotUpdateChunkFilename: 'static/hot/hot-update.js',
    hotUpdateMainFilename: 'static/hot/hot-update.json'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
