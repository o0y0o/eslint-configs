const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

function getJsMinimizer() {
  return new TerserPlugin({
    terserOptions: { format: { ascii_only: true }, safari10: true }
  })
}

function getCssMinimizer() {
  return new CssMinimizerPlugin()
}

module.exports = function ({ isDev, chunkGroups }) {
  if (isDev) return { splitChunks: { chunks: 'all' }, runtimeChunk: true }
  return {
    splitChunks: { chunks: 'all', cacheGroups: chunkGroups },
    runtimeChunk: true,
    minimizer: [getJsMinimizer(), getCssMinimizer()]
  }
}
