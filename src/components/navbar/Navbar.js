import React from 'react';
import './Navbar.scss';
import { withRouter } from 'react-router-dom';
import Search from '../Search';

const NavBar = ({ location }) => (
  <nav className="navbar-container">
    <div className="navbar">
      <div>
        {location.pathname === "/" ? null : <Search />}
      </div>

    </div>
  </nav>
);

export default withRouter(NavBar);