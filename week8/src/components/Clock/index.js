import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  render() {
    return (
      <p className="App-clock" id="clock">
         {this.state.time}
      </p>
    );
  }
} 

export default Clock;