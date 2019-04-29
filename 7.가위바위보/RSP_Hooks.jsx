import React, { Component, useState, useRef, useEffect, memo } from 'react';

const computerChoice = (imgCoord) =>{
  return Object.entries(rspCoords).find(function(v) {
    return v[1] === imgCoord;
  })[0];
};

const RSP_Hooks =() =>{

  const [result, setResult] =  React.useState('')
  const [ imgCoord , setImgCoord] = React.useState(rspCoords.바위);
  const [ score, setScore] =  React.useState(0);
  const interval = useRef();

  useEffect(()=>{ // componentDidmount, componentDidUpdate 역할
    interval.current = changeHand();
    console.log('다시 실행.')
    return () =>{ // componentWillUnmount 역할
      console.log('종료');
      clearInterval(interval.current);
    }
  }, [imgCoord]) // 여러개 참조하고 싶으면 [imgCoord, result, score] 이런식으로 넣어도됨.

  //useEffect 를 여러개 쓸수도 있음. 스테이트마다 다른 메모리를 갖고싶으면
  // 패턴처럼 외워도 좋음.

  return(
    <>
      RSP_Hooks
    </>
  )
}

export default RSP_Hooks;
// 무조건 훅스를 쓰자!