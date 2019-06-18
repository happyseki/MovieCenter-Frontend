import React, { Component } from 'react';
import Profile from "../container/Profile"
import { NavLink } from 'react-router-dom'

class Nav extends Component {
// <button onClick={this.handleClick}>Log out</button>
  render() {
    return (

      <div>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
        <Profile />
      </div>
    );
  }

}

export default Nav;
