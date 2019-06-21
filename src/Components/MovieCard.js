import React, { Component } from 'react';
import Detail from './Detail.js';

class MovieCard extends Component {

  render() {
    return (
      <div className="movie-card" onClick={()=>this.props.handleMovie(this.props.movie)}>
        <h3>{this.props.movie.title}</h3>
        <img src={this.props.movie.poster} alt="poster"/>
        <br />
        <button onClick={()=>this.props.addedFavorites(this.props.movie)}> Add Favorite </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={()=>this.props.addedWatchlist(this.props.movie)}>Add Watchlist</button>
        // <Detail currentMovie={this.props.currentMovie}/>
      </div>
    );
  }

}

export default MovieCard;
