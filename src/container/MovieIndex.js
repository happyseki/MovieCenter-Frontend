import React, { Component } from 'react';
import Top5 from '../Components/Top5';
import MovieContainer from './MovieContainer';

class MovieIndex extends Component {

  render() {
    return (
      <div>

        <Top5 />
        <MovieContainer movies={this.props.movies}/>
      </div>
    );
  }

}

export default MovieIndex;
