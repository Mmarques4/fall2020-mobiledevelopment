import React from 'react';
import logo from './logo.svg';
import './App.css';

import StepsCounter from './components/StepsCounter';
import ClientTracker from './components/ClientTracker';
import MyDate from './components/Welcome';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyDate/>
          <h3 id="title"> USER-FRIENDLY TRACKER </h3>
        <StepsCounter/> <br></br>
        <ClientTracker/>
        <Clock/>
      </header>
    </div>
  );
}

export default App;