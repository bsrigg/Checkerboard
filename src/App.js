import React, { Component } from 'react';

import './App.css';

class Box1 extends Component {
  render(){
    let style={width: this.props.bwidth, height: this.props.bheight, backgroundColor: `${this.props.color1}`};
    return(
      <div className="box1" style={style}>
      </div>
    )
  }
}
class Box2 extends Component {
render(){
  let style={width: this.props.bwidth, height: this.props.bheight, backgroundColor: `${this.props.color2}`};
  return(
    <div className="box2" style={style}>
    </div>
    )
  }
}
class FormCheckerboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      rows: 2,
      cols: 2,
      bwidth: 500,
      bheight: 500,
      boardwidth: 1000,
      color1: "#ffffff",
      color2: "#000000",
    };
  }
    render(){
      let displaywidth=this.state.bwidth >> 0;
      return(
        <div className="container">
        <div className="slidecontainer">
          <form>
          {/* <p>Board Width: {this.state.boardwidth} px</p>
          <input type="range" min="500" max="1500" defaultValue="500" step="50"onChange={this.handleChangeboard}/>
          <br/> */}
            Color 1: <input type="color" defaultValue={this.state.color1} name="color1def" onChange={this.handleColor1} /><span> </span>
            Color 2: <input type="color" defaultValue={this.state.color2} name="color2def" onChange={this.handleColor2}/>
            <p>Number of Rows/Cols: {this.state.rows} at {displaywidth} px/box</p>
            <input type="range" min="2" max="250" defaultValue="1" onChange={this.handleChange}/>
            <br/>
            <br/>
          </form>
          
          <div className="board">
            {this.drawCheckerboard()}
          </div>
          </div>
        </div>
      )
    }
  handleColor1=(e)=>{
    this.setState({color1: e.target.value});
  } 
  handleColor2=(e)=>{
    this.setState({color2: e.target.value});

  } 
  handleChange=(e)=>{
    let number=e.target.value;
    let bwidth=(this.state.boardwidth/number);
    this.setState({bwidth: bwidth});
    this.setState({bheight: bwidth});
    this.setState({rows: number});
    this.setState({cols: number});

  }
  drawCheckerboard=() =>{

    let rowline=[];
    console.log(this.state.boardwidth)
      for (let i = 0; i<this.state.rows; i++){
        for (let j = 0; j <this.state.cols; j++){
          if(((i+j)%2+1)===1){
            rowline.push(<Box1 bwidth={this.state.bwidth} bheight={this.state.bheight} color1={this.state.color1}/>);
          }
          else{
            rowline.push(<Box2 bwidth={this.state.bwidth} bheight={this.state.bheight} color2={this.state.color2}/>);
          }
        }
      }
    return rowline;
  }
} 
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>The Best Checkerboard Ever</h1>
        <FormCheckerboard />
      </div>
    );
  }
}

export default App;
