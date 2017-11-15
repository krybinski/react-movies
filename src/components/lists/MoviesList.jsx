import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MoviesList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.movies.map(item => {
          return <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 movie" key={item.id}>
            <Link to={'/movies/' + item.id} className="movie--link">
              <img src={'http://image.tmdb.org/t/p/w185/' + item.poster_path } alt="" className="movie--cover" />
            </Link>
          </div>
        })}
      </div>
    )
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MoviesList;
