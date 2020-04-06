import React from 'react';
import './Navbar.scss';
import { withRouter } from 'react-router-dom';
import Search from '../Search';
import NavButton from './NavButton';

const NavBar = ({ location }) => (
  <nav className="navbar-container">
    <div className="navbar">
      <div style={{width: "80%"}}>
        {location.pathname === "/" ? null : <Search />}
      </div>

      {location.pathname === "/trainer/lisa" ? null : <NavButton />}
    </div>
  </nav>
);

export default withRouter(NavBar);