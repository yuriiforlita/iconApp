import React, { Component } from 'react';
import Img from './Components/Img.js'
import Choose from './Components/Choose.js'
import Json from './imgJson.json'
import './App.css';

class App extends Component {
  state={
    arrImg:[],
    active:'',
    activeVal:''
  }

  componentDidMount() {
      this.setState({
        arrImg:Json
      })
      document.body.addEventListener("keydown",this.onKeyPress)
  }
  handleChange=(event)=> {
    this.setState({activeVal: event.target.value});
  }

  handleSubmit=(event)=> {
    let activeId=this.state.activeVal;
    this.setState({
      active:activeId
    })
    event.preventDefault()
  }
  onKeyPress= (e) => {
    let id=this.state.active
    if(e.keyCode === 37){
      if(id === 0){
        this.setState({
          active:id
        })
      }
      else{
        this.setState({
          active:+id-1
        })
      } 
    }
     if(e.keyCode === 39){
      if(id === this.state.arrImg.length-1){
        this.setState({
          active:id
        })
      }
      else{
        this.setState({
          active:+id+1
        })
      }
      
    }
}

  render() {
    console.log(this.state.active)
    return (
      <div className="App">
      <Choose handleSubmit={this.handleSubmit} handleChange={this.handleChange} length={this.state}></Choose>
        <Img items={this.state} ></Img>
      </div>
    );
  }
}

export default App;
