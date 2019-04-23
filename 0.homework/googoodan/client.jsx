const React = require('react');
const ReactDom = require('react-dom');

const GooGooDan = require('./GooGooDan');

ReactDom.render(
  <div>
    <GooGooDan />
    <GooGooDan />
  </div>
  ,document.querySelector('#root'))