import React from 'react'
import Search from "../Components/Search"
import MovieIndex from "./MovieIndex"
import Nav from '../Components/Nav.js';
// import { Route } from 'react-router-dom';

class Homepage extends React.Component {

  state = {
     page: "login",
     movies: [],
     searchInput: "",
     currentMovie: {}
   }

   userInput = (e) => {
     console.log(e.target)
     this.setState({
       searchInput: e.target.value
     })
   }


   componentDidMount() {
     fetch("http://localhost:3000/profile", {
      headers: {
        'Authorization': localStorage.getItem("token")
      }
    })

     fetch("http://localhost:3000/movies")
     .then(res => res.json())
     .then(movies => {
       this.setState({movies: movies})
     })


   }


   handleMovie=(movie)=>{
     this.setState({currentMovie: movie})
   }

   addedFavorites = (movie) => {
       // console.log(movie)
       if(this.state.favorites.includes(movie)) {
         alert('already liked')

       } else {
         this.setState({favorites: [...this.state.favorites, movie]})
       }
     }

  render() {
    console.log(this.state.currentMovie)
    const filteredMovies=this.state.movies.filter(movie=>{
      return (
        movie.title.toLowerCase()
        .indexOf(this.state.searchInput.toLowerCase()) !== -1
      )
    })
    return (
      <div>
      <Nav />
      <Search userInput={this.userInput}/>
      <MovieIndex
        movies={filteredMovies}
        handleMovie={this.handleMovie}
        currentMovie={this.state.currentMovie}
        addedFavorites={this.props.addedFavorites}
        addedWatchlist={this.props.addedWatchlist}
        />
      </div>
    )
  }
}


export default Homepage
