import React, { Component } from 'react';
// 클리어은트 jsx에서 렌더링 되는순간. 클래스들의 메서드들이 다 설정되고. 

// 클래스의 경우 -> constructor -> render -> ->ref -> 
// -> componentDidMount -> (setState/props 바뀔때 -> shouldComponentUpdate -> render -> componentDidUpdate)
// 부모가 나를 없앴을 때 => componentWillUnmount -> 소멸

const rspCoords ={
  바위:'0',
  가위:'-142px',
  보:'-284px',
}

const scores = {
  가위:1,
  바위:0,
  보:-1
};

const computerChoice = (imgCoord) =>{
  return Object.entries(rspCoords).find(function(v) {
    return v[1] === imgCoord;
  })[0];
};

class RSP extends Component{
  state = {
    result:'',
    imgCoord:'0',
    score:0,
  }

  interval;
  componentDidMount() { // 컴포넌트가 첫 렌덜이된 후
    console.log('did mount')
    // 비동기는 여기다가함.
    this.interval = setInterval(() =>this.changeHand() ,1000 ); // 셋인터벌 셋타임아웃 다 메모리를 먹음.
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return true 일때 리랜더링
  //   return false 이면 리랜더링이 안일어남
  // }
  // 렌더링 안에선 setState가 들어가면안됨. 무한 렌더링이 일어남.
  
  componentWillMount() { // 컴포넌트가 제거되기 직전 부모가 자식컴포넌트를 없앨때
    console.log('will mount');
    clearInterval(this.interval)
  }

  changeHand = ()=>{
    const { imgCoord } = this.state;
    if(imgCoord === rspCoords.바위){
      this.setState({
        imgCoord:rspCoords.가위,
      })
    }else if (imgCoord === rspCoords.가위){
      this.setState({
        imgCoord:rspCoords.보,
      })
    }else if (imgCoord === rspCoords.보){
      this.setState({
        imgCoord:rspCoords.바위,
      })
    }
  }

  onClickBtn = (chioce)=> ()=> {
    const { imgCoord } = this.state;
    clearInterval(this.interval)
    const myScore = scores[chioce];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if(diff === 0){
      this.setState({
        result:'비겼습니다.',
      });
    } else if([-1,2].includes(diff)){
      this.setState((prevState)=>{
        return {
          result:'이겼습니다.!',
          score: prevState.score +1,
        };
      });
    } else{
      this.setState((prevState)=>{
        return {
          result:'졌습니다!',
          score: prevState.score - 1,
        };
      });
    }

    setTimeout(() => {
      this.interval = setInterval(() =>this.changeHand(),1000 );
    }, 2000);
    
  }
  
  
  render(){
    console.log('render')
    const { result , score, imgCoord } = this.state;
    return(
      <>
        <div id="computer" style={{background : `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}>
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={()=> this.onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={()=> this.onClickBtn('보')}>보</button>
          {/*  <button id="paper" className="btn" onClick={()=> this.onClickBtn('보')}>보</button>
          저렇게 (e)=> this.onCluckBtn() 이건 클래스안에서 이거와 같음.
          onCluckBtn = (value)=> (e) =>{
            이렇게 되면 뒤쪽으로 인수를 넣고 인ㅇ수를 사용하고 e도 e.preventDatult처럼 사용할 수 있음.
            e.preventDafault();
          } 중첩함수 만드는것 같음.
        */}
        </div>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    )
  }
}

export default RSP