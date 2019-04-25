import React, { Component } from 'react';
// 함수컴포넌트의 경우 랜더링 될때마다 함수컴포넌트 자체가 다 실행됨.
class ResponseCheck extends Component{
  state = {
    state:'waiting',
    message:'클릭해서 시작하세요.',
    result:[]
  };

  timeout;
  startTime; // 랜더링이 일어나게 하고 싶지 않은 애들은 이렇게 클래스에 저장함 얘네는 바껴도 랜더링이 안됨.
  endTime;

  onClickScreen= () =>{
    const { state, message, result } = this.state;
    if(state === 'waiting'){
      this.setState({
        state:'ready',
        message:'초록색이 되면 클릭하세요.',
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state:'now',
          message:'지금 클릭',
        });
        this.startTime = new Date();
      }, Math.floor(Math.random()* 1000)+2000); // 2~3초 랜덤
    }else if (state === 'ready'){ // 성급하게 클릭
      clearTimeout(this.timeout);
      this.setState({
        state:'waiting',
        message:'너무 성급하시군요! 초록색이 된 후에 클릭하세요.'
      });

    }else if (state === 'now'){ // 반응속도 체크
      this.endTime = new Date();
      this.setState((prevState) => {
        return{
          state:'waiting',
          result:[...prevState.result,this.endTime - this.startTime],
          message:'클릭해서 시작하세요',
        }
      })
    }
  };

  onReset = (e)=>{
    this.setState({
      result:[],
    })
  }

  renderAverage =() =>{
    return this.state.result.length === 0
    ? null 
    : 
    <>
      <div>평균 시간 : {this.state.result.reduce((a,c) => a+c) / this.state.result.length}ms</div>
      <button onClick={this.onReset}>onReset </button>
    </>
  }


  
  componentWillMount() {
    console.log('will mount'); 
    // 리액트 세계에 컴포넌트 사이클이 시작됨을 알려줌
  }

  componentDidMount() {
    console.log('did mount') 
    // 리액트 세계에 컴포넌트가 제대로 자리잡았을때를 알려줌
  }
  
  
  //jsx안에서 for과 if를 못씀
  render(){
    // 랜더링 안에선 for이랑 if를 못씀
    console.log('did render')
    // 리액트세계에 컴포넌트가 존재함을 알려줌
    const { state, message } = this.state;
    return(
      <>
        <div  
        id="screen" 
        className={state} 
        onClick={this.onClickScreen}
        >
         {message}
        </div>
        <div>
          {/* 아무것도 안보여주려면 null로 삼항에 표기하면 됨 */}
          {this.renderAverage()}
          {console.log(this.state.result)}
        </div>
      </>
    )
  }
}

export default ResponseCheck;