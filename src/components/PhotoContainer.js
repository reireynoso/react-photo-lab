import React, { Component } from 'react';
import PhotoCard from './PhotoCard'
import SearchBarComponent from './SearchBarComponent'

export default class PhotoContainer extends Component {
  render() {
    return (
    <div className="ui container">
      <h1>All Photos</h1>
      {/* <SearchBarComponent/> */}
      <div className="ui special cards three column grid">
          {/* render a PhotoCard for EACH photo */}

      </div>
    </div>
    );
  }
}
