import React, { Component } from 'react';

class GoogoodanClass extends Component{
  constructor(props){
    super(props)
  }
  state = {
    title:'구구단-클래스',
    first:Math.ceil(Math.random() * 9),
    second:Math.ceil(Math.random() * 9),
    result:'',
    value:'',
  };
  onSubmit =(e) =>{
    e.preventDefault();
    let thisElm = e.target;
    if(this.state.first * this.state.second == this.state.value){
      this.setState((prevState)=>{
        return {
          first:Math.ceil(Math.random() * 9),
          second:Math.ceil(Math.random() * 9),
          result:`정답은 ?  ${prevState.value}`,
          value:''
        }
      })
    }else{
      this.setState({
        result:`땡!!`,
        value:'',
      })
    }
    this.focusR.focus()
  }

  onChangeInput = (e) =>{
    this.setState({value:e.target.value})
  }

  inputRef = (e) =>this.focusR = e;

  render(){
    const { title, first, second, result, value } = this.state;
    return(
      <>
        <h2 className="goo__title">{title}</h2>
        <div>
          <b>{first} x {second}</b> = ?
        </div>
        <form action="" onSubmit={this.onSubmit}>
          <input ref={this.inputRef} type="text" value={value} onChange={this.onChangeInput} />
          <button type="submit">입력</button>
        </form> 
        <div>{result}</div>
      </>
    )
  }
}

export default GoogoodanClass;