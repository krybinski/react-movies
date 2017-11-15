import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav';
import HomePage from './components/pages/HomePage';
import MoviesPage from './components/pages/MoviesPage';
import MoviePage from './components/pages/MoviePage';

import './App.css';

const App = () => (
  <div>
    <Nav />
    <div className="container content-wrapper">
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" exact component={MoviesPage} />
      <Route path="/movies/:id" component={MoviePage} />
    </div>
  </div>
);

export default App;
