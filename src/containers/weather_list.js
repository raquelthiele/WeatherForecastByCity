import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;

    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
          <thead>
            <tr>
              <th>Cidade</th>
              <th>Temperatura</th>
              <th>Pressão</th>
              <th>Umidade</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList);
