const path = require('path');
const webpack = require('webpack');

module.exports = {
  name:'googoodan-setting',
  mode:'development',
  devtool:'eval', // 프로덕션일때는 hidden-source-map
  resolve:{
    extensions:['.js','.jsx']
  },

  entry:{
    app:['./client'],
  },

  module:{
    rules:[{
      test:/\.jsx?/,
      loader:'babel-loader',
      options:{
        presets:[['@babel/preset-env',{
          targets:{
            browsers:['> 5% in KR ','last 2 chrome versions'], 
          },
          debug:true,
        }],'@babel/preset-react'],
        plugins:[
          '@babel/plugin-proposal-class-properties',
          'react-hot-loader/babel'
        ],
      }
    }]
  },
  plugins:[
    new webpack.LoaderOptionsPlugin({debug:true})
  ],
  output:{
    path:path.join(__dirname,'dist'),
    filename:'app.js',
    publicPath:'/dist/' //가상경로 app.user('/dist',express.static)과가은거
  },
  devServer:{
    port:8080
  }
}

