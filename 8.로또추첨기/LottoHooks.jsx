import React, { useState, useEffect, useRef, useMemo } from 'react';
import Ball from './Ball';

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) =>  i + 1 );
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => { // componentDidMount와 componentDidUpdate 역할 수행
    console.log('로또 숫자를 생성합니다');
  }, [winNumbers]); // useEffect는 콜백으로 들어가는 이 값이 바뀌면 재실행됨.



  /*
  useEffect(() => { // 컴포넌트 디드 마운트만 하고싶다.
    //ajax 를하면 컴포넌트 디드 마운트에서 하는거와 같음
  }, []); 

  const mounted = useRef(false);
  useEffect(() => { // 컴포넌트 디드 업데이트만 하고싶다.
    if(!mounted.current){
      mounted.current=true;
    }else{
      //ajax
    }

  }, [바뀌는값]); // componentDidUpdate만, componentDidMount x
  */

  useEffect(() => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      // var j = i;
      timeouts.current[i] = setTimeout(function () {
        setWinBalls((b) => [...b, winNumbers[i]]);
      }, (i + 1) * 1000);
    }

    if (!timeouts.current[6]) {
      timeouts.current[6] = setTimeout(() => {
        setBonus(winNumbers[6]);
        setRedo(true);
      }, 7000);
    }
    return () => { // 여기 리턴 안쪽이 컴포넌트 winnUnMount 자리. 셋 인터벌같은것들 여기서 다 해줘야함.
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]);
  // 배열에 요소가 있으면 componentDidMount 랑 componentDidUpdate 둘다 수행

  const onClickRedo = () => {
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
    setWinNumbers(getWinNumbers());
  };

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      <button onClick={redo ? onClickRedo : () => {}}>한 번 더!</button>
    </>
  );
};
export default Lotto;

// 자식컴포넌트에 props로 함수를 넘겨줄땐 반드시 useCallBack을 넣어줘야함.  안그럼 자꾸 새로 넣은거라 생각해서 랜더링이됨.
// 훅스는 조건문안에 use시리즈를 넣으면 절대로 안됨
// 또 use시리즈안에 또 use를 넣으면 안됨. 실행 순서가 너무 중요학때문에.

// 훅스는 성능 최적화가 꼭 필요하다. 계쏙 렌더링 되기 때문에.
//useMemo는 값을 기억하기위해 사용
//useCallback 은 함수를 기억하기위해 사용 선언
//useEffect는 컴포넌트를 사용하기위해 사용.
// 3명다 두번째 인자가 바뀌면 재렌더링이됨.



// 이정도하면 프론트 스택이라고함.
/*
React, Next, Redux, Redux-saga, Styled Components 

React MobX, React GraphQL, React TS Redux 
 */