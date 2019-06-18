import React, { Component } from 'react';
import MovieCard from '../Components/MovieCard';

class MovieContainer extends Component {

  render() {
    return (
      <div>
        {this.props.movies.map((movie, index) => <MovieCard key={index} movie={movie} />)}
      </div>
    );
  }

}

export default MovieContainer;
