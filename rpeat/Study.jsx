import React, { Component }  from 'react';



class Study extends Component{
  state = {

  }

  render(){
    return(
      <div>
        <h1>React Repeat</h1>
      </div>
    )
  }
}
export default Study;



//module.exports랑은 다른기능임. 하지만 호환이 되서 사용함
//default는 한번만 쓸수 있고


// export const hello = 'hello';
// export const bye = 'hello';
//위의 리액트말고 컴포넌트처럼 가져오는것임.
//이런식으로하면 여러개를 가져올 수있음