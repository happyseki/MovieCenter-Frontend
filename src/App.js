import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IndexPage from './IndexPage.js'
import LoginPage from './LoginPage.js'
import SignUpPage from './SignUpPage.js'
import Nav from './Components/Nav.js';
import Search from './Components/Search.js';
import LoginSignup from './Components/LoginSignup.js';
import MovieIndex from './container/MovieIndex.js';
import Profile from './container/Profile.js';

class App extends React.Component {
  state = {
     page: "login"
   }

   redirect = (page) => {
     this.setState({
       page: page
     })
   }

  render() {
    if (this.state.page === "index") {
      return <IndexPage />
    } else if (this.state.page === "signup") {
       return <SignUpPage redirect={this.redirect} />
    } else if (this.state.page === "login") {
       return <LoginPage redirect={this.redirect} />
    }
   

    return (
      <div>
        <Nav />
        <Search />
        <LoginSignup />
        <MovieIndex />
        <Profile />
      </div>
    )
  }
}

export default App;
