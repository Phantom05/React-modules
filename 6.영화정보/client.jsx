import React  from 'react';
import ReactDom from 'react-dom';
import { hot }  from'react-hot-loader/root'; 

import MovieApp from './MovieApp';

const Hot = hot(MovieApp)

ReactDom.render(<Hot />, document.querySelector('#root'))

