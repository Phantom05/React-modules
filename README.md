# REACT STUDY
### Movies.js

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


### App.js
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

## 꿀팁

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

하지만 react내에서는 Array를 사용할때 무조건 key를 줘야한다. 

그래서 map특성의 index를 사용하면 되는데 이 key값을 보여주기 싫다면 

Proptype의 string만 사용하면 되고 필수적으로 사진이 보여줘야하기 때문에 

isRequired 라는 속성도 사용할수있다. 

하지만 이번 react가 업데이트되면서 proptypes를 없애서 따로 import를 해줘서 사용해줘야한다.

이때 proptype선언은 최종적으로 엘리먼트를 호출하는곳 즉 Header.js에다가 선언해주면 되고, 

이때 가장 상단에
```javascript
import PropTypes from 'prop-types';
```
해주고 Header 클래스 랜더링 전에 
```javascript
static propTypes ={
  title:PropTypes.string.isRequired
}
```
을 선언해서 사용하면된다.

또한 will render did 마운팅은 모두 클래스 안에서 랜더링을 하기위해 동작되는거기 때문에 class 안쪽에다가 써줘야한다.

state를 사용할떈 App에서 사용하면 좋다. 

왜냐하면 App에서 모든 컴포넌트를 담당하고 있기 때문에 

새로고침이 되고 App에서 전체를 통제해줘야하기 때문이다.

state를 사용하려면 랜더가 끝난 후 Did마운트에서 사용해주면되는데 

이떄, state를 사용하든말든 클래스 안쪽에 state={}은 있어야한다. 

그리고 시간차로 state를 사용하려면 Did마운팅이 될때 settimeout으로 사용하면 되는데 

그냥 state를 사용하면 안되고
```javascript
setTimeout 안에 this.setState({
	greeting:'Bye!'
})
```
이런식으로 setState속성을 사용해서 class 에있는 state객체의 안쪽을 수정해주는것이다.

>기억해야할것! state를 사용할땐 반드시 setState를 사용할것!


## state안으로 api를 옴겨 사용할때


```javascript
class App extends Component {
  state ={
   greeting:'Hello!',
   movie:[
    {
      title:'부산행',
      url:"http://t1.daumcdn.net/movie/fe9da43b455db93228b5bfa74dacc78107f1eb40"
    },
    {
      title:'셜록',
      url:"http://t1.daumcdn.net/movie/73d078e4c3d27c1d5d2240b4981dc94980676be1"
    }
   ]
  }

  componentWillMount(){
    console.log('will')
  }
  componentDidMount(){
    console.log('did');
    setTimeout(() => {
      this.setState({
        greeting:'bye earth'
      })
    }, 1000);
  }
  
  render() {
    console.log('render')
    return (
      <div className="App">
      {this.state.greeting}
        {this.state.movie.map((x,y) =>{
          //여기처럼 this.state.movie로 옮겨주면된다. 
          //까먹을수 있으니 보고 넘어가기
          return <Header title={x.title} url={x.url} key={y}/>
        })}

      </div>
    );
  }
}
export default App;
```

## facebook처럼 시간차로 사진이나 무한 스크롤 하고싶을때,

...속성을 사용해주면된다. 뒤에다가 추가하겠다는것이다.

때문에, setTimeout 안의 this.setState에다가 movie:[...]해주고 타켓을 잡아서 추가 해주면된다.

```javascript
  componentDidMount(){
    console.log('did');
    setTimeout(() => {
      this.setState({
        greeting:'bye earth',
        movie:[
          ...this.state.movie,
         {
          title:'괴물',
          url:"http://img1.daumcdn.net/thumb/R720x0/?fname=http://cfile116.uf.daum.net/image/0174AC3551948E082C368E"
        }
      ]
      })
    }, 1000);
  }
```
이런식으로 5초후 어디에? 라고 타겟을 잡아주는것과 같다 ...을 맨아래로 내리면 맨위로 추가되게된다.

만약 ...를 사용하지 않게되면 movie:[]프로퍼티의 값을 대체해버리겠다는 사용법이 되버린다.


## Loading state
state를 사용할때 데이터 정보가 많으면 바로 뜨지 않는다.

때문에 바로보이는 화면이 깨져보일 수 있으므로 loading state기법을 사용한다.

app내의 내용들을 함수에 담고 매개변수로 넣어 true시 함수를 호출하고 아닐시 다른 행동을 취해놓는다.

때문에 loading이 되게 하기위해 setState안에 api정보들을 담아놓고 일정한 시간후에 실행하는것이다.

그리고 react내에서 함수를 사용할땐 반드시 _언더스코어로 시작한다 react내의 기능이 

너무 많기때문에 이름이 금방 겹치게 되기 때문이다.

```javascript
class App extends Component {
  state ={}

  componentWillMount(){
    console.log('will')
  }
  componentDidMount(){
    console.log('did');
    setTimeout(() => {
      this.setState({
        movie:[
        {
          title:'괴물',
          url:"http://img1.daumcdn.net/thumb/R720x0/?fname=http://cfile116.uf.daum.net/image/0174AC3551948E082C368E"
        },
        {
          title:'괴물',
          url:"http://img1.daumcdn.net/thumb/R720x0/?fname=http://cfile116.uf.daum.net/image/0174AC3551948E082C368E"
        },
        {
          title:'부산행',
          url:"http://t1.daumcdn.net/movie/fe9da43b455db93228b5bfa74dacc78107f1eb40"
        },
        {
          title:'셜록',
          url:"http://t1.daumcdn.net/movie/73d078e4c3d27c1d5d2240b4981dc94980676be1"
        },
        {
          title:'트와일라잇',
          url:'http://talkimg.imbc.com/TVianUpload/TVian/MBCinfo/images/info/20101229134251_P.jpg'
        }
      ]
      })
    }, 3000);

  }
  
  _renderMovie=()=>{
   const movies = this.state.movie.map((x,y) =>{
    return <Header title={x.title} url={x.url} key={y}/>
  })
  return movies
  }

  render() {
    console.log('render')
    return (
      <div className="App">
      {this.state.movie?this._renderMovie() :'Loading'}
      </div>
    );
  }
}

export default App;
```
이렇게 될 수가 있겠다. state전부를 setTiemout안에 넣어놓고 호출하는것이다.

```javascript
this.state.movie?this._renderMovie() :'Loading'
```
이 부분을 잘보면 App클래스 내의 state객체의 movie에 접근했을때 현재 아무값도 없기때문에

Loading이 호출되게 되고 5초후 this.state.movie안을 대체해주기 때문에 들어가게 된다.




## React의 function
state가 필요없는 즉 render, willmount, didmount가 필요없는 1개의 이미지 1개의 html태그 이렇게

간단한 컴포넌트는 따로 class를 만들 필요가 없다 때문에 그냥 function으로 만들어주면된다.






```javascript
create-react-app new
npm install --save react-router@next
```
```
vscode

reactjs code snipit 설치후
```
src하고 탭 그럼 컴포넌트 틀이 자동적으로 나옴 개꿀
```javascript
class home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

export default home;
```
이런 구조이지만 state를 사용하지 않는다면
```javascript
const Homne = () =>{
  return(
    <div>
      <h2>Home</h2>
    </div>
  );
};
```
이구조를 더 권장함 
그리고 파일이름도 컴포넌트는 다 대문자


## 리액트 jsx 활용

jsx부분은 renter하고 return의() 안쪽부분을말함

jsx가 js파일 내에서 createelement같은걸로 해서 html을 생성해줘야하는데 

이걸 편리하게 html문법으로 사용하게끔 해주는것이다.

그리고 jsx내에서 js를 사용하기위해선
```javascript
        {
          1+1 ===2
          ?(<div>맞아요!</div>)
          :(<div>틀려요!</div>)
        }
```
이런식으로 사용할 수있음 !
```javascript
{console.log('Hello')}
```
즉, {}요골로 js를 사용가능
하지만 왠만하면 JSX밖, 즉, render()와 return()사이에서 사용하는게 좋다
```javascript
class App extends Component {
  render() {
    const value = 1;
    return (
      <div className="App">
        {
          (()=>{
            if(value ===1) return (<div>하나</div>);
          })()
        }
        {console.log('Hello')}
      </div>
    );
  }
}
```
대략 이런식 으로 사용하면 좋다.


### react에서 css 사용
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    const style ={
      backgroundColor:'black',
      padding:'16px',
      color:'white',
      fontSize:'20px',
      fontWeight:'bold'
    };

    return (
      <div style={style}>
      Hello world
      </div>
    );
  }
}

export default App;
```

{/*...*/}주석은 요로쿰 js내에서 주석사용하는거와 같음 하지만 jsx내부 이니까 {}로 묶어주는 것이다.

## defaultProps

가끔씩은 실수로 props 를 빠트려먹을때가 있다. 

혹은, 특정 상황에 props 를 일부러 비워야 할 때도 있구. 

그러한 경우에, props 의 기본값을 설정해줄 수 있다, 그것이 바로 defaultProps 이다.

```javascript
//MyName.js
import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps = {
    name: '기본이름'
  }
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;
```

이렇게 하면 만약에 <MyName /> 이런식으로 name 값을 생략해버리면 “기본이름” 이 나타나게 될 것이다. 

참고로, defaultProps 는 다음과 같은 형태로도 설정 할 수 있다.

```javascript
//MyName.js
import React, { Component } from 'react';

class MyName extends Component{

  render(){
    return(
      <div>
      안녕하세요 ! 제 이름은 <b>{this.props.name}</b>입니다 !
      </div>
    )
  }
}

MyName.defaultProps ={
  name :'기본이름'
}

export default MyName;
```

우리가 곧 알아볼 함수형 컴포넌트에서 defaultProps 를 설정할땐 위 방식으로 하면 된다.


```javascript
//App.js
import React, { Component } from 'react';
import './App.css';
import MyName from './MyName';

class App extends Component {

  render() {
    return (
      <MyName name="리액트" value="뮻" />
    );
  }
}

export default App;
```
```javascript
//MyName.js

import React, { Component } from 'react';

const MyName = ({name})=>{
  return(
    <div>
      안녕하세요 ! 제이름은 {name} 입니다.
    </div>
  )
}

export default MyName;
```
```javascript
//간단 예시
import React, { Component } from 'react';

const YourName = ()=>{
  return(
    <div>
      Hello
    </div>
  )
}
export default YourName;
```


## state 예제

```javascript
//Counter.js
import React, { Component } from 'react';

class Counter extends Component{
  state ={
    number:0
  }
  handleIncrease = ()=>{
    this.setState({
      number:this.state.number +1
      //arrow function 안에서의 this는 전역을 가르키기 때문에 이와 같은 코드가 가능.
    });
  }
  handleDecrease =()=>{
    this.setState({
      number:this.state.number -1
    });
  }
  
  render(){
    return(
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    )
  }
}
export default Counter;
```
매우 쩐다... button 클릭에 함수를 넣고 그 함수를 state와 연결시킨다.

setState는 state를 실시간으로 변경해준다. 하지만 잘써야하는데 아애 state를 대체 버리기 때문에
```javascript
 state = {
    number: 0,
    foo: {
      bar: 0,
      foobar: 1
    }
  }

  ...

  this.setState({
  number: 0,
  foo: {
    ...this.state.foo,
    foobar: 2
  }
});
```
이런식으로 쩜쩜쩜을 사용해서 뒤에 추가해주는 방법을 사용해야한다.


## 주의사항

여기서 정말로!! 주의해야 하는게있다, 리액트에서 이벤트 함수를 설정할때 html 과 다음과 같은 사항이 다르다.

+ 이벤트이름을 설정 할 때 camelCase 로 설정해주어야 한다. onclick 은 onClick, onmousedown 은 onMouseDown, onchange 는 onChange 이런식으로 !.

+ 이벤트에 전달해주는 값은 반드시 함수 여야 한다. 만약에 onClick={this.handleIncrease()} 이런식으로 하게 된다면, 렌더링을 할 때 마다 해당 함수가 호출이된다. 그렇게 되면 정말 큰 일이 발생한다. 렌더링 -> 함수 호출 -> setState -> 렌더링 -> 함수 호출 -> 무한반복.. 이렇게 되버리는 거지 ㅠㅠ!
그러니까 꼭 주의해야 한다 렌더링 함수에서 이벤트를 설정 할 때 여러분이 만든 메소드를 호출하지 말자!

자~ 그러면 설명이 끝났으니 이 컴포넌트를 App 에서 불러와서 렌더링 해보자.


## LiftCycle API
이걸 활용해서 재미난 일들을 많이 해볼 수 있다.

componentWillMount - > componentRender - > componentDidMount

WillMount는 '컴포넌트'가 화면에 나타나기 전 즉 , 서버 사이드 쪽에서 활용했는데 이 API는 더이상 필요하지 않게 되었다.

중요한놈
```javascript
componentDidMount() {
  // 외부 라이브러리 연동: D3, masonry, etc
  // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
  // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
}
```
이 API 는 여러분의 컴포넌트가 화면에 나타나게 됐을 때 호출된다. 

여기선 주로 D3, masonry 처럼 DOM 을 사용해야하는 외부 라이브러리 연동을 하거나, 해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 axios, fetch 등을 통하여 ajax 요청을 하거나, DOM 의 속성을 읽거나 직접 변경하는 작업을 진행한다.

```javascript
componentWillMount() {
    console.log('componentWillMount (deprecated)');
  }
  //render

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  //render
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
```
이 순서대로 진행되게 된다.

하지만 react에서는 함수에서 에러가 발생했을때, 리액트 앱이 크러쉬 되어 버린다.

그럴때 사용할 수 있는 API가 한가지 있다.
```javascript
componentDidCatch(error, info) {
  this.setState({
    error: true
  });
}
```
바로 componentDidCatch 이녀석이다.

에러가 발생하면 이런식으로 componentDidCatch 가 실행되게 하고, 

state.error 를 true 로 설정하게 하고, render 함수쪽에서 이에 따라 에러를 띄워주시면 된다.

이 API 를 사용하시게 될 때 주의하실 점이 있다, 

컴포넌트 자신의 render 함수에서 에러가 발생해버리는것은 잡아낼 수는 없지만, 

그 대신에 컴포넌트의 자식 컴포넌트 내부에서 발생하는 에러들을 잡아낼 수 있다

아래를 살펴보자

```javascript
import React, { Component } from 'react';

const Problematic = () => {
  throw (new Error('버그가 나타났다!'));
  return (
    <div>
      
    </div>
  );
};

class Counter extends Component {
  // ... 생략
  
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        { this.state.number === 4 && <Problematic /> }
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
```

여기서 카운터를 4까지 올리면 

![arinrke](https://user-images.githubusercontent.com/33567964/40771740-242460dc-64f9-11e8-80cc-582a40fd2088.png)

이렇게 화면에 뜨게된다.

프로덕션에선 이 화면은 나타나지 않습니다. 여기서 X 를 눌러보시면,

![ue8tmyq](https://user-images.githubusercontent.com/33567964/40771811-50525664-64f9-11e8-89b9-1cdf6a7737b2.png)

그냥 비어있는 페이지가 나온다.

오류가 발생하는 잦은 부분은 다음과 같다.

보통, 렌더링 부분에서 오류가 발생하는것은 사전에 방지해주어야 합니다. 주로 자주 에러가 발생하는 이유는 다음과 같습니다:

존재하지 않는 함수를 호출하려고 할 때 (예를들어서 props 로 받았을줄 알았던 함수가 전달되지 않았을때)
```javascrip
this.props.onClick();
```
배열이나 객체가 올 줄 알았는데, 해당 객체나 배열이 존재하지 않을때
```javascrip
this.props.object.value; // object is undefined
this.props.array.length; // array is undefined
```
이러한 것들은 render 함수에서 다음과 같은 형식으로 막아 줄 수 있습니다.

하지만 이런 오류페이지가 나오면 리액트가 죽어버리기 때문에 사전에 방지해야한다.

그마법의코드는 바로

```javascript
render() {
  if (!this.props.object || !this.props.array || this.props.array.length ===0) return null;
  // object 나 array 를 사용하는 코드
}
```
이것이다. 이부분을 component render()바로 아래에 위치해주면 된다.

## input 상태 관리하기
지금까지 배웠던건
+ 컴포넌트 만들기
+ props와 state
+ LiftCycleAPI
이렇게 된다. 사실 해보면 별거 없다 이해하는데 오래걸려서 그렇지..

리액트는, 그래도 자바스크립트와 가깝기때문에 다행이다. 배울건 그리 많지 않다고 한다....항간에는..

>INPUT상태를 관리하는 방법과 배열을 다루는 방법을 알아보자

새로운 프로젝트 생성
```
create-react-app phone-book
cd phone-book
yarn start
```

우선, src 디렉토리 내부에 components 라는 디렉토리를 만들자. 

그리고, 그 안에 PhoneForm.js 라는 파일을 만들어서 다음 코드를 입력하자.

```javascript
// file: src/components/PhoneForm.js
import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  render() {
    return (
      <form>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div>{this.state.name}</div>
      </form>
    );
  }
}

export default PhoneForm;
```

onChange 이벤트가 발생하면, e.target.value 값을 통하여 이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어올 수 있다.

해당 값을 state 의 name 부분으로 설정한다.

render 부분에서 input 을 렌더링 할 떄에는 value 값과 onChange 값을 넣어주었다. 

onChange 는 input 의 텍스트 값이 바뀔때마다 발생하는 이벤트이다. 

여기에 우리가 만들어둔 handleChange 를 설정했다. 

그리고, 나중에 우리가 데이터를 등록하고나면 이 name 값을 공백으로 초기화 해줄건데, 

그렇게 초기화 됐을 때 input 에서도 반영이 되도록 value 를 설정해주었다.

그리고 그 하단에는 name 값이 잘 바뀌고 있는지 확인 할 수 있도록 값을 렌더링해주었다.

자~ 그러면 이 컴포넌트를 App 에서 보여줄게요.
```javascript
// file: src/App.js
import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';


class App extends Component {
  render() {
    return (
      <div>
        <PhoneForm />
      </div>
    );
  }
}

export default App;
```

input에 글을 써보면 바로 아래쪽으로 나오게 될 것이다.

```javascript
// file: src/components/PhoneForm.js
import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <form>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <div>{this.state.name} {this.state.phone}</div>
      </form>
    );
  }
}

export default PhoneForm;
```

아마 또 다른 이벤트 핸들러 함수를 만들면 되지 않을까? 라고 생각할 수도 있다.

 그 방법은 물론 나쁜 방법은 아니다, 근데 더 나은 방법이 있다.

바로, input 의 name 속성을 사용하는건데, render 부분에 보면,

 각 input 에 name 값을 부여해주었다. 이를 통하여 우리는 각 input 을 구분 할 수 있게 됐다.

이 name 값은, event.target.name 을 통해서 조회 할 수 있다.

setState 내부에서 사용된 문법은 Computed property names 라는 문법이다. 

혹여나 key 부분에 [ ] 괄호가 사용된 것이 생소하다면 링크를 클릭해보자.

잘 작동한다.



## ☆ 부모 컴포넌트에 정보 전달하기
데이터들이 닌자처럼 돌아다니게 할수 있다..익숙해지자

App(부모 컴포넌트) 에다가 함수를 만들고 자식 컴포넌트 props로 함수를 써넣는것이다.

그럼 자식이 props를 이용하여 무언가를 했을때  App에서 실행되면서 만든 함수가 동작할것이다.


우리는 App 에서 handleCreate 라는 메소드를 만들고, 

이를 PhoneForm 한테 전달해주겠다. 

그리고, PhoneForm 쪽에서 버튼을 만들어서 submit 이 발생하면 

props 로 받은 함수를 호출하여 App 에서 파라미터로 받은 값을 사용 할 수 있도록 하겠다.
```javascript
// file: src/App.js
import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default App;
```

그 다음엔, PhoneForm 에서 버튼과 onSubmit 이벤트를 설정하겠다.

```javascript
// file: src/components/PhoneForm.js
import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
```

handleSubmit 함수를 확인해보자. 

맨 위에 e.preventDefault() 라는 함수가 호출됐지? 

이 뜻은, 원래 이벤트가 해야 하는 작업을 방지시킨다는 의미이다. 

원래는 form 에서 submit 이 발생하면 페이지를 다시 불러오게 되는데, 

그렇게 되면 우리가 지니고있는 상태를 다 잃어버리게 되니까 이를 통해서 방지해주었다.

그 다음에는, props 로 받은 onCreate 함수를 호출하고, 상태값을 초기화해주었다.

render 부분에서는 submit 버튼을 만들고, form 부분에 onSubmit 이벤트를 등록해주었다.

코드를 다 작성하셨으면, 제대로 작동하는지 확인해보자.

반복해서 학습해보자.

## 배열 다루기, 생성과 렌더링

자바스크립트에서 배열을 다뤄보신분이라면 그냥 배열에 데이터를 추가할 때, 

push 를 사용하니까 this.state.array.push('some value'); 이런식으로 하면 되겠지? 

절.대.안 됨.
