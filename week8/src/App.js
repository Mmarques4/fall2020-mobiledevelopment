import React from 'react';
import logo from './logo.svg';
import './App.css';

import StepsCounter from './components/StepsCounter';
import ClientTracker from './components/ClientTracker';
import myDate from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <myDate/><label id="lblGreetings"></label>
          <h3 id="title"> USER-FRIENDLY TRACKER </h3>
        <StepsCounter/> <br></br>
        <ClientTracker/>
      </header>
    </div>
  );
}

export default App;
