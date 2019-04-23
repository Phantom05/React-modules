const React = require('react');
const { Component } = React;

class Try extends Component{



  render(){
    return(
      <>
        <li>
          <b>{this.props.value}</b> - {this.props.idx}
          <div>콘텐츠1</div>
          <div>콘텐츠2</div>
          <div>콘텐츠3</div>
          <div>콘텐츠4</div>
        </li>
      </>
    )
  }
}

module.exports = Try






