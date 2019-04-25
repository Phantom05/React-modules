import React, { Component, PureComponent } from 'react';

// class RenderTest extends Component{
//   state = {
//     counter:0,
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     if(this.state.counter !== nextState.counter){
//       return true;
//     }
//     return false;
//   }
  
//   onClick = (e) => {
//     this.setState({})
//   }
//   render(){
//     return(
//       console.log('랜더링')
//       <div>
//         <button onClick={this.onClick}>클릭</button>
//       </div>
//     )
//   }
// }

class RenderTest extends PureComponent{
  // shoulComponent의 false true를 자동으로 구현해논 컴포넌트.
  state = {
    counter:0,
    string:'hello',
    number:1,
    boolean:true,
    object:[],
    array:[{ inside: [] }],
  }
  
  onClick = (e) => {
    const obj = this.state.array[0];
    obj.inside = 3;
    this.setState({
      array:[obj],
    })
  }
  render(){
    console.log('랜더링',this.state)
    return(
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    )
  }
}

export default RenderTest;