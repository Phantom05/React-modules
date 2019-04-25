import React, { Component, memo, useStat, useRef } from 'react';
// 훅스에서는 this의 속성들을 ref로 표현함
const ResponseCheckHooks = memo(() => {
  const [ state,setState ] = React.useState('waiting');
  const [ result,setResult ] = React.useState([]);
  const [ message,setMessage ] = React.useState('클릭하여 시작해주세요!');
  // ResponseCheckHooks.timeOut; 요로쿰 은 안씀
  // ResponseCheckHooks.startTime;
  // ResponseCheckHooks.endTime;
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const hooksOnclick  =(e)=>{
    if (state == 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요!');
      timeout.current = setTimeout(() => {
          setState('now');
          setMessage('지금 클릭하세요!');
          startTime.current= new Date();
        }, Math.floor(Math.random() * 1000) + 2000)
    } else if (state === 'ready') {
      clearTimeout(ResponseCheckHooks.timeOut);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요')
    } else if (state === 'now') {
      endTime.current = new Date();
      setState('waiting')
      setMessage('클릭해서 시작하세요.')
      setResult((prevState)=>[...result, endTime.current - startTime.current])
    }
  }

  const onReset = (e) =>{
    setResult([])
  }
  const renderAverage = (e)=>{
    return result.length === 0
    ? null 
    : 
    <>
      <div>평균 시간 : {result.reduce((a,c) => a+c) / result.length}ms</div>
      <button onClick={onReset}>onReset </button>
    </>
  }

  return (
    <div>
      <div 
      id="screen"
      className={state}
      onClick={hooksOnclick}
      >{message}</div>

      <div>
        {renderAverage()}
      </div>
      {console.log(result)}
    </div>
  );
})

export default ResponseCheckHooks;