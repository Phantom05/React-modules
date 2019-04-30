import React from "react";
import ReactDom from 'react-dom';

import Signup from './Signup';

const Module = ()=>{
  return(
    <>
      <Signup />
    </>
  )
}

ReactDom.render(<Module />, document.querySelector('#root'))