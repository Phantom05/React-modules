import React,{Component} from 'react';

class Header extends Component{
  render(){
    const { data, data:{title}  }  = this.props
    return(
      <>
        <div className="Header">{title}</div>
      </>
    )
  }
}

export default Header;