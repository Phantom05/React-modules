import React, { Component } from 'react';

const WordRelayHooks = () => {
  const [ title,setTitle] = React.useState('끝말잇기-훅스');
  const [word,setWord] = React.useState('');
  const [result,setResult] = React.useState('');
  const [ btnTxt , setBtnTxt] = React.useState('시작!');
  const [boo,setBoo] = React.useState(true);
  const [value,setValue] = React.useState('');
  const rp = React.useRef(null);

  const doSubmit =(e) => {
    e.preventDefault();
    console.log(e.target)
    if(boo){
      setBoo(false)
      setBtnTxt('입력!')
      setWord(value)
      setValue('')
    }else{
      if(word[word.length-1] == value[0]){
        setWord(value)
        setValue('')
        setResult('정답!')
      }else{
        setValue('')
        setResult('땡!')
      }
    }
    rp.current.focus();
  }
  const changeValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <b>{word}</b>
      </div>
      <form action="" onSubmit={doSubmit}>
        <input type="text" ref={rp} value={value} onChange={changeValue} />
        <input type="submit"  value={btnTxt} />
      </form>
      <div>{result}</div>
    </div>
  );
};

export default WordRelayHooks;