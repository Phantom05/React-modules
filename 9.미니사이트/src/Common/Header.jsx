import React,{Component} from 'react';

class Header extends Component{


  listClick = (e) =>{
    let tar = e.target;
    if(tar.classList.contains('Header__an')){
      this.props.doListClick(tar.name)
    }
  }


  render(){
    const { data, data:{title}  }  = this.props
    return(
      <div className="Header">
        <div className="Header__box">
        <ul className="Header__ul" onClick={this.listClick}>
        {title.map((x,i)=> {
          console.log(x)
          return (<li key={i} className="Header__li">
            <a href="#" className={`Header__an ${(x[1])?'on':null}`} name={x[0]} >{x}</a>
          </li>)
        })}
        </ul>
        
        </div>
      </div>
    )
  }
}



export default Header;