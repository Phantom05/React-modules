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
            browsers:['> 5% in KR ','last 2 chrome versions'], // 한국에서 점유율이 5% 넘는애들, 프리셋에서의 설정을 잡으려면 프리셋 배열 안에서 다시 배열을 만들고 두번쨰인자로 세팅을 넣어줘야함. npm run dev 하면 한국에서 5%이상인 점유율인것들을 보여줌. 그리고 그것의 문법으로 알아서 바꿔준다. https://github.com/browserslist/browserslist
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

/**
 * 실무갔을때 웹팩 설정을 먼저 분해해서 이해하는게 중요함 룰스를 특이 하나씩 다 빼보고 에러메세지를 보면서 확인,
 * 플러그인도 하나씩 빼면서 확인.
 */