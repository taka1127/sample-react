import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './componens/Chart';

class App extends Component{
  constructor() {
    super();
    this.state = {
      ChartData:{}
    }
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Chart legendPosition="bottom" />
      </div>
    );
  }
}

export default App;
