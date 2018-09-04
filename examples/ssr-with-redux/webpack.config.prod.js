const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.common.js');
const CompressionPlugin = require("compression-webpack-plugin");
const zopfli = require('node-zopfli');

module.exports = Merge(CommonConfig, {
  mode: 'production',
  plugins: [
    new CompressionPlugin({
      test: /\.js$/,
      algorithm: (content, options, fn) => {
        zopfli.gzip(content, options, fn);
      },
    }),
  ],
});
