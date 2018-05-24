import React from 'react';
import axios from 'axios';

class Xkcd extends React.Component {

  constructor() {
    super();
    this.state = {
      title: ' ',
      img: '',
      description: '',
    };
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json`)
        .then(res => {
          const data = res.data;
          this.setState({title: data.title});
          this.setState({img: data.img});
          this.setState({description: data.alt});
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render() {
    return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.title}</h3>
          </div>
          <div className="panel-body">
            <img className="media-object xkcd-img" src={this.state.img} alt="..."/>
          </div>
          <div className="panel-footer"><em>{this.state.description}</em></div>
        </div>
    );
  }
}

export default Xkcd;