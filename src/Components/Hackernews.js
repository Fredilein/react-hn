import React from 'react';
import axios from 'axios';

class Story extends React.Component {
  constructor(props) {
    super(props);

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

    // Only display pagename
    const url_trim = url.split('/').slice(1, 3).join('');

    return (
        <a className="list-group-item" href={url} target="_blank">
          <div className="row">
            <div className="col-xs-1">
              <h4>{score}</h4>
            </div>
            <div className="col-xs-11">
              <h4 className="list-group-item-heading">{title}</h4>
              <p className="list-group-item-text">{url_trim}</p>
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
        <div className="list-group">
          {this.state.stories.map(id =>
              <Story id={id} key={id}/>
          )}
        </div>
    );
  }
}

export default Hackernews;