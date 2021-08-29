const webpack = require('webpack')
module.exports = {
  devServer: {
    // https: {
    //   key: '../certs/key.pem',
    //   cert: '../certs/cert.pem'
    // },
    https: true,
    port: 9000
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        devtools: 'cheap-module-eval-source-map'
      }
    })
  ]
}
