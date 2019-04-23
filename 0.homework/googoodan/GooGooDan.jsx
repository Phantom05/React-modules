const React = require('react');
// const { Component } = React;

const GooGooDan =() =>{
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const [timer, setTimer] =React.useState(3000);
  const [tmpTimer, setTmpTimer] =React.useState(timer);
  const getFocus = React.useRef(null);
  
  doInputChange = (e) =>{
    setValue(e.target.value)
  }
  
  doFormSubmit = (e) =>{
    e.preventDefault();
    if(value == first * second){
      setResult(`정답입니다! 입력 값 : ${value} 결과는 ${timer / 1000}초 후에 사라집니다.`);
      setFirst(Math.ceil(Math.random() * 9))
      setSecond(Math.ceil(Math.random() * 9))
      setValue('');

      setTimeout(() => {
        setResult(``);
      }, timer);

    }else{
      setResult(`땡, 결과는 ${timer / 1000}초 후에 사라집니다.`)
      setValue('')

      setTimeout(() => {
        setResult(``);
      }, timer);
    }
    getFocus.current.focus();
  }

  doReset = (e) =>{
    e.preventDefault();
    setFirst(Math.ceil(Math.random() * 9))
    setSecond(Math.ceil(Math.random() * 9))
    setValue('')
  }

  console.log('랜더링')
  return(
    <div>
      <form action="/googoodan" method="POST" onSubmit ={doFormSubmit} id="googooDanForm">
        <div>{first} x {second} ? </div>
        <input ref={getFocus} type="number" value={value} onChange={doInputChange}/>
        <button type="submit">Submit!</button>
        <button onClick={doReset}>Reset!</button>
      </form>
      <div>{result}</div>
    </div>
  )
}

module.exports = GooGooDan;
