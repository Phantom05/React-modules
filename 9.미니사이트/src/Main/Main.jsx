import React, { Component } from 'react';
import Header from '../Common/Header';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';

class Home extends Component{
  render(){
    return(
      <>
        <h1>Home, Hello React</h1>
      </>
    )
  }
}
class Main extends Component{
  state ={
    header:{
      title:[['Home',true],['Signup',false],['Login',false]]
    },
  }

  doListClick= (e)=>{
    console.log(e,'click')
    this.setState((prevState)=>{
      [...prevState.header.title].map(x=>(x[0]==e)? x[1] = true: x[1] = false)
      return{
        header:{
          title:[...prevState.header.title].map(x=>(x[0]==e)? x: x)
        }
      }
    })
  }

  // pageArr =() => {
  //   Home:<Home />,
  //   Signup:<Signup data={header} key={i} />,
  //   Login:<Login key={i} />
  // }


  render(){
    const {header} = this.state;
    return(
      <>
       <Header data={header} doListClick={this.doListClick} />
       <div className="wrap">
        {
          header.title.map((x,i)=>{
            
            if(x[1]){
              if(x[0] == 'Home'){
                return <Home key={i} />
              }
              if(x[0] == 'Signup'){
                return <Signup data={header} key={i} />
              }
              if(x[0] == 'Login'){
                return <Login key={i} />
              }
            }
          })
        }
        </div>
      </>
    )
  }
}


export default Main;