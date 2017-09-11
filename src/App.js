import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextboxInput from './TextboxInput.js';
import Clock from './Clock.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Saurabh React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TextboxInput pp='saurabh react'/>
        <Clock />
      </div>
    );
  }
}

export default App;
