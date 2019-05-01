import React, { Component } from 'react';
import '../Common/Common.scss';
// import './Login.scss';


class Login extends Component{


  doLoginSubmit = (e)=>{
    
  }
  render(){

    return(
      <>
       <h1>Login</h1>
        <form action="" onSubmit={this.doLoginSubmit}>
          <div>
            <input type="text"/>
          </div>
          <div>
            <input type="text"/>
          </div>
          <div>
            <input type="submit" value="Login"/>
            <input type="button" value="Signup"/>
          </div>
        </form>
      </>
    )
  }
}


export default Login;