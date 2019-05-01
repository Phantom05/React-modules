import React from "react";
import ReactDom from 'react-dom';


import Main  from './src/Main/Main';

const Module = ()=>{
  return(
    <>
      <Main />
    </>
  )
}

ReactDom.render(<Module />, document.querySelector('#root'))