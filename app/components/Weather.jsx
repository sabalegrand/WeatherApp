import React from 'react';

import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';

import openWeatherMap from 'OpenWeatherMap';



class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    let self = this;

    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      self.setState({
        location,
        temp,
        isLoading: false
      });
    }, function (errorMessage) {
      self.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  }

  render() {
    const { isLoading, temp, location }  = this.state;

    function renderMessage () {
      if ( isLoading === true) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}

export default Weather;
