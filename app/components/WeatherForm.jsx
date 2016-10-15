import React from 'react';

class WeatherForm extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const location = this.refs.location.value;

    if(location.length > 0 ) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="location"
            type="text" placeholder="Enter city name"/>
          <button className="button expanded hollow">Get Wheater</button>
        </form>
      </div>
    );
  }

}

export default WeatherForm;
