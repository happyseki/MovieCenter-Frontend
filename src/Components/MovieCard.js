import React, { Component } from 'react';

class MovieCard extends Component {

  render() {
    return (
      <div className="movie-card">
        <h3>{this.props.movie.title}</h3>
        <img src={this.props.movie.poster} alt="poster"/>
        <br />
        <button /*onClick={}*/> Add Favorite </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button /*onClick={}*/>Add Watchlist</button>

      </div>
    );
  }

}

export default MovieCard;
