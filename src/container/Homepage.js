import React from 'react'
import Search from "../Components/Search"
import MovieIndex from "./MovieIndex"
import Nav from '../Components/Nav.js';

class Homepage extends React.Component {

  state = {
     page: "login",
     movies: [],
     searchInput: ""
   }

   userInput = (e) => {
     console.log(e.target)
     this.setState({
       searchInput: e.target.value
     })
   }

   componentDidMount() {
     fetch("http://localhost:3000/movies")
     .then(res => res.json())
     .then(movies => {
       this.setState({movies: movies})
     })
   }

   redirect = (page) => {
     console.log("page", page)
     this.setState({
       page: page
     })
   }


  render() {
    const filteredMovies=this.state.movies.filter(movie=>{
      return (
        movie.title.toLowerCase()
        .indexOf(this.state.searchInput.toLowerCase()) !== -1
      )
    })
    return (
      <div>
      <Nav/>
      <Search userInput={this.userInput}/>
      <MovieIndex movies={filteredMovies}/>
      </div>
    )
  }
}


export default Homepage
