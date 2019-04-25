import React, { Component } from 'react';

// class Try extends Component {
  
//   render() {
//     const { value, index } = this.props;
//     return (
//       <li>
//         <b>{value.fruit}</b> - {value.taste} - {index}
//         <div>컨텐츠1</div>
//         <div>컨텐츠2</div>
//       </li>
//     )
//   }
// }

// export default Try;

// class Try extends Component {
//   render() {
//     const {tryInfo} = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     )
//   }
// }

//훅스 props 구조분해
const Try =({tryInfo})=>{

console.log(tryInfo)
  return(
    <div>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </div>
  )
}

export default Try;