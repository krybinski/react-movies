import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Movie database application based on React.</h1>
    <p>This app using <a href="https://themoviedb.org" target="_blank" rel="noopener noreferrer">The Movie DB API</a></p>
    <div className="see-top-movies">
      <h3><Link to="/movies">See all movies!</Link> </h3>
    </div>
  </div>
);

export default HomePage;
