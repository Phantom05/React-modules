const React = require('react');
const { Component } = React;
const { useState, useRef } = React;

// hooks로 바꿔보기

class WordRealy extends Component{
  state={
    word: '제로초',
    value: '',
    result:'',
  }
  onSubmitForm = (e)=>{
    e.preventDefault();

    if(this.state.word[this.state.word.length-1] == this.state.value[0]){
      this.setState({
        result:'딩동댕',
        word:this.state.value,
        value:"",
      });
      this.input.focus(); 
    }else{
      this.setState({
        result:'떙',
        value:''
      })
    }
  }
  onChangeInput = (e)=>{
    this.setState({ 
      value:e.currentTarget.value
    })
  }

  input;
  onRefInput = (c) =>this.input = c;

  render(){
    return(
      <>
        <div>{this.state.word}</div>
        <form action="" onSubmit={this.onSubmitForm}>
          <label htmlFor="wordInput">글자를 입력하세요.</label>
          <input id="wordInput" className="wordInput" ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} type="text"/>
          <button type="submit">클릭 !!!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}
 
// const WordRealy = () => {
//   const [res,setRes] = useState(true);

//   doShot = (e) =>  (res)?setRes(false):setRes(true) 
//   return (
//     <>
//       <button onClick={doShot}>클릭</button>
//       <div id="res">{(res)?'hello':'world'}</div>
//     </>
//   )
// }

module.exports = WordRealy