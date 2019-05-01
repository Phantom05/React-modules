const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  name: 'miniwebsite-setting',
  mode: 'development',
  devtool: 'eval', // 프로덕션일때는 hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    app: ['babel-polyfill', './client'],
  },

  module: {
    rules: [
    //   {
    //     test: /\.css$/,
    //     use:ExtractTextPlugin.extract({
    //         fallback: 'style-loader',
    //         use: [
    //             {
    //                 loader: 'css-loader',
    //                 options: {
    //                     url: false
    //                 }
    //             }
    //         ]
    //     })
    // },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/,
      use : [{
          loader : 'file-loader',
          options : {
              name: '[path][name].[ext]'
          }
      }]
  },
    {
      test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader',
      options: {
        limit: 8000,
        name: 'images/[hash]-[name].[ext]'
      }
    }, {
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR ', 'last 2 chrome versions'],
            },
            debug: true,
          }], '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-hot-loader/babel'
        ],
      }
    }]
  },
  plugins: [
    // new ExtractTextPlugin('src/css/style.css'),
    new webpack.LoaderOptionsPlugin({debug: true}),
    // new HtmlWebpackPlugin({template: './index.html'}),
  // new CleanWebpackPlugin('dist')

  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    // publicPath: '/dist/' //가상경로 app.user('/dist',express.static)과가은거
  },
  devServer: {
    port: 8080
  }
}
