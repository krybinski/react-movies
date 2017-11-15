import React, { Component } from 'react';
import Loader from 'react-loader';

import { GetMovieById } from './../../services/MoviesService';

import './Movie.css';

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      movie: {},
      countries: '',
      companies: '',
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    GetMovieById(id)
      .then(res => {
        let countries = res.data.production_countries,
            companies = res.data.production_companies;
        let listCountriesString = '',
            listCompaniesString = '';

        countries.forEach((item, index) => {
          listCountriesString += item.name;
          if (index !== countries.length -1) listCountriesString += ', ';
        }, this);

        companies.forEach((item, index) => {
          listCompaniesString += item.name;
          if (index !== companies.length -1) listCompaniesString += ', ';
        }, this);

        this.setState({
          loader: true,
          movie: res.data,
          countries: listCountriesString,
          companies: listCompaniesString,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const st = this.state;
    const loaded = st.loader;
    const movie = st.movie;
    const countries = st.countries;
    const companies = st.companies;

    return (
      <Loader loaded={loaded}>
        <div className="row">
          <div className="col-md-6">
            <img src={'http://image.tmdb.org/t/p/w185/' + movie.poster_path } alt="" className="movie--cover__single" />
            <h1 className="movie--title">{movie.title}</h1>

            <div>
              <small><b>Original title:</b> {movie.original_title}</small><br />
              <small><b>Release date:</b> {movie.release_date}</small><br /><br />
              <small><b>Countries:</b> {countries}</small><br />
              <small><b>Companies:</b> {companies}</small><br /><br />
              <small><b>Votes:</b> {movie.vote_count}</small><br />
              <small><b>Votes average:</b> {movie.vote_average}</small>
            </div>

            <div className="votes">
              <div className="votes--bar">
                <div className="votes--bar-line" style={{width: `${movie.vote_average * 10}%`}}></div>
              </div>
            </div>

            <p>{movie.overview}</p>
          </div>
          <div className="col-md-6">

          </div>
        </div>
      </Loader>
    );
  }
}

export default MoviePage;
