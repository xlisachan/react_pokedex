import React from 'react';
import { withRouter } from 'react-router-dom';
import NavButton from './NavButton';
import Search from '../Search';

import './Navbar.scss';

const NavBar = ({ location }) => (
  <nav>
    <div className="nav-search">
      {location.pathname === "/" ? null : <Search />}
    </div>

    {location.pathname === "/trainer/lisa" ? null : <NavButton />}
  </nav>
);

export default withRouter(NavBar);