import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Cidade que deseja saber a previsão do tempo para os próximos  dias"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn  btn-secondary">Pesquisar</button>
        </span>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    term: state.term
  }
}



export default connect(mapStateToProps, ) (SearchBar);