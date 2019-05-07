# React Study Project

MVC 패턴중 오직 V만 신경 쓰는 라이브러리.

데이터가 바뀔때마다 랜더링 하는데 어떻게 성능을 최적화 할 수 있을까?

여기서 리랜더링의 개념이 중요하다.

**초기랜더링**

render(){ ... }

돔 자체는 빠르나, 태그가 많아지고 동적이게 되면 계속 css를 다시연산하고 레이아웃을 구성하고 패이지를 리페인트해서 이 과정에서 시간이 허비됨



 Virtual DOM

Vitual DOM을 사용하면 실제 DOM에 접근하여 조작하는 대신, 이를 추상화한 자바스크립트 객체를 구성하여 사용합니다. 마치 실제 DOM의 가벼운 사본과 비슷하죠



리액트에서 데이터가변하여 웹 브라우저에 실제 DOM을 업데이트 할 때는 다음 세 가지 절차를 밟습니다.

1. 데이터를 업데이트하면 전체 ui를 Virtual DOM에서 리렌더링 합니다.
2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교합니다.
3. 바뀐 부분만 실제 DOM에 적용합니다.

Reactjs Code Snippet 을 다운 받았으면 파일 만들고 rcc 하고 엔터누르면 자동완성댐



### prop

properties의 줄임말 속성의 줄임말

prop은 해당 컴포넌트를 불러와 사용하는 **부모 컴포넌트**에서만 설정 가능

자식은 읽기전용만 가능.

```react
 App-
 <MyComponent name="React"/>
 문자열 외의 값을 입력할떈 {}로 감싸줌
 <MyComponent name={3}/>
 
 Component-
 안녕하세요, 제 이름은 {this.props.name} 입니다.
 props에 접근할떈 이렇게 this키워드를 사용하여 접근
```



만약 props가 설정되어 잇지 않다면 기본값을 줄수 있따.

```react
MyComponent.defaultProps= {
  name:'기본 이름'
}

class 내부에쓰려면
  static defaultProps ={
    name: '기본 이름'
  }
  이런식으로 쓰면 됨.
```

이론식으로 넣어놓으면 부모 props에 값이 없을떄 기본으로 가져옴

```react
MyComponent.PropType={
  name: PropTypes.string //name props 타입을 문자열로 설정합니다.
}
이런식으로 prop의 타입을 설정할 수도 있다.

타입이 틀링경우 콘솔을 열어 확인해보면 오류를 볼 수 있따.
```



props를 지정하지 않았을 떄, 오류 창을 띄우는 방법

propTypes을 설정할댸 isRequired를 붙혀주면 됨.

```react
  static propTypes = {
    name: PropTypes.string, //name props 타입을 문자열로 설정합니다.,
    age: PropTypes.number.isRequired // 필수적으로 존재해야하며 숫자임.
  }
```

propType의 종류

1. array 배열
2. bool 참,거짓
3. func 함수
4. number 숫자
5. object 객체
6. string 문자열
7. symbol 심볼
8. node 랜더링 할 수 있는 모든 것, 숫자,문자,element 또는 이들로 구성된 배열
9. element 리액트 요소
10. isntanceOf(MyClass) 특정 클래스의 인스턴스
11. oneOf(['Male', 'Female']) 주어진 배열 요소 중 값 하나
12. oneOfType([React.PropTypes.string, React.PropTypes.number]) 주어진 배열안의종류 중 하나
13. arrayOf(React.PropTypes.number) 주어진 종류로 구성된 배열
14. objectOf(React.PropTypes.number) 주어진 종류의 값을 가진 객체
15. shape({name: React.PropTypes.string, age: React.PropTypes.number}) 주어진 스키마를 가진 객체
16. any 아무 종류



### state

컴포넌트 내부에서 읽고 또 업데이트를 할 수있는 값을 사용하려면 state를 써야함.

```react
  constructor(props){
    super(props);
    this.state = {
      number: 0
    }
  }
  
  
   <p>숫자: {this.state.number}</p>
   이런식으로 사용할수 있고
   스테이트의 값을 변경하려면
   
   <button onClick={()=>{
      this.setState({
      number: this.state.number+1
     })
    }} >더하기</button>
        
        이런식으로 사용하면 됨
   
```



```react
function BlockDog(){
  this.name = '흰둥이';
  return {
    name:'검둥이',
    bark:function(){
      console.log(this.name+': 멍멍!');
    }
  }
}
const blackDog = new BlockDog();
blackDog.bark()

function WhiteDog(){
  this.name = '흰둥이';
  return {
    name:'검둥이',
    bark:()=>{
      console.log(this.name+': 멍멍!');
    }
  }
}

const whiteDog = new WhiteDog();
whiteDog.bark()

일반 함수는 자신이 종속된 객체를 this로 가리키며, 화살표함수는 자신이 종속된 인스턴스를 가리킵니다.
```



```react
state는 constructor 말고 그냥
  state = {
    number: 0
  }
  이렇게 사용해도 됨.
```

state값을 업데이트할 떄 주의사항

state는 항상 .setState로만 업데이트를 해야함.

예를 들어 다음 코드는 잘못된 코드임

```react
this.state.number = this.state.number +1;
this.state.someArray.push(3);
this.state.simObjext.value = 3;
```

setState()메서드가 하는 역할은 파라미터로 받은 필드를 업데이트한 후 컴포넌트가 리렌더링하도록 트리거하는것임.

하지만 이렇게 state에 직접 접근하여 값을 수정하면 컴포넌트를 자동으로 리렌더링 하지 않음.

this.forceUpdate()로 강제로 리렌더링을 시작할 수 있지만, 이방식은 매우 빞효율 적이므로 피해야함.



**그렇다면 배열이나 객체를 업데이트 할 때는 어떻ㄱ ㅔ해야할까?**

이럴떄는 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트한 후 사본으로 값을 설정하는 방식으로 진행해야함.





### 리액트에서의 이벤트 핸들링

```react
<button onClick={()=>{
    this.setState({
        number:this.state.number +1
    })
}}>더하기 </button>
이런식으로 사용하는데 ,
```

1. 이름은 카멜 케이스로 작성
2. 이벤트에 실행할 자바스크립트 코드는 전달하는것이 아니라 함수 형태의 값을 전달함.
3. DOM 요소에만 이벤트를 설정할 수 있음. 컴포넌트에는 이벤트를 자체적으로 설정할 수 없음. 
   예를 들어 MyCompoennt에다가 onClick이벤트를 설정할 수 ㅅ없음.

**이벤트 종류**

| 이벤트 종류 |           |       |             |
| ----------- | --------- | ----- | ----------- |
| Keyboard    | Selection | Focus | Clipboard   |
| Touch       | UI        | Image | Form        |
| Wheel       | Animation | Media | Composition |
| Transition  |           |       |             |



리액트의 새로운 컴포넌트 안에서 함수를 만들때 this바인딩을 해줘야함

```react
  /**
   * 
   * @컴포넌트에 임의 메서드를 만들면 기본적으로  this에 접근할 수 없습니다.
   */
  constructor(props){
    super(props);
    console.log(props);
    console.log(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    //위처럼 바인드를 해주지 않으면 여기 this에서 언디파인드가 뜸.
    console.log(this)
    this.setState({
      message:e.target.value
    });
  }
  handleClick(){
    alert(this.state.message);
    this.setState({
      message:''
    });
  }
```

```react
  handleChange=(e) =>{
    this.setState({
      message:e.target.value
    });
  }
  handleClick=()=>{
    alert(this.state.message);
    this.setState({
      message:''
    });
  }
  // 화살표 함수를 사용하면 this가 자연스레 자신의 부모 객체가 바인딩 되서 편하게 사용 하능 컨스트럭트 없어도 됨.
```

```react
//또한 핸들링할떄 iuput이 여러개라 하면  
handleChange=(e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  //이런식으로 확장성 있게 만듬 target의 name과 target의 value를 가져옴
```











클래스컨트롤을 이런식으로도 가능함



```react
import React, { Component} from 'react';
import "./ValidationSample.css";

class VaildationSample extends Component {
  state = {
    password:'',
    clicked:false,
    validated:false
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleButtonClick =()=>{
    this.setState({
      clicked:true,
      validated:this.state.password === '0000'
    })
  }

  render(){
    return (
      <div>
        <input 
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked
                     ? (this.state.validated? "success" : "failure")
                     : ""}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default VaildationSample;
```

이런식으로  state에서 간단하게 처리해버리면 훨씬 빠름. 





## ref 개념 (reference)

ref는 전역적으로 사용하지 않고 컴포넌트 내부에서만 작동하기 떄문에 이런 문제가 생기지 않습니다.

ref는 특정 DOM에 작업을 해야할떄 사용하는것은 파악했음.

하지만대체 "어떤" 작업을 할 때 ref를 사용해야 할까?

정답은 : "DOM을 꼭 직접적으로 건드려야 할 때"

ref를 달아야하는 DOM에 ref속성을 추가할때는 props를 설정하듯이 하면 됨. ref값으로는 콜백 함수를 전달함.

```react
  handleButtonClick =()=>{
    this.setState({
      clicked:true,
      validated:this.state.password === '0000'
    });

    this.superman.focus();
  }

  render(){
    return (
      <div>
        <input 
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked? (this.state.validated? "success" : "failure"): ""}
          ref={(ref)=> {this.superman=ref}}
        />
        <button onClick={this.handleButtonClick} ref={(ref)=> {this.ayyo= ref}}>검증하기</button>

//이런식으로 되면 this의 ref 선정값에 따라 접근할 수 있음.
```



ref속성을 사용하면 자기 자신을 타게팅하기때문에

ref = {(ref)=> console.log(ref)}하면  ref를 넣은 엘리먼트가 찍힘 때문에

```react
ref ={(ref)=>this.superman =ref}를 하면 해당 클래스의 superman 프로퍼티에 ref를 넣은 엘리먼트를 넣겠다는 말이됨.! 이걸 props로 이용해서 부모컴포넌트에서 자식 컴포넌트를 이용할 수 있음!  props는 자식이 부모를 호출하는건대 이를 역이용할 수 있음!
```







```react
import ScrollBox from './ScrollBox';

class App extends Component {
  render(){
    return(
      <Fragment>
      <ScrollBox ref={(ref)=>this.scrollBox = ref} />
      <button onClick={()=> this.scrollBox.scrollToBottom()}>맨 밑으로</button>
       {/*
       바로 onClick={this.scrollBox.scrollToBottom()}을 해도 되지만  이럴경우 처음 렌더링할때 this가 indefined이므로 오류가 발생함 때문에 안쪽에다가 화살표함수를 만들어 주고 다시 호출하는 방식으로 해서 this의 바인딩을 제대로 해줄수 있음. ScrollBox 컴포넌트 안에 scrollToBottom 함수가 정의되어있음.
       */} 
      </Fragment>
    )
  }
}
```

```react
// ScrollBox 컴포넌트 
scrollToBottom = ()=>{
    const { scrollHeight, clientHeight } = this.box;
     this.box.scrollTop = scrollHeight - clientHeight;
  }

  render(){
  const style = {
    border:'1px solid black',
    height:"300px",
    width:'300px',
    overflow:'auto',
    position:'relative'
  };
  const innerStyle= {
    width:'100%',
    height:'650px',
    background:'linear-gradient(white, black)'
  };
  return(
    <div style={style}
        ref={(ref)=>{this.box=ref;}}>
        <div style={innerStyle}/>
    </div>
  )
  }
```





### key

인자값으로 인덱스 idx를 쓰는게 좋음. 리스트를 쓸때는

```react
  };
  render(){
    const names = ['눈사람','얼음','눈','바람'];
    const nameList = names.map((name,idx)=> (<li key={idx}>{name}</li>));

    return (
      <ul>
        {nameList}
      </ul>
    )
  }
  
  //이런식으로도 사용하고 
  
    state ={
    names:['눈사람','얼음','눈','바람']
  };

  render(){
    const nameList = this.state.names.map((name,idx)=> (<li key={idx}>{name}</li>));
    
    return (
      <ul>
        {nameList}
      </ul>
    )
  }
  //state로 이렇게도 사용함
  
```

```react
// 응용
import React, { Component } from 'react';

class IterationSample extends Component {
  state = {
    names: ['눈사람', '얼음', '눈', '바람'],
    name: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleInsert = () => {
    //names 배열에 값을 추가하고, name 값을 초기화합니다.
    this.setState({
      names: this.state.names.concat(this.state.name),
      // 기존 자바스크립트를 사용했다면 PUSH로 배열을 수정해도 되지 않을까 라고 생각할 수 있는데, STATE는 언제나 setstate로 업데이트해야하고 직접 접근해서 쓰면 안됨. 퓌쉬를하면 새로운 배열을 만드는거 기 때문에 nameList에서 이미 렌더링해논 배열이 오류가남. 해보셈. 떄문에 콘캣으로 붙혀줘야함. 
      name: ''
    })
  };

//이렇게도 수정가능
names:names.filter((item,i)=> i !== index)
// 필터는 기존의 배열을 수정해주는 메서드라 렌더링에 문제없이 수정 가능.

  handleRemove = (index) => {
    // 편의상 name의 레퍼런스를 마라 먼둡나더,
    const { names } = this.state;
    /**'
     * 배열을 자르는 내장 함수 slice와
     * 전개 연산사(...)를 사용하여 idnex번쨰 값을 제외한 값들을 
     * 배열에 넣어줍니다.
     */

    this.setState({
      names: [
        ...names.slice(0, index),
        ...names.slice(index + 1, names.length)
      ]
    });
  }
  render() {
    const nameList = this.state.names.map(
      (name, idx) => (
        <li
          key={idx}
          onDoubleClick={()=> this.handleRemove(idx)}> 
          {/* 바로  onDoucleClick={this.handleRemove}로 하게되면 this가 언디파인인점 인지 */}
          {name}
        </li>
      )
    );

    return (
      <div>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <button onClick={this.handleInsert}>추가</button>
        <ul>
          {nameList}
        </ul>
      </div>
    )
  }
}

export default IterationSample;
```

중요한점은 state에 있는 배열을 수정할떄는 concat, slice, filter를 함수등을 이용해서 새로운 배열을 만든후 setState로 적용해야한다는점이 중요. push처럼 직접적으로 수정하면 안됨. setState로 name: 여기안을 바꿔줘야함.



## 컴포넌트 사이클 (다시보기)

모든 리액트 컴포넌트에는 라이프사이클(수명 주기)가 존재합니다. 컴포넌트 수명은 페이지에 렌더링 되기 전 준비 과정에서 시작하여 페이지에서 사라질 떄 끝납니다.



- Will 접두사가 붙은 메서드는 어던 작업을 작동하기 **전**에 실행되는 메서드고
- Did 접두사가 붙은 메서드는 어떤 작업을 작동한 **후**에 실행되는 메서드임.

이 메서드들은 우리가 컴포넌트 클래스에서 덮어써서 선언하여 사용할 수 있다.

라이프 사이클은 총 세 가지, 즉 **마운트, 업데이트, 언마운트** 카테고리로 나눔.



마운트로 컴포넌트가 페이지에 나타나고,

컴포넌트가 업데이트 되고,

언마운트로 컴포넌트가 페이지에서 사라짐.



DOM이 생성되고 웹브라우저상에 나타나는 것을 마운트라고 함.

이떄 호출하는 메서드는 다음과 같음.



**마운트**

컴포넌트 만들기

constructor : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드

getDerivedStateFromProps : props에 있는 값을 state에 동기화하는 메서드

render : 우리가 준비한 UI를 랜더링하는 메서드

componentDidMount  : 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드



**업데이트** (다시보기)

1. props가 바뀔 때
2. state가 바뀔 때
3. 부모 컴포넌트가 리 렌더링 될 때
4. this.forceUpdate로 강제로 렌더링을 트리거할 때

이렇게 컴포넌트를 업데이트할 떄는 다음 메서드를 호출함.



**언마운트**

바운트의 반대 과정, 컴포넌트를 DOM에서 제거하는 것을 언마운트라고 함.

componentWillUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드





### redner

render 메서드 안에선 절대로 state를 변경해선 안되며, DOM 정보를 가져오거나 변화를 줄 때는 **componentDidMount **에서 처리해야 함



### constructor 메서드

컴포넌트의 메서드로 컴포넌트를 만들떄 처음으로 실행됨. 이메서드는 초기 state를 정할 수 있음.





## 함수형 컴포넌트

state등 불필요한 기능을 제거한 상태이기 떄문에 일반 클래스형 컴포넌트보다 메모리 소모양이 적다.

따라서 컴포넌트를 만들떄 대부분 함수형으로 작성하여  state를 사용하는 컴포넌트 개수를 줄이는 방향으로 향하며, state난 라이프사이클 API를 꼭 써야할 때만 클랫 ㅡ형태로 변환하여 컴포넌트를 작성하면 된다.







# 제로초 리액트강의



# setState를 쓸땐 항상 리턴해주기

npm i react, react-dom

- ref

ref={(c)=> {this.hello = c }} 해주고 원하는곳에다가 this.hello.focus() 해주면 해당태그로 포커스됨 대박..

스테이트가 바뀔때마다 컴포넌트가 렌더링 됨.

this.setState를 설정할떄 마다 렌더링이됨

ref={this.onRefInput} 

onRefInput = (c) => this.hello = c;

this.hello.focus()



class => className 

label의 for => htmlFor

웹팩 설치시 -D로해서 webpack webpack-cli 를 설치 개발에서만 웹팩이 쓰임.

webpack.config.js 생성

client.jsx생성 후 

const React = require('react');

const ReactDOM = require('react-dom');

리액트 시작

<https://www.youtube.com/watch?v=I5cBd6ZfEOs> 1시간부근부터



npm i -D style-loader css-loader mini-css-extract-plugin node-sass sass-loader





ERROR in ./client.jsx 6:16
Module parse failed: Unexpected token (6:16)
You may need an appropriate loader to handle this file type.
| const WordRealy = require('./WordRealy');
|

> ReactDOM.rander(<WordRealy />, document.querySelector('#root'))
> @ multi ./client app[0]

이 오류는 jsx를 못읽겠다는거라 바벨로 설정을 해줘야함.







npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader @babel/plugin-proposal-class-properties babel-polyfill

바벨사용, 바벨 버전, 리액트에서 사용할 바벨, 바벨과 리액트 연결, state사용



onChange랑 value를 세트로 넣을게 아니면 defaultValue를 사용해서 input을써라

npm i -D

react-hot-loader ->

webpack-dev-server -> 자동으로 nodemon같은거 웹팩을 빌드하고 서브로 계쏙 돌려ㅑ줌

 hot로더를 쓰면 웹팩안에서 파일이 dist폴더안에 app.js가 있으면 안되고 index.html에서 결고도 바로 app으로 해줘야함.





리액트 크롬에서 설정버튼 누르고 하이라이트 업데이트하면 랜더링되는 부분이 표시됨 보더로

랜더링이 많이 될 수록 빨간색으로됨, 또 불필요한 랜더링을 잡아줄 수 있음 인풋을 쓰는데 다른 컴포넌트가 랜더링 된다던가 그러면 잡아줘야함



// 함수컴포넌트의 경우 랜더링 될때마다 함수컴포넌트 자체가 다 실행됨.

  startTime; // 랜더링이 일어나게 하고 싶지 않은 애들은 이렇게 클래스에 저장함 얘네는 바껴도 랜더링이 안됨.

  endTime;

com



componentWillMount render componentDidMount

componentDidMount를 이용하여 재미난것들 할수있음.



  // Render : componentWillMount() -> render() -> componentDidMount()

  // Update compoenntwillReceiveProps() => shouldComponentUpdate()[true일떄 진행] => comopnentWillUpdate()[여기에 loading을 숨기면됨. 엄데이트 되는 중이니까.] -> render() => componentDidUpdate()

  // sould -> 옛날 props와 지금 props가 바뀌면 실행 바뀔시 willUpdate실행



```jsx
  state={
    greeting:'Hello',

  }
  componentDidMount() {
    console.log('did mount')

     setTimeout(() => {
       this.setState({
         greeting:'Hello again!'
       })
     }, 3000);
  }
```

```jsx
 {this.state.movies ? this._renderMovies() : 'Loading..'}
이런식으로 로딩도 3초후에 로딩되는거처럼 진행가능
```

```jsx
    setTimeout(() => {
        this.setState({
          movies:[
            {
              title:'올드보이',
              poster:"https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/6rIc/image/gCQXUtxPRSKlcl8QbUzOIUtLpxI"
            },
            {
              title:'어벤져스',
              poster:"http://mblogthumb1.phinf.naver.net/MjAxODA0MjVfOTcg/MDAxNTI0NjYzMTE2MTA1.eHwbsaLucqbmJ-r46JTLiZFoNyRB6lzKSPTPaL1hFxsg.0P4D_k8NkJaZY-m3YIrpez6SBScEIFVMf2L66Rg93bMg.JPEG.eyes2eyes4u/image_1358164111524663104686.jpg?type=w800"
            },{
              title:"스타워즈",
              poster:'http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web.jpg'
            },
          ]
        })
    }, 2000);


```



async는 비동기 async await 쓸때 babel-polyfill을 써야함.

실무에서는 프론트서버와 백엔드서버를 분리함.

Hooks에서는 빈변수를 만들때 useRef로 만듬. 그리고 빈변수를 사용할떈 

빈변수.current로 사용함.



처음 마운트가 일어날떄 did마운트가 실행되면 업데이트될떈 또 일어나지 않음.

Hooks 는 라이프 사이클이 없음.



컴포넌트를 생성 할 때는 **constructor** -> **componentWillMount -> render -> componentDidMount** 순으로 진행됩니다.

컴포넌트를 제거 할 때는 **componentWillUnmount** 메소드만 실행됩니다.

컴포넌트의 **prop**이 변경될 때엔 **componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate** 순으로 진행됩니다



### componentDidMount

```
componentDidMount(){
    console.log("componentDidMount");
}
```

> 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
> 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
> setTimeout, setInterval 및 AJAX 처리 등을 넣습니다

// 메서드에다가 interval 써줘도 되지만 componentWillunmount에서 clear해주는것은 필수임

//왜냐면 화면이 바뀌거나, 삭제할떄마다 삭제해줘야함 안그러면 계속 비동기에서 돌고있음 spa이기 때문에 화면이 남아있음.

```jsx
componentWillUnmount() {
    this.timeouts.forEach(v => {
      clearTimeout(v);
    });
  }
//이런식으로 꼼꼼하게 다 없애줘야함

```

// 항상 memo나 PuerComponent를 할것.

willmount, WillReceiveProps, willupdate는 사라짐 쓰지말것.

리액트할떄 함수마다 콘솔을 찎고 필요할떄만 실행되는게 맞는지 해보기.

useMemo, useEffect, useCallback 은 두번째인자를 바꾸면서 컨트롤해야 값이 바뀜

안그럼 계속 기억하고있기때문에 재렌더링이 안됨.