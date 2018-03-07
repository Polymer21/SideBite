import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Routes/>
      </div>
    );
  }
}

export default App;
