import React, { Component } from 'react';
import './App.css';
import Persons from './Persons/Persons'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <p>
              Stars Wars List
            </p>
            <Persons/>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
