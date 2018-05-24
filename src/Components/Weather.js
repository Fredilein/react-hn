import React from 'react';
import axios from 'axios';
import Config from '../config.json';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      res : {},
      city: '',
      desc: '',
      temp: 0,
    };
  }

  componentDidMount() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=Effretikon&id=524901&APPID=' + Config.apiKey;
    axios.get(url)
        .then(res => {
          this.setState({
            res: res.data,
            city: res.data.name,
            desc: res.data.weather[0].description,
            temp: res.data.main.temp,
          });
          console.log(this.state.res);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render() {
    const city = this.state.city;
    const desc = this.state.desc;
    const temp = this.state.temp.toString().split('.')[0];
    const disp = city ? <h1>{city} <small>{desc} @ {temp} °C</small></h1> : <h3>Looking up weather...</h3>;

    return (
        <div className="panel panel-default">
          <div className="panel-body">
            {disp}
          </div>
        </div>
    );
  }
}

export default Weather;