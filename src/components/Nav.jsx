import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => (
  <nav className="nav">
    <div className="container">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/movies">Movies</Link></li>
      </ul>
    </div>
  </nav>
);

export default Nav;
