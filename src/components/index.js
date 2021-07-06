import React from 'react';
import loadingGif from '../assets/images/loading.gif';
import notfoundImg from '../assets/images/detectivepikachu.png';
import searchImg from '../assets/images/pokedex.png';
import Search from './Search';

export const Home = () => (
  <center className="homepage">
    <img
      className="main-image"
      src={searchImg}
      alt="pokedex logo"
    />

    <Search />
  </center>
);

export const Loading = () => (
  <center>
    <p>
      Loading...
    </p>

    <img
      className="main-image"
      src={loadingGif}
      alt="loading screen"
    />
  </center>
);

export const NoMatch = ({ query }) => (
  <center>
    <p>{query} does not exist!</p>

    <p>Search for another pokemon.</p>

    <img
      className="main-image"
      src={notfoundImg}
      alt="No pokemon found in search engine"
    />
  </center>
);

export const NotFound = () => (
  <center>
    <p>404 Error!</p>

    <p>Page not found</p>

    <img
      className="main-image"
      src={notfoundImg}
      alt="Page not found"
    />
  </center>
);
