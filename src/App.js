import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav.js';
import Search from './Components/Search.js';
import LoginSignup from './Components/LoginSignup.js';
import MovieIndex from './container/MovieIndex.js';
import Profile from './container/Profile.js';

function App() {
  return (
    <div>
    <Nav />
    <Search />
    <LoginSignup />
    <MovieIndex />
    <Profile />

    </div>
  );
}

export default App;
