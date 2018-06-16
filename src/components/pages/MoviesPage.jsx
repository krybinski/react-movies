import React, { Component } from 'react';
import Loader from 'react-loader';

import MoviesList from './../lists/MoviesList';

import { GetMovies } from './../../services/MoviesService';

class MoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      moviesList: [],
      quantity: 0
    };
  }

  componentDidMount() {
    GetMovies()
      .then(res => {
        this.setState({
          loader: true,
          moviesList: res.data.results,
          quantity: res.data.total_results
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const st = this.state;
    const loaded = st.loader;
    const moviesList = st.moviesList;
    const quantity = st.quantity;

    return (
      <Loader loaded={loaded}>
        <h1>Movies list ({quantity})</h1>
        <MoviesList movies={moviesList} />
      </Loader>
    );
  }
}

export default MoviesPage;
