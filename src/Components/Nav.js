import React, { Component } from 'react';
import Profile from "../container/Profile"
import { NavLink } from 'react-router-dom'



class Nav extends Component {
    state={
      isLogin: false
    }

    componentDidMount(){
      if(localStorage.token){
        this.setState({isLogin: true})
      }
    }

     handleClick = () => {
       delete localStorage.token
       this.setState({isLogin: false})

     }

  render() {
    return (

      <div>
       {!this.state.isLogin?
         <React.Fragment>
         <NavLink to='/login'>Login</NavLink>
         <NavLink to='/signup'>Sign Up</NavLink>
          </React.Fragment>
         :
         <React.Fragment>
         <button onClick={this.handleClick} >Logout</button>
          <NavLink to='/profile'>Profile</NavLink>
          </React.Fragment>
          }
      </div>
    );
  }

}

export default Nav;
