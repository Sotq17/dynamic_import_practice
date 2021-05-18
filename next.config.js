module.exports = {
  trailingSlash: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react'
      })
    )
    return config
  }
}
