import React from 'react';
import './App.css';
// import IndexPage from './IndexPage.js'
import LoginPage from './LoginPage.js'
import SignUpPage from './SignUpPage.js'
import Nav from './Components/Nav.js';
import Homepage from './container/Homepage.js';
import Profile from './container/Profile.js';
import { Route, Switch } from 'react-router-dom'
import NotFound from "./Components/NotFound"

class App extends React.Component {

  state={
    favorites: [],
    watchlist: []
  }
  // find favorite.id === movie.id, then render it
  componentDidMount(){
    let update = []
    fetch("http://localhost:3000/movie_users")
    .then(res => res.json())
    .then(mus=>(
       mus.map(mu => {
      if(mu.favorite){
        update.push(mu)
        }
      this.setState({
          favorites: update
        })
      })
    ))
  }

  addedFavorites = (movie) => {
    // console.log(movie)
    let id = movie.id
    if(this.state.favorites.includes(movie)) {
      alert('already liked')

    } else {
      this.setState({favorites: [...this.state.favorites, movie]})
      fetch("http://localhost:3000/movie_users", {
        method: 'PATCH',
        headers: {
          'Authorization': localStorage.token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          movie_id: id,
          favorite: true
        })
      })
    }
  }

  removeFavorite=(unfavorited)=>{
    console.log("clicked", unfavorited)
    let copy = [...this.state.favorites]
    let newArray = copy.filter( favorite => {
      return favorite.title !== unfavorited.title
    })
     this.setState({favorites: newArray})


     fetch(`http://localhost:3000/movie_users/${unfavorited.id}`, {
       method: "DELETE",
       headers: {
         "Content-Type": "application/json",
         "Accept": "application/json"
       },
       body: JSON.stringify({
         id: unfavorited.id
       })
     })
  }

  addedWatchlist=()=>{
    fetch('http://localhost:3000/movie_users', {
    method: 'PATCH',
    headers: {
      'Authorization': localStorage.token
    },
    body: JSON.stringify({
      movie_id: 1, // or whatever
      watchList: true // or false
    })
  })
  }

  removeWatchlist=()=>{

  }

  render() {
    console.log("after render",this.state.favorites)
    // if (this.state.page === "signup") {
    //   return <SignUpPage redirect={this.redirect} />
    // } else if (this.state.page === "login") {
    //   return <LoginPage redirect={this.redirect}>hi</LoginPage>

  return (
        <React.Fragment>
           <h1>Movie Center</h1>
            <Switch>
             <Route exact path="/" render={(routerprops)=>{
              return <Homepage
                watchlist={this.state.watchlist}
                favorites={this.state.favorites}
                addedFavorites={this.addedFavorites}
                addedWatchlist={this.addedWatchlist}
                  />
               }}/>
             <Route exact path="/signup" component={SignUpPage}/>
             <Route exact path="/login" component={LoginPage}/>
             <Route exact path="/profile" render={(routerprops)=>{
                return <Profile
                        watchlist={this.state.watchlist}
                        favorites={this.state.favorites}
                        removeFavorite={this.removeFavorite}
                        removeWatchlist={this.removeWatchlist}
                        {...routerprops}
                />
             }}/>
             <Route component={NotFound}/>
            </Switch>

        </React.Fragment>
    )
  }
}

export default App;
