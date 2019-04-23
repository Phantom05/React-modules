const React = require('react');
const { Component } = React;
// 한 컴포넌트로 다부르고, 작게 쪼개라, 처음에는 탑다운방식으로 하는게 좋음 한 4년후부터 다운탑으로 넘어가는게 좋음.
class WordRealy extends Component{
  state={
    text:'Hello, Webpack'
  }
  render(){
    return(
      <div>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}


module.exports = WordRealy;