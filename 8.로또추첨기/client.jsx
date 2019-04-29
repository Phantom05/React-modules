import React from 'react';
import ReactDom from 'react-dom';
import {hot} from 'react-hot-loader/root';

import LottoClass from './LottoClass';
import LottoHooks from './LottoHooks';



const Modile = ()=>{
  return (
    <>
      {/* <LottoClass /> */}
      <LottoHooks />
    </>
  )
}

const Hot = hot(Modile)

ReactDom.render(<Hot />, document.querySelector('#root'))