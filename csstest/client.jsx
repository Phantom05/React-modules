import React from "react";
import ReactDom from 'react-dom';

if (!global._babelPolyfill) {
	require('babel-polyfill');
}
import Main  from './src/Main/Main';

ReactDom.render(<Main />, document.querySelector('#root'))

// import {hot} from 'react-hot-loader/root';

// const Module = ()=>{
//   return(
//     <>
//       <Main /> 
//     </>
//   )
// }

// const Hot = hot(Module)