import React, { Component } from 'react';
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

class NumberBaseball extends Component {
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
  }


  onChangeInput = (e) =>{
    console.log(this.state.answer)
    this.setState({
      value:e.target.value
    })
  }

/*
  fruits = [
    {fruit:'사과',taste:'맛있다.'},
    {fruit:'바나나',taste:'달다.'},
    {fruit:'포도',taste:'시다.'},
    {fruit:'귤',taste:'떫다.'},
    {fruit:'감',taste:'쓰다.'},
    {fruit:'배',taste:'달다.'},
    {fruit:'밤',taste:'퍽히다.'},
    {fruit:'사과',taste:'맛없다.'},
  ]
  */

  render() {

    return (
      <>
       <h2>{this.state.title}</h2> 
        <form action="" onSubmit={this.onSubmitForm}>
          <input type="text" maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
          <input type="submit" value="입력!" />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        {/* <ul>
          {this.fruits.map((v,i)=>{
            return (
              <Try key={v.fruit + v.taste} value={v} index={i} />
            )
          })}
        </ul> */}
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