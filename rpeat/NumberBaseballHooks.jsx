import React, {Component} from 'react';
import Try from './Try';

function getNumbers(x) { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array =[];
  for(let i = 0 ; i < 4 ; i++){
    const chosen = candidate.splice(Math.floor(Math.random()* (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseballHooks = () => {
  const [ title,setTitle] = React.useState('숫자야구-훅스');
  const [ result,setResult ] = React.useState('');
  const [ value,setValue] = React.useState('');
  const [ answer,setAnswer ] = React.useState(getNumbers());
  const [ tries,setTries ] = React.useState([]);

  const doSubmit =(e)=>{
    e.preventDefault();
    
    if(value === answer.join('')){
      setResult('홈런!');
      setTries((prevState)=>{
        return [...prevState, {try : value, result:'홈런!'}]
      })
      alert('게임을 다시 시작합니다.');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    }else{
      const answerArray = value.split('').map((v)=> parseInt(v));
      let strike = 0;
      let ball = 0;
      if(tries.length >= 9){
        setResult({result:`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`})
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers())
        setTries([]);
      }else{
        for(let i = 0 ; i < 4 ; i +=1){
          if(answerArray[i] === answer[i]){
            strike +=1;
          }else if(answer.includes(answerArray[i])){
            ball += 1;
          }
        }
        setValue('');
        setTries((prevState)=>{
          return [...prevState, { try:value, result:`${strike} 스트라이크, ${ball} ball 입니다.`}]
        })
      }
    }
  }
  const changeInput = (e)=>{
    setValue(e.target.value)
  }
  return (
    <div>
      <h2>{title}</h2>
      <form action="" onSubmit={doSubmit} >
        <input type="text" maxLength={4} value={value} onChange={changeInput}/>
        <input type="submit" value="입력!" />
      </form>
      <div>시도 : {tries.length}</div>
      <ul>
        {tries.map((v,i)=>{
          return(
            <Try key={`${i +1}차 시도`} tryInfo={v} value='s' />
          )
        })}
      </ul>
    </div>
  );
};

export default NumberBaseballHooks;