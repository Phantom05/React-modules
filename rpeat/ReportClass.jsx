import React, { Component } from 'react';


class Subject extends Component {
  render() {
    const { title } = this.props;
    return (
      <>
        <header>
          <h1>
            <a href="" onClick={function(ev){
              ev.preventDefault();

              this.props.onClick(3)

            }.bind(this)}>{this.props.title}
            </a>
          </h1>
          {this.props.sub}
        </header>
      </>
    );
  }
}
class TOC extends Component {
  

  render() {
    const listArr = ['HTML','CSS','Javascript'];
    let list  = [];
    let i = 0;
    console.log(this.props.data.length)
    while(i < this.props.data.length){
      var data = this.props.data[i];
      list.push( 
      <li key={data.id}> 
        <a href={data.id+".html"} onClick={function(id, ev) {
          ev.preventDefault();
        
          this.props.onSelect(id);
          //함수 안에서 this를 사용하면 bebugger찍었을때 this.가 언디파인이라 바인드를 해줘야함. 함수안의 함수이기때문에. this가 클래스를 타겟하지 않음.
        }.bind(this, data.id)}>
          {data.title}
        </a> 
      </li> );
      i += 1;
    }
    return (
      <>
        <nav>
        <ol>
          {list}
        </ol>
        </nav>
      </>
    )
  }
}

class Content extends Component{
  render(){
    const { title , desc} = this.props;
    return(
      <>
        <article>
          <h2>{this.props.data.title}</h2>
          {this.props.data.desc}
        </article>
      </>
    )
  }
}

class ReportClass extends Component {
  state = {
    mode:'read',
    selected_content_id:1,
    contents:[
      {id:1,title:"HTML",desc:"HTML is for information"},
      {id:2,title:"Css",desc:"Css is for design"},
      {id:3,title:"Javascript",desc:"Javascript is for interaction"},
    ],
  }

  getSelectedContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(this.state.selected_content_id === data.id){
        return data;
      }
      i += 1;
    }
  }

  getContentComponent(){
    if(this.state.mode === 'read'){
      return <Content data={this.getSelectedContent()} />
    }else if ( this.state.mode === 'welcome'){
      return <Content data={
        {
          title:'Welcome',
          desc:"Hello, React!!"
        }} />
    }
    
  }

  getControlComponent(){
    return [
      <a href="/create">create</a>,
      <a href="/update">update</a>,
      <input type="button" href="delete" onClick={function(){

        var newContents = this.state.contents.filter(function(el){
          if(el.id === this.state.selected_content_id){
            return el;
          }
        }.bind(this));
        this.setState({
          contents:newContents,
          mode:'welcome'
        })
      }.bind(this)} value="delete"/>
    ]
  }
  render() {

    return (
      <>
        <Subject onClick={function(id){
          this.setState({mode:'welcome'})
        }.bind(this)} title="ReportClass" sub="World Wide Web" />
        <TOC onSelect={function(id){
          //자식 컴포넌트에서 props의 함수를 실행할떄 매개변수를 넣으면 매개변수로 값이 들어옴
          // this.state.selected_content_id의 id 값을 바꿔라
          this.setState({
            selected_content_id:id,
            mode:'read'
          });

        }.bind(this)} data={this.state.contents} />
        {this.getControlComponent()}
        {this.getContentComponent()}
      </>
    );
  }
}


// class List extends Component {
//   render() {
//     const { value } = this.props;
//     return (
//       <>
//         <li>
//           <a href="">
//             {value}
//           </a>
//         </li>
//       </>
//     )
//   }
// }

export default ReportClass;