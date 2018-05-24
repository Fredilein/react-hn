import React from 'react';
import './App.css';
import Hackernews from './Components/Hackernews';
import Clock from './Components/Clock.js';
import Background from './background.jpg';
import Xkcd from "./Components/Xkcd";
import Weather from "./Components/Weather";


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
              <div className="col-sm-6 component-col">
                <div className="col-sm-12 component-sm">
                  <Weather/>
                </div>
                <div className="col-sm-12 component-sm">
                  <Xkcd/>
                </div>
              </div>
              <div className="col-sm-6 component-col">
                <Hackernews/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}


export default App;
