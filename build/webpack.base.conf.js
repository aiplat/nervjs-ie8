const helpers = require('./helpers')
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const merge = require('webpack-merge')
const webpackConfig = {
  entry: {},
  output: {
    path: helpers.root('/dist'),
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    symlinks: true,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.html', '.css'],
    alias: {
      'react': 'nervjs',
      'react-dom': 'nervjs',
      static: path.join(__dirname, '../static'),
      assets: path.join(__dirname, '../src/assets'),
      components: path.join(__dirname, '../src/components'),
      page: path.join(__dirname, '../src/page'),
      plugins: path.join(__dirname, '../src/plugins'),
      views: path.join(__dirname, '../src/views')
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        'babel-loader', {
          loader: 'ts-loader',
          options: {
            onlyCompileBundledFiles: true
          }
        }]
    }]
  },
  plugins: [
    new NamedModulesPlugin()
  ]
}

const cmnode = require('../src/plugins/cmnode');
const entries = cmnode.getEntry('./src/page/**.js');
const pageConfig = require('../src/pageConfig');
Object.keys(entries).forEach(function (name) {
  const plugin = new HtmlWebpackPlugin({
    filename: name + '.html',
    inject: true,
    title: pageConfig[name].title,
    keywords: pageConfig[name].keywords,
    description: pageConfig[name].description,
    author: pageConfig[name].author,
    chunks: ['commonCss', name],
    hash: true,
    template: './index.html',
    favicon: './src/assets/favicon.ico',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    },
    chunksSortMode: 'manual'
  });
  webpackConfig.plugins.push(plugin);
})

webpackConfig.entry['commonCss'] = [
  'static/css/cmreset.css',
  'static/css/cmstyle.css',
  'static/css/aiplat.css'
];
webpackConfig.entry['es5-polyfill'] = 'es5-polyfill';
webpackConfig.entry = merge(webpackConfig.entry, entries);

module.exports = webpackConfig