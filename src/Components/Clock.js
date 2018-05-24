import React from 'react';

class Clock extends React.Component {

  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
        <h1>{this.state.date.toLocaleTimeString()}</h1>
    );
  }
}

export default Clock;