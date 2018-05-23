import React from 'react';
import './App.css';
import Hackernews from './Components/Hackernews.js';
import Clock from './Components/Clock.js';
import Background from './background.jpg';


class App extends React.Component {

  render() {		
		var appStyle = {
			backgroundImage: `url(${Background})`,
		};

    return (
      <div className="App" style={appStyle}>
        <header className="App-header">
          <Clock />
          <h1 className="lead App-title"><em>Home Sweet Home.</em></h1>
        </header>
        <div className="container">
          <Hackernews />
        </div>
      </div>
    );
  }
}



export default App;
