import React from 'react';
import './Navbar.scss';
import { withRouter } from 'react-router-dom';
import Search from '../Search';

const NavBar = ({ location }) => (
  <div className="navbar-container">
    <div className="navbar">
      <div>
        {location.pathname === "/" ? null : <Search />}
      </div>

    </div>
  </div>
);

export default withRouter(NavBar);