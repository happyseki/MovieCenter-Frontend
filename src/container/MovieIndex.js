import React, { Component } from 'react';
import Top5 from '../Components/Top5';
import MovieContainer from './MovieContainer';
// import { Route } from 'react-router-dom';

const MovieIndex = (props) =>(

      <div>

        <Top5 handleMovie={props.handleMovie}/>
        <MovieContainer
        movies={props.movies}
        handleMovie={props.handleMovie}
        currentMovie={props.currentMovie}
        addedFavorites={props.addedFavorites}
        addedWatchlist={props.addedWatchlist}/>
      </div>

)

export default MovieIndex;
