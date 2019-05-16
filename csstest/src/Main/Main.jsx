import React, {Component} from 'react';
import "./Main.scss";
import '../About/About';


const MenuItem = ({active, children, to}) => (
  <div className="menu-item">
          {children}
  </div>
)
class Main extends Component{
  render(){
    return(
      <>
        <h1 className="Main1">
          Main Hello, React
        </h1>
        <div className="menu">
          <MenuItem title="홈" />
          <MenuItem title="소개" />
          <MenuItem title="홈포스트" />
        </div>
      </>
    )
  }
}

export default Main;