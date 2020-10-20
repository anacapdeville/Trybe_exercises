import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.buttonOne = this.buttonOne.bind(this);
    this.buttonTwo = this.buttonTwo.bind(this);
    this.buttonThree = this.buttonThree.bind(this);
    this.state = {
      clickOne: 0,
      clickTwo: 0,
      clickThree: 0
    }
  }
  buttonOne() {
    this.setState((estadoAnterior, _props) => ({
      clickOne: estadoAnterior.clickOne + 1,
    }))
    console.log(this.state.clickOne)
    if (this.state.clickOne % 2 !== 0) {
      document.querySelector('.buttonOne').style.backgroundColor = "green";
    } else {
      document.querySelector('.buttonOne').style.backgroundColor = "gray";
    }
  }
  buttonTwo() {
    this.setState((estadoAnterior, _props) => ({
      clickTwo: estadoAnterior.clickTwo + 1
    }))
    if (this.state.clickTwo % 2 !== 0) {
      document.querySelector('.buttonTwo').style.backgroundColor = "green";
    } else {
      document.querySelector('.buttonTwo').style.backgroundColor = "gray";
    }
  }
  buttonThree() {
    this.setState((estadoAnterior, _props) => ({
      clickThree: estadoAnterior.clickThree + 1
    }))
    if (this.state.clickThree % 2 !== 0) {
      document.querySelector('.buttonThree').style.backgroundColor = "green";
    } else {
      document.querySelector('.buttonThree').style.backgroundColor = rgb(239, 239, 239);
    }
  }
  render() {
    return (
      <div>
        <button className="buttonOne" onClick={this.buttonOne}>{this.state.clickOne}</button>
        <button className="buttonTwo" onClick={this.buttonTwo}>{this.state.clickTwo}</button>
        <button className="buttonThree" onClick={this.buttonThree}>{this.state.clickThree}</button>
      </div>
    )
  }
}

export default App;
