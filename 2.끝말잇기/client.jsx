const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const WordRealy = require('./WordRealy');

const Hot = hot(WordRealy); // hoc 방식이라고 불림 하이오더 컴포넌트


/*
const Word = () =>{
  return <>
    <WordRealy />
    <WordRealy />
    <WordRealy />
    </>
}

hot(Word) //이런식으로함
*/

ReactDom.render(<Hot /> ,document.querySelector('#root'));
