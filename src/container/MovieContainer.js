import React, { Component } from 'react';
import MovieCard from '../Components/MovieCard';

class MovieContainer extends Component {

  render() {
    return (
      <div>
        {this.props.movies.map((movie, index) => <MovieCard
        key={index}
        movie={movie}
        handleMovie={this.props.handleMovie}
        currentMovie={this.props.currentMovie}
        addedFavorites={this.props.addedFavorites}
        addedWatchlist={this.props.addedWatchlist}
        />)}
      </div>
    );
  }

}

export default MovieContainer;
