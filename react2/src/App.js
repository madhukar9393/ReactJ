import React, { Component } from 'react';
import Users from './Users';
import Usr from './Usr';
import './App.css';

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <p name={45/8}>how r u</p>
       
       <Users title="Suryakrishna"> </Users>
        <Usr></Usr>
      </div>
    );
  }
}

export default App;
