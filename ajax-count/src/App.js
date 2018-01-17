import React, { Component } from 'react';
import Count from './components/Count'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">AJAX / RESTful API</h1>
        </header>
        <Count />
      </div>
    );
  }
}

export default App;
