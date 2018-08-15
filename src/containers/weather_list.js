import React, { Component } from 'react';
// import { connect } from 'react-redux';


export default class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
          <thead>
            <tr>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
      </table>
    );
  }
}

// export default connect() (WeatherList);
