
Movies.js

```javascript
import React, {Component} from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
```

>PropTypes 기능을 사용하기 위해 PropTypes 를 import 해줘야한다.
//기억하기 class 이름 컴포넌트

```javascript
class Movie extends Component{
 
  static propTypes = {
    title:PropTypes.string,
    poster:PropTypes.string.isRequired
  }
  ```
  >index는 출력하지 말고 원하는 타입만 골라서 출력하고 싶을대 static 을 사용해서 추려줄 수 있다.
 
 >이렇게 isRequired로 묶어주면 필수요소가됨 없을시 에러가남. 
 jsx란 React 에서 <Movies />와 같이 다른 파일을 사용할 때의 형식이다.
 ```javascript
  render(){
    // console.log(this.props); // movie의 속성을 가져옴 
    // jsx의 경우 꼭 {}를 쳐줘야 명령어를 실행 가능함.
    return(
      <div>
        <MoviePoster poster={this.props.poster}/>
      <h1 className="movie">{this.props.title}</h1>
      </div>
    )
  }
}
```
>이렇게 작성된 movie 컴포넌트를 App컴포넌트 안에다가 넣고 레고 조각 모음 하는거 마냥 집어 넣은거임.

>이 구조 왜우기 import React, {Component} from 'react'; 리엑트 컴포넌트를 사용하겠다는거고 css가 이 컴포넌트에 같이 사용될거고 
```javascript
class Movie extends Component{
  render(){
    return(
      //여기에 사용하것이다.
    )
  }
}
```

>클래스명을 <클래스명 /> 이렇게쓰면 들어가게된다. //jsx라고 부름
컴포넌트 > 랜덜() > 리턴 > jsx

>리엑트에는 중요한 기능이 2개 있음 props 랑 state 임 
부모가 자식에게 정보를 줄때 props를 사용함


```javascript
class MoviePoster extends Component{
  //이미지 같은대서 isRequried를 자주 써줌. 필수니까
  static propTypes={
    poster: PropTypes.string.isRequired
  }
  render(){
    console.log(this.props)
    return(
      <img src={this.props.poster} alt=""/>
    )
  }
}
export default Movie;
```


App.js
```javascript
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



const movies=[
  {
    title:"Matrix",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwT8MZr6yQ4Len2PP5Vl6fG8XZ7RicaJfJ5gui4qUWZBDnc402"
  },
  {
    title:"Full Metal Jacket",
    poster:"https://resizing.flixster.com/xqFW8SryVoj3g4hezXKsNJr9P9o=/206x305/v1.bTsxMTE2ODAyOTtqOzE3NzY5OzEyMDA7ODAwOzEyMDA"
  },
  {
    title:"OldBoy",
    poster:"http://cfile30.uf.tistory.com/image/99B6AA33599A881417AEE3"
  },
  {
    title:"Star Wars",
    poster:"http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web.jpg"
  }
]
```
>이렇게 배열안에 객체로 맹글어 주는게 중요함. 그리고 map을 사용해서 
```javascript
class App extends Component {
  render() {
    //map으로 하나씩 들어가며 새로운 배열이 창출됨 배열의 0부터 차곡차곡 들어가면서 title poster을 출력하게됨. 이렇게 map핑을 사용해서 데이터를 계속 사용하게 될꺼임 연습해야함. 리엑트에서는 고유한 값이 없으면 에러를 내서 index로 고유한 값을 내줘야함.
    return (
      <div className="App">
      {movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })}
      </div>
    );
  }
}

export default App;
```


>
>컴포넌트는 기본적으로 랜더링 할때  WillMount > render > DidMount 순으로 실행이 됨.

>하지만 새로 수정하여 업데이트 할때는  WillReceiveProps > Wullupdate> WillMount > render >DidMount 순으로 됨. 먼저 수정된 값을 받고. 수정하고, 진행함.


```javascript
class App extends Component {
  componentWillMount(){
    console.log('Will mount');
  }

  componentDidMount(){
    console.log('DidMount')
  }
// 콘솔찍어보면 어떤 순으로 되는지 확인 가능함.
  render() {
    console.log('render')
    //map으로 하나씩 들어가며 새로운 배열이 창출됨 배열의 0부터 차곡차곡 들어가면서 title poster을 출력하게됨. 이렇게 map핑을 사용해서 데이터를 계속 사용하게 될꺼임 연습해야함. 리엑트에서는 고유한 값이 없으면 에러를 내서 index로 고유한 값을 내줘야함.
    return (
      <div className="App">
      {movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })}
      </div>
    );
  }
}

export default App;
```



```javascript
class App extends Component {
 //state 기본으로 보여줄 것을 선언함.
  state ={
    greeting : 'Hello'
  }

  componentDidMount(){
    setTimeout(() => {
      // this.state.greeting = 'somthing'
      //state를 직접적으로 쓰면 안됨. 에러가 발생함 state를 직접적으로 쓰면 Willmount나 그런 동작들ㅇ ㅣ안함 
      this.setState({
        greeting:'Hello again!'
        // 이렇게 하게 되면 5처후에 state가 다시 동작되서 뷰에 바뀜 개신기.. 5초 후에 Did Mount를 다시 시작하겠다는 것임. 이러면 화면을ㅇ 새로고침 하지 않고 바로 바꿀수 있음. 자동으로 render가 5초후에 다시되기 때문에. 중요한건 state를 사용할때 setState를 설정하고 사용해야한다는 점임.
      })
    }, 5000);
  }

  render() {
    console.log('render')
    return (
      <div className="App">
      {this.state.greeting}
      {movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })}
      </div>
    );
  }
}

export default App;
```

>state 중요! facebook에서 사용하는 무한 스크롤 로딩! infinite scroll
```javascript
componentDidMount(){
    setTimeout(() => {
      // this.state.greeting = 'somthing'
      //state를 직접적으로 쓰면 안됨. 에러가 발생함 state를 직접적으로 쓰면 Willmount나 그런 동작들이안함 
      this.setState({
        greeting:'Hello again!'
        // 이렇게 하게 되면 5처후에 state가 다시 동작되서 뷰에 바뀜 개신기.. 5초 후에 Did Mount를 다시 시작하겠다는 것임. 이러면 화면을ㅇ 새로고침 하지 않고 바로 바꿀수 있음. 자동으로 render가 5초후에 다시되기 때문에. 중요한건 state를 사용할때 setState를 설정하고 사용해야한다는 점임.
         //facebook이 state를 이용해서 로딩하고 있음.
      })
    }, 5000);


    setTimeout(()=>{
      this.setState({
        movies:[
          ...this.state.movies, //이코드를 삭제해버리면 state의 movies 모두를 아래걸로 대체해버림 그래서 이렇게 써야 뒤에 붙는거임. "...this.state.movies에 추가" 라는 뜻임 이전껀 그대로 나두고 그리고 이걸 아래 다가 두면은 가장 위에다가 출력됨 이거 중요 !
          {
            title:"Trainspotting",
            poster:"http://cfile24.uf.tistory.com/image/99167B385A6B9AC306B4FD"
          }
        ]
      })
    },5000)
  }

```

>>꿀팁

App.js에다가 제이슨 형식

그리고 컴포넌트한 jsx에다가 prop을 주는것임 title, url 이런식

그리고 Header.js에서 this.props를 해주면 가져오게됨. 

왜냐하면 Header.js의 내용들이 클래스로 App.js로 들어가 있기 때문에, 

this를하면 App.js의 클래스 App의 객체를 this가 가르키게 될거고 거기서 prop을 가져오게 된다. 

css를 임포트해서 조절할떈 최종적으로 호출된 곳에서 호출을 해라.

map을 사용할떄는 
```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        {movie.map((x) =>{
          return <Header title={x.title} url={x.url}/>
        })}

      </div>
    );
  }
}
export default App;
```

이런식으로 map으로 먼저 리턴을 해주면서 안에 컴포넌트명을 넣어 사용하면 된다.