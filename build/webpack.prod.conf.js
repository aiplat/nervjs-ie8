const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const webpackConfig = require('./webpack.base.conf')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const env = require('../config/prod.env')
const path = require('path');

const shelljs = require('shelljs')
const dist = path.resolve(__dirname, '../dist')
shelljs.rm('-rf', dist)

const extractStyle = new ExtractTextPlugin('static/css/[name].css')

webpackConfig.module.rules = [...webpackConfig.module.rules,
{
  test: /\.css|less$/,
  use: extractStyle.extract({
    use: [{
      loader: 'css-loader',
      options: {
        minimize: true,
        importLoaders: 2
      }
    },{
      loader: 'less-loader',
      options: {
        minimize: true,
        importLoaders: 2
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => [
          autoprefixer
        ]
      }
    }],
    fallback: 'style-loader'
  })
},
{
  test: /\.(jpg|png|gif)$/,
  loader: 'file-loader?name=static/img/[name].[ext]'
},
{
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  loader: 'file-loader?name=fonts/[name].[ext]'
}
]


webpackConfig.plugins = [...webpackConfig.plugins,
  extractStyle,
new webpack.optimize.UglifyJsPlugin({
  beautify: false,
  mangle: {
    screw_ie8: false,
    keep_fnames: true,
    properties: false,
    keep_quoted: true
  },
  compress: {
    warnings: false,
    screw_ie8: false,
    properties: false
  },
  output: {
    keep_quoted_props: true
  },
  comments: false
}),
new DefinePlugin({
  'process.env': env
})
]

if (env.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        env.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = webpackConfig
