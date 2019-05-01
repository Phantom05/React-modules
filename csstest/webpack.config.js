const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) =>{
  const config = {
  name: 'miniwebsite-setting',
  mode: 'development',
  devtool: 'eval', 
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  entry: {
    app: [ './client'],
    // 'index': './src/index.js'
  },
  module: {
    rules: [
      {
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
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: 'sass-loader',
            options: {
                plugins: () => [require('autoprefixer')({
                    'browsers': ['> 10%', 'last 2 versions']
                })],
            }
          },
        ]
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    // new webpack.LoaderOptionsPlugin({debug:true}),
    new MiniCssExtractPlugin({
      filename: "app.css",
      path: path.join(__dirname, './dist'),
      chunkFilename: "[id].css"
    })
  ],
}

if(options.mode === 'development') {
  //... Development 설정
  config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      showErrors: true, // 에러 발생시 메세지가 브라우저 화면에 노출 된다.
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "app.css",
      path: path.join(__dirname, './dist'),
      chunkFilename: "[id].css"
    })
  ];

  config.devtool = 'inline-source-map';

  config.devServer = {
    port:8080,
    hot: true, // 서버에서 HMR을 켠다.
    host: `localhost`,
    contentBase: './dist', // 개발서버의 루트 경로
    stats: {
      color: true
    }
  };
} else {
  config.plugins = [
    new CleanWebpackPlugin(['dist'])
  ];
  //... Production 설정
}

return config;

}
