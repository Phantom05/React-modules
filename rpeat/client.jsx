import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Study from './Study';
import GoogoodanClass from './GoogoodanClass';
import GoogoodanHooks from './GoogoodanHooks';

import WordRelayClass from './WordRelayClass';
import WordRelayHooks from './WordRelayHooks';

import NumberBaseballClass from './NumberBaseballClass';
import NumberBaseballHooks from './NumberBaseballHooks';




const Module = () =>{
  return (
    <>
      <Study />
      <GoogoodanClass />
      <GoogoodanHooks />
      <WordRelayClass />
      <WordRelayHooks />
      <NumberBaseballClass />
      <NumberBaseballHooks />
    </>
  )
};


const Hot = hot(Module);

ReactDom.render(<Hot /> , document.querySelector('#root'))