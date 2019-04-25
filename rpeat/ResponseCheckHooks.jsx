import React, { Component, memo } from 'react';

const ResponseCheckHooks = memo(() => {
  const [ state,setState ] = React.useState('waiting');
  const [ result,setResult ] = React.useState([]);
  const [ message,setMessage ] = React.useState('클릭하여 시작해주세요!');
  ResponseCheckHooks.timeOut;
  ResponseCheckHooks.startTime;
  ResponseCheckHooks.endTime;
  const hooksOnclick  =(e)=>{
    if (state == 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요!');
      ResponseCheckHooks.timeOut = setTimeout(() => {
          setState('now');
          setMessage('지금 클릭하세요!');
          ResponseCheckHooks.startTime= new Date();
        }, Math.floor(Math.random() * 1000) + 2000)
    } else if (state === 'ready') {
      clearTimeout(ResponseCheckHooks.timeOut);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요')
    } else if (state === 'now') {
      ResponseCheckHooks.endTime = new Date();
      setState('waiting')
      setMessage('클릭해서 시작하세요.')
      setResult((prevState)=>[...result, ResponseCheckHooks.endTime - ResponseCheckHooks.startTime])
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