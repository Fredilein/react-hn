import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';


class Story extends React.Component {
  constructor(props) {
    super(props);
    
    this.MAX_URL_LENGTH = 50;
    
    this.state = {
      title: '',
      url: '',
      score: 0,
    };
  }

  componentDidMount() {
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json`)
    .then(res => {
      this.setState({
        title: res.data.title,
        url: res.data.url,
        score: res.data.score
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const url = this.state.url;
    const title = this.state.title;
    const score = this.state.score;

    const url_cropped = url.substring(0, this.MAX_URL_LENGTH);
    const url_display = (url > url_cropped ? url_cropped+"..." : url_cropped);

    
    return(      
      <a class="list-group-item" href={url} target="_blank">
        <div class="row">
          <div class="col-xs-1">
            <h4>{score}</h4>
          </div>
          <div class="col-xs-11">
            <h4 class="list-group-item-heading">{title}</h4>
            <p class="list-group-item-text">{url_display}</p>
          </div>
        </div>
      </a>
    );
  }

}


class Hackernews extends React.Component {
  
  constructor() {
    super();
    this.state = { 
      stories: [],
    };
  }

  componentDidMount() {
    axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json`)
    .then(res => {
      const ids = res.data.slice(0, 10);
      this.setState({stories: ids});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {    
    return (
      <div class="col-md-6 col-md-offset-3">
        <div class="list-group">
          {this.state.stories.map(id =>
            <Story id={id} key={id} />
          )}   
        </div>
      </div>
    );
  }
}


class App extends Component {
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          HackerNews Articles
        </p>
        <div class="container">
          <Hackernews />
        </div>
      </div>
    );
  }
}



export default App;
