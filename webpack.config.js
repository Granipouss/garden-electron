'use strict'

const path = require('path')
// const pkg = require('./app/package.json')
const settings = require('./config.js')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const DashboardPlugin = require('webpack-dashboard/plugin')

let config = {
  devtool: '#eval-source-map',
  eslint: { formatter: require('eslint-friendly-formatter') },
  entry: { build: path.join(__dirname, 'app/src/main.js') },
  module: {
    preLoaders: [],
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.html$/, loader: 'vue-html-loader' },
      { test: /\.node$/, loader: 'node-loader' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', include: /camo/ }, // Camo fix
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        query: { limit: 10000, name: 'imgs/[name].[hash:7].[ext]' }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: { limit: 10000, name: 'fonts/[name].[hash:7].[ext]' }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/main.ejs',
      title: settings.name
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/vertx/)
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'app/dist')
  },
  resolve: {
    alias: {
      'components': path.join(__dirname, 'app/src/components'),
      'layouts': path.join(__dirname, 'app/src/layouts'),
      'models': path.join(__dirname, 'app/src/models'),
      'views': path.join(__dirname, 'app/src/views'),
      'store': path.join(__dirname, 'app/src/store'),
      'assets': path.join(__dirname, 'app/src/assets'),
      'css': path.join(__dirname, 'app/src/assets/css'),
      'img': path.join(__dirname, 'app/src/assets/img'),
      'font': path.join(__dirname, 'app/src/assets/font'),
      'lib': path.join(__dirname, 'app/src/lib'),
      'src': path.join(__dirname, 'app/src'),
      'app': path.join(__dirname, 'app')
    },
    extensions: ['', '.js', '.node', '.vue', '.json', '.css'],
    fallback: [path.join(__dirname, 'app/node_modules')]
  },
  resolveLoader: { root: path.join(__dirname, 'node_modules') },
  target: 'electron-renderer',
  vue: {
    autoprefixer: { browsers: ['last 2 Chrome versions'] },
    loaders: {
      sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1',
      scss: 'vue-style-loader!css-loader!sass-loader'
    }
  }
}

if (process.env.NODE_ENV !== 'production') {
  // Apply ESLint
  if (settings.eslint) {
    config.module.preLoaders.push(
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'eslint-loader' }
    )
  }
}

// Adjust config for production settings
if (process.env.NODE_ENV === 'production') {
  config.devtool = ''
  config.plugins.push(
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  )
}

module.exports = config
