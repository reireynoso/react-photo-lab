import React, { Component } from 'react';
import PhotoCard from './PhotoCard'

export default class PhotoContainer extends Component {
  render() {
    return (
    <div className="ui container">
      <h1>All Photos</h1>
      {/* Search Bar ? */}
      <div className="ui special cards three column grid">
          {/* render a PhotoCard for EACH photo */}

      </div>
    </div>
    );
  }
}
