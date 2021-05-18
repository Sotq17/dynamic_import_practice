module.exports = {
  trailingSlash: true,
  assetPrefix: '/dynamic_import_practice',
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      })
    )
    return config
  },
}
