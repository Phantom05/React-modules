import React, { Component } from 'react';

class WordRelayClass extends Component {
  state = {
    title: '끝말잇기-클래스',
    result: "",
    value: '',
    word: '',
    timing: {
      boo: true,
      btnTxt: '시작!'
    },
    test:'A'
  }
  wordFormSubmit = (e) => {
    const { timing: { boo }, value, word } = this.state;
    e.preventDefault();
    if (boo) {
      this.setState({
        word: value,
        timing: {
          btnTxt: '입력!',
          boo: false,
        },
        value: '',
      })
    }else{
      if (this.state.word[word.length - 1] == value[0]) {
        this.setState({
          word: value,
          value: '',
          result: '딩동댕'
        })
      } else {
        this.setState({
          value: '',
          result: '땡 !'
        })
      }
    }
    this.refIn.focus();
  }
  doChangeInput = (e) => {
    this.setState({ value: e.target.value });
  }

  btnClick = (e) => {
    console.log('click')
    this.setState((prevState)=>{
      return {
        test:prevState.test + prevState.test
      }
    })
    console.log(this.state.test)
  }

  refInput = (c) => this.refIn = c;

  render() {
    const { title, value, result, word, timing: { btnTxt } } = this.state
    return (
      <>
        <h2>{title}</h2>
        <b>{word}</b>
        <form action="" onSubmit={this.wordFormSubmit}>
          <input ref={this.refInput} type="text" value={value} onChange={this.doChangeInput} />
          <input type="submit" value={btnTxt} onClick={this.btnClick} />
        </form>
        <div>{result}</div>
      </>
    )
  }
}

export default WordRelayClass;