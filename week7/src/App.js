import React from 'react';
import logo from './logo.svg';
import './App.css';

import StepsCounter from './components/StepsCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2> <u>Friendly Counter</u> </h2>
        </p>
        <StepsCounter/>
      </header>
    </div>
  );
}

export default App;
