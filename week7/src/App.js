import React from 'react';
import logo from './logo.svg';
import './App.css';

import StepsCounter from './components/StepsCounter';
import ClientTracker from './components/ClientTracker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2> <u>User-Friendly Tracker</u> </h2>
        </p>
        <StepsCounter/>
        <ClientTracker/>
      </header>
    </div>
  );
}

export default App;
