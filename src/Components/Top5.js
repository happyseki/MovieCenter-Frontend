import React, { Component } from 'react';

class Top5 extends Component {
  state ={
    top5: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/movies/top5")
    .then(res => res.json())
    .then(movies => {
      this.setState({
        top5: movies
      })
    })
  }

  render() {

    return (
      <div className="top5">
      <h2>Top 5 Movies</h2>
      {this.state.top5.map(movie=>
      <div className="top5-movie">
        <h3>{movie.title}</h3>
        <img src={movie.poster} alt="poster"/>
        <br />
        <button /*onClick={}*/> Add Favorite </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button /*onClick={}*/>Add Watchlist</button>
      </div>
    )}
      </div>
    );
  }

}

export default Top5;
