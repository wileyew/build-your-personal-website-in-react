import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {portfolioCardComponent} from './portfolioCardComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello, I am your personal website!</h2>
        </div>
        <portfolioCardComponent />
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
