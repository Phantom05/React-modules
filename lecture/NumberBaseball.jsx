const React = require('react');
const { Component } = React;
//공부할때는 항상 hooks랑 class랑 같이 만들어보기

const Try = require('./Try');


class NumberBaseball extends Component{


  fruit = [
    {fruit:'사과',taste:'맛있다'},
    {fruit:'감',taste:'시다'},
    {fruit:'바나나',taste:'달다'},
    {fruit:'포도',taste:'맛있다'},
    {fruit:'귤',taste:'시다'},
  ]


  // 새로운 배열을 만들떄 push를 쓰지 않고 
  // [...this,] 옛날거 복사하고, 추가내용을 넣음.
  // 비구조화 할당

  render(){
    return(
      <>
      <h1></h1>
        <ul>
        {this.fruit.map((x,i)=>{
            return (
              <Try value={x.fruit + x.taste} idx={i} />
            );
          })}
        </ul>
        <div>

        </div>
      </>
    )
  }
}

module.exports =NumberBaseball;