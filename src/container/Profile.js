import React, { Component } from 'react';
import Fav from '../Components/Fav.js';
import WatchLi from '../Components/WatchLi.js';

class Profile extends Component {

  // componentDidMount() {
  //   fetch("http://localhost:3000/profile", {
  //     headers: {
  //       'Authorization': localStorage.getItem("token")
  //     }
  //   })
  // }
  //
  // handleClick = () => {
  //   delete localStorage.token
  // }

  render() {
    return (
      <div>
      "Hello from Index"
      <Fav />
      <WatchLi />
      </div>
    );
  }

}

export default Profile;
