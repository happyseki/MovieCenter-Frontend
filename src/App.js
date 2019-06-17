import React from 'react';
import './App.css';
// import IndexPage from './IndexPage.js'
import LoginPage from './LoginPage.js'
import SignUpPage from './SignUpPage.js'
import Nav from './Components/Nav.js';
import Homepage from './container/Homepage.js';
import Profile from './container/Profile.js';
import { Route, Switch } from 'react-router-dom'



class App extends React.Component {






  render() {
    // console.log("after render",this.state.movies)
    // if (this.state.page === "signup") {
    //   return <SignUpPage redirect={this.redirect} />
    // } else if (this.state.page === "login") {
    //   return <LoginPage redirect={this.redirect}>hi</LoginPage>

  return (
        <React.Fragment>
           <h1>Movie Center</h1>
            <Switch>
             <Route exact path="/" component={Homepage}/>
             <Route exact path="/signup" component={SignUpPage}/>
             <Route exact path="/login" component={LoginPage}/>
             <Route exact path="/profile" component={Profile}/>
            </Switch>

        </React.Fragment>
    )
  }
}

export default App;
