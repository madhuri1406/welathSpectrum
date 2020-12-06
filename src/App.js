import React from 'react';
import YouTube from 'react-youtube';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      arr:["J","A","s","U"]
  }
}

handleChange = (e) =>{
  let {arr} = this.state
this.setState({
  [e.target.name]:e.target.value
  })
  this.state.arr.map((obj,i)=>{
    var a = "a"
    if( e.target.value.includes(obj)){
      console.log(obj);
       a.concat(obj)
       this.setState({
         lastname:a
       })
    }}
  )



}
handleClick = (e) =>{
  // this.props.functionName(this.state.lastName)
}
  render() {
    //let movie = "https://www.youtube.com/watch?v=ZcFRfJb2ONk&feature=youtu.be"
console.log("render",this.state);
    return (
      <div>
      <input type="text" name = "firstname" value= {this.state.firstname} onChange={this.handleChange} />
      <input type="text"name = "lastname" value= {this.state.lastname} onChange={this.handleChange}   />
      <button onClick={this.handleClick}>ABC</button>

      </div>



    )
  }


}

export default App
