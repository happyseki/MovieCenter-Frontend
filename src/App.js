import React from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage.js'
import IndexPage from './IndexPage.js'
import './App.css';

class App extends React.Component {
  state = {
    page: "login"
  }

  redirect = (page) => {
    this.setState({
      page: page
    })
  }

  render () {
    console.log("in App")
    if (this.state.page === "index") {
      return <IndexPage />
    } else if (this.state.page === "signup") {
      return <SignUpPage redirect={this.redirect} />
    } else if (this.state.page === "login") {
      return <LoginPage redirect={this.redirect} />
    }
  }

}

export default App;
