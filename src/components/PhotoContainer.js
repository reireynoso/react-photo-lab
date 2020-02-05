import React, { Component } from 'react';
import PhotoCard from './PhotoCard'

export default class PhotoContainer extends Component {
  render() {
    console.log(this.props.photos)
    // const {}
    return (
    <div className="ui container">
      <h1>All Photos</h1>
      {/* Search Bar ? */}
      <div className="ui special cards three column grid">
          {/* render a PhotoCard for EACH photo */}
          {
            this.props.photos.map(photo => <PhotoCard favorites={this.props.favorites} photoContainer={true} handleAddToFavs={this.props.handleAddToFavs} key={photo.id} photo={photo}/>)
          }

      </div>
    </div>
    );
  }
}
