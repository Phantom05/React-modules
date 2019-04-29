import React from 'react';
import ReactDom from 'react-dom';
import {hot} from 'react-hot-loader/root';

import RSP_Class from './RSP_Class';
import RSP_Hooks from './RSP_Hooks';


const Modile = ()=>{
  return (
    <>
      <RSP_Class />
      {/* <RSP_Hooks /> */}
    </>
  )
}

const Hot = hot(Modile)

ReactDom.render(<Hot />, document.querySelector('#root'))