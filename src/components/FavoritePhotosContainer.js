import React, { Component } from 'react';
import PhotoCard from './PhotoCard'

export default class FavoritePhotosContainer extends Component {
  render() {
    return (
    <div className="ui container">
      <h1>Favorite Photos</h1>
      <div className="ui special cards three column grid">
           {/* render a PhotoCard for EACH photo */}
           {
            this.props.photos.map(photo => <PhotoCard handleRemoveFavs={this.props.handleRemoveFavs} favoritesContainer={true} key={photo.id} photo={photo}/>)
          }
      </div>
    </div>
    );
  }
}
