import React, { Component } from 'react';
import Try from './Try';

function getNumbers(x) { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  
}

class NumberBaseballClass extends Component {
  state = {
    title:'숫자야구-클래스',
    result:'',
    value:'',
    answer:getNumbers(),
    tries:[],

  };

  onSubmitForm = (e) =>{

  }


  onChangeInput = (e) =>{

  }


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

  render() {

    return (
      <>
       <h2>{this.state.title}</h2> 
        <form action="" onSubmit={this.onSubmitForm}>
          <input type="text" maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
          <input type="submit" value="입력!" />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
          {this.fruits.map((v,i)=>{
            return (
              <Try value={v} index={i} />
            )
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseballClass;