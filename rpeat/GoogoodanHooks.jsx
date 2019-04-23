import React, { Component } from "react";

const GoogoodanHooks = () =>{
  const [ title,setTitle ] = React.useState('구구단-훅스')
  const [ first,setFirst ] = React.useState(Math.ceil(Math.random()*9));
  const [ second,setSecond ] = React.useState(Math.ceil(Math.random() *9));
  const [ value,setValue ] = React.useState('');
  const [ result,setResult ] = React.useState('');
  const iRef = React.useRef(null);

  const onSumbitForm = (e) =>{
    e.preventDefault();
    if(first * second == value){
      setResult((prevResult)=>{
        return `정답입니다!! ${value}`
      })
      setFirst(Math.ceil(Math.random() *9));
      setSecond(Math.ceil(Math.random() *9));
      setValue('')
    }else{
      setResult((prevResult)=>{
        return `떙 !`
      })
      setValue('')
    }
    iRef.current.focus();
  }
  const onInputChange = (e) => setValue(e.target.value);
    return(
      <>
        <h2>{title}</h2>
        <div>
          <b>{first} x {second}</b> = ?
        </div>
        <form action="" onSubmit={onSumbitForm}>
          <input ref={iRef} type="text" value={value} onChange={onInputChange}/>
          <input type="submit" value="입력" />
        </form>
        <div>{result}</div>
      </>
    )
}


export default GoogoodanHooks;