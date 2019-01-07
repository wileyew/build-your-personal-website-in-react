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
          <h2>Welcome to Where Quality Meets Product Delivery!</h2>
        </div>
        <portfolioCardComponent />
        <p className="App-intro">
Have you ever wished your application was bug free? Well, no fears! I am here to teach you how you can deliver a quality product to the market, check out some of my blog posts to get started!
        </p>
      </div>
    );
  }
}

export default App;
