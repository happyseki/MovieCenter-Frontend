import React, { Component } from 'react';
import Fav from '../Components/Fav.js';
import WatchLi from '../Components/WatchLi.js';

class Profile extends Component {

  componentDidMount() {
    fetch("http://localhost:3000/profile", {
      headers: {
        'Authorization': localStorage.getItem("token")
      }
    })
  }

  handleClick = () => {
    delete localStorage.token
  }

  renderFavorites = () => {
   if(!this.props.favorites) {
     return null;
   } else {
     return this.props.favorites.map(favorite => {
       return (
         <Fav
           key={favorite.id}
           favorite={favorite}
           removeFavorite={this.props.removeFavorite}
         />
       )
     })
   }
 }

  render() {
    return (
      <div>
      {this.renderFavorites()}
      <WatchLi />
      </div>
    );
  }

}

export default Profile;
