import React from 'react';

import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';

import openWeatherMap from 'OpenWeatherMap';

import ErrorModal from './ErrorModal';



class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    let self = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      self.setState({
        location,
        temp,
        isLoading: false
      });
    }, function (e) {
      self.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  }

  render() {
    const { isLoading, temp, location, errorMessage }  = this.state;

    function renderMessage () {
      if ( isLoading === true) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}

export default Weather;
