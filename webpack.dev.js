const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    //   Webpack 5 renaming contentBase to static
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 8000,
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
