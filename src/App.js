import React from 'react';
import './App.css';
import Header from './components/Header'
import PhotoContainer from './components/PhotoContainer'
import FavoritePhotosContainer from './components/FavoritePhotosContainer'
import AddNewPhotoForm from './components/AddNewPhotoForm'

class App extends React.Component{
  render(){
    return (
      <div className="App">
          <Header/>
          {/* Only one of the components in the bottom should render */}
          {/* How can we manage that? */}
          {/* <AddNewPhotoForm/>
          <PhotoContainer/>
          <FavoritePhotosContainer/> */}
      </div>
    )
  }
}

export default App;
