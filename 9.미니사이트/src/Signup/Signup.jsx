import React, {Component} from 'react';
import '../Common/Common.scss';
// import './Signup.scss';





class Signup extends Component{
  state={
    result:''
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const tar = e.target;

    const infoArr = [tar.username.value,tar.password.value,tar.age.value];
    if(infoArr.filter(x=> x).length < 3){
      alert('모두 입력해주세요')
    }else{
      this.setState({
        result: `아이디: ${infoArr[0]} 비밀번호 : ${infoArr[1]} 나이 : ${infoArr[2]} 가 맞습니까?`
      })
    }

  }
  render(){
    return(
      <>
        <div className="Signup">
       
          <div className="wrap">
          <h1>회원가입</h1>
            <form action="" method="POST" onSubmit={this.onSubmit}>
              <div>
                <label htmlFor="" className="input__label">username</label>
                <input type="text" name="username" className="input__box" autoComplete="off" />
              </div>
              <div>
                <label htmlFor="" className="input__label">password</label>
                <input type="text" name="password" className="input__box" autoComplete="off" />
              </div>
              <div>
                <label htmlFor="" className="input__label">age</label>
                <input type="number" name="age" autoComplete="off"  />
              </div>
              <div>
                <input type="submit" value="등록" className="btn"  />
              </div>
            </form>
          </div>
          <div className="result">
            {this.state.result}
        </div>
        </div>

      </>
    )
  }
}


export default Signup;