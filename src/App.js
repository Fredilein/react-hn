import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = { 
      titles: [] 
    };
  }

  async getStories(topstories) {
    
    const topstories_ids = await axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json`);

    for (let i = 0; i < 10; i++) {
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${topstories_ids.data[i]}.json`)
      .then(res => {
        const titles = this.state.titles.slice();
        titles[i] = res.data.title;
        this.setState({titles: titles})
      });
    }

    
  }

  componentDidMount() {
    this.getStories();
  }
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ul class="list-group">
          {this.state.titles.map(title =>
            <li class="list-group-item">{title}</li>
          )}
        </ul>
        </div>
      </div>
    );
  }
}



export default App;
