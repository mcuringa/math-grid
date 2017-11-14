import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid />
      </div>
    );
  }
}



class Grid extends Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return (
      <table className="Grid">
        <tbody>
          <tr className="row">
            <Cell row="0" col="0" val="foo" />
            <Cell row="0" col="1"/>
            <Cell row="0" col="2"/>
          </tr>
        </tbody>
      </table>
    );
  }
}

// class Row extends Component
// {
//   constructor(props) 
//   {
//     super(props);
//     this.row = props.row;  
//     this.cols = props.cols;
//     this.cells = new Array(this.cols);
//   }
//   render()
//   {
//     return (
//       <tr className="Row">

//       </tr>
//     );
//   }
// }

class Cell extends Component 
{
  constructor(props) 
  {
    super(props);
    this.row = props.row;
    this.col = props.col;

    this.state = {val: props.val || "", isActive: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() 
  {
    console.log("clicked");
    //broadcast deactivate...
    this.setState(prevState => ({
      isActive: true
    }));
  }

  activeClass()
  {
    if(this.state.isActive)
      return "Cell Cell-active";
    return "Cell";
  }

  handleKey() 
  {

  }


  render()
  {
    return (
      <td className={this.activeClass()} onClick={this.handleClick}>
        {this.state.val}
      </td>
    );
  }

}


// const synth = window.speechSynthesis;

// function say(text, lang="en-GB", pitch=1, rate=1)
// {
//   var u = new SpeechSynthesisUtterance(text);
//   u.lang = lang;
//   u.pitch = pitch;
//   u.rate = rate;
//   synth.speak( u );

// }

// say("Hello kids. You don't want to shut me down, do you?")
export default App;
