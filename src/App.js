import React from 'react';
import './App.css';
import Hackernews from './Components/Hackernews.js';
import Clock from './Components/Clock.js';
import Background from './background.jpg';
import Xkcd from "./Components/Xkcd";


class App extends React.Component {

  render() {
    const appStyle = {
      backgroundImage: `url(${Background})`,
    };

    return (
        <div className="App" style={appStyle}>
          <header className="App-header">
            <Clock/>
            <h1 className="lead App-title"><em>Home Sweet Home.</em></h1>
          </header>
          <div className="body-root">
            <div className="row">
              <div className="col-sm-6">
                <Xkcd/>
              </div>
              <div className="col-sm-6">
                <Hackernews/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}


export default App;
