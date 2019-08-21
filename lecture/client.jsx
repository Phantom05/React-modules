import React  from 'react';
import ReactDom from 'react-dom';
import { hot }  from'react-hot-loader/root'; 

import NumberBaseball from './NumberBaseball';
import RenderTest from './RenderTest';

const Hot = hot(NumberBaseball)

ReactDom.render(<Hot />, document.querySelector('#root'))