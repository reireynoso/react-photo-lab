import React, { Component } from 'react';
import PhotoCard from './PhotoCard'

export default class FavoritePhotosContainer extends Component {
  render() {
    return (
    <div className="ui container">
      <h1>All Photos</h1>
      <div className="ui special cards three column grid">
          <PhotoCard/>
          <PhotoCard/>
          <PhotoCard/>
      </div>
    </div>
    );
  }
}
