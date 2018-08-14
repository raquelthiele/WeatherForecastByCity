import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
  render() {
    return (
      <form className="input-group">
        <input />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    term: state.term
  }
}

export default connect(mapStateToProps) (SearchBar);