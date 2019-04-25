import React, { PureComponent, memo, useState } from 'react';
// memo를 적용하면 컴포넌트의 랜더링을 효율적으로 관리할 수 있음.

//class
class Try extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     if(this.state.counter !== nextState.counter){
  //       return true;
  //     }
  //     return false;
  //   }

  state = {
    result:this.props.result,
    try:this.props.try
  }

  onClick=(e)=>{
    this.setState({
      result:'1'
    })
  }

  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div onClick={this.onClick}>{tryInfo.result}</div>
      </li>
    )
  }
}


//hooks
// const Try = memo(({ tryInfo }) => {
//   // tryInfo.try = 'hello' 
//   //이런식으로 자식에서 직접 바꾸면 절대안됨 오즤게 꼬임.
//   const [ result, setResult ] = useState(tryInfo.result);
//   // 자식에서 스테이트로 만든후 그 스테이트를 바꾼다.
//   const onClick = () =>{
//     setResult('1');
//   }
//   return (
//     <li>
//       <div>{tryInfo.try}</div>
//       <div onClick={onClick}>{result}</div>
//     </li>
//   )
// })

export default Try;






