
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


const webpackConfiguration = require('../webpack.config');

module.exports = merge(webpackConfiguration, {
  mode: 'production',

  devtool: false,

  optimization: {
    minimize: false,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },

  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  plugins: [],
});
