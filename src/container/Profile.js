import React, { Component } from 'react';
import Fav from '../Components/Fav.js';
import WatchLi from '../Components/WatchLi.js';

class Profile extends Component {

  render() {
    return (
      <div>
      <Fav />
      <WatchLi />

      </div>
    );
  }

}

export default Profile;
