import React, { Component, memo, PureComponent, createRef } from 'react';
//createRef
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

class NumberBaseball extends PureComponent {
  state = {
    title:'숫자야구-클래스',
    result:'',
    value:'',
    answer:getNumbers(),
    tries:[], // push 쓰면 안됨. 불변성떄문에, 기존의 값에 인서트되는거라 변경됬는지 감지를 못함. 참조값에 넣는거라 그럼. 
    // const array = [1,2,3,]
    // const array2 = [...array] 하면 깊은 복사가 됨.
    //  array == array2 => false

  };
  
  // A -> B -> C -> D -> E -> F
  //이런식으로  A에서 F로 props를 전달해주고 싶을떄, 가운데 B부터 E까지 모두 프롭스를 거치면 랜더링이 많이 일어나게 되는데 이때 A 에서 F까지 바로 props를 전달해줄수가 있따 이때 컨텍스트를 사용하면 된다.
  
  onSubmitForm = (e) =>{
    const { value, answer,tries } = this.state;
    e.preventDefault();
    if(value === answer.join('')){
      this.setState((prevState) => {
        return {
          result:'홈런!',
          tries:[...prevState.tries, { try: value, result: '홈런!'}]
          // 깊은 복사로 기존의 값을 너주고 뒤로 새로운 값을 넣어줌. 그럼 참조가 바뀜
        };
      });
      alert('게임을 다시 시작합니다!');
      this.setState({
        value:'',
        answer:getNumbers(),
        tries:[],
      });
    }else{
      const answerArray = value.split('').map((v)=> parseInt(v));
      let strike = 0;
      let ball = 0;
      if(tries.length >= 9){
        this.setState({
          result:`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value:'',
          answer:getNumbers(),
          tries:[],
        });
      }else{
        for(let i = 0 ; i < 4 ; i +=1){
          if(answerArray[i] === answer[i]){
            strike +=1;
          }else if(answer.includes(answerArray[i])){
            ball += 1;
          }
        }
        this.setState((prevState)=>{
          return{
            tries:[...prevState.tries, { try:value, result:`${strike} 스트라이크, ${ball} ball 입니다.`}],
            value:'',
          }
        })
      }
    }
    this.inputRef.current.focus()
  }

  onChangeInput = (e) =>{
    console.log(this.state.answer)
    this.setState({
      value:e.target.value
    })
  }

  inputRef = createRef();

  //랜더와 리턴 안쪽에 this.setState를하면 랜더하고 셋스테이트하고 렌더하고 셋스테이트하고 해서 무한반복됨.
  render() {

    return (
      <>
       <h2>{this.state.title}</h2> 
        <form action="" onSubmit={this.onSubmitForm}>
          <input type="text" maxLength={4} value={this.state.value} onChange={this.onChangeInput} ref={this.inputRef} />
          <input type="submit" value="입력!" />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v,i)=>{
            return (
              <Try key={`${i +1}차 시도`} tryInfo={v} value='s'/>
            )
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;