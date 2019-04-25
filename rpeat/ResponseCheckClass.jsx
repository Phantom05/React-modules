import React, { PureComponent } from 'react';

class ResponseCheckClass extends PureComponent {
  state = {
    state: 'waiting',
    result: [],
    message: '클릭하여 시작해주세요!',
  }
  timeOut;
  startTime;
  endTime;

  doCheckResponseCheck = () => {
    const { state, result, message } = this.state;
    if (state == 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요!'
      })

      this.timeOut = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭하세요!'
        })
        this.startTime = new Date();

      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === 'ready') {
      clearTimeout(this.timeOut);
      this.setState({
        state: 'waiting',
        message: '너무 성급하시군요! 초록색이 된 후에 클릭하세요'
      });
      

    } else if (state === 'now') {
      this.endTime = new Date();

      this.setState((prevState) => {
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요.',
          result: [...prevState.result, this.endTime - this.startTime]
        }
      })
    }
  }

  onReset = () =>{
    this.setState({
      result:[]
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

  render() {
    const {state, message, result} = this.state;
    return (
      <>
        <div
          id="screen"
          className={state}
          onClick={this.doCheckResponseCheck}>
          {message}
        </div>
        <div>
          {this.renderAverage()}
        </div>
        {console.log(result)}
      </>
    )
  }
}

export default ResponseCheckClass;