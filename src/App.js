import React from 'react';
import './App.css';
import Header from './components/Header'
import PhotoContainer from './components/PhotoContainer'
import FavoritePhotosContainer from './components/FavoritePhotosContainer'
import AddNewPhotoForm from './components/AddNewPhotoForm'

class App extends React.Component{
  state = {
    view: "all",
    photos: [],
    favorites: []
  }

  handleSubmit = (photoObj) => {
    // console.log(photoObj)
    this.setState({
      view: "all",
      photos: [...this.state.photos, photoObj]
    })
  }

  handleViewSwitch = (input) => {
    this.setState({
      view: input
    })
  }

  handleAddToFavs = (photoObj) => {
    // console.log(photoObj)
    this.setState({
      favorites: [...this.state.favorites, photoObj]
    })
  }

  handleRemoveFavs = (photoObj) => {
    const removedArr = this.state.favorites.filter(photo => photo.id !== photoObj.id)
    this.setState({
      favorites: removedArr
    })
  }

  renderView = () => {
    if(this.state.view === "all"){
      return <PhotoContainer favorites={this.state.favorites} handleAddToFavs={this.handleAddToFavs} photos={this.state.photos}/>
    }
    else if(this.state.view === "favorites"){
      return <FavoritePhotosContainer handleRemoveFavs={this.handleRemoveFavs} photos={this.state.favorites}/>
    }
    else{
      return <AddNewPhotoForm handleSubmit={this.handleSubmit}/>
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/photos`)
    .then(resp => resp.json())
    .then(photos => this.setState({
      photos
    }))
  }
  render(){
    return (
      <div className="App">
          <Header handleViewSwitch = {this.handleViewSwitch}/>
          {/* Only one of the components in the bottom should render */}
          {/* How can we manage that? */}
          {this.renderView()}
      </div>
    )
  }
}

export default App;
