import React from 'react';
import loadingGif from '../assets/images/loading.gif';
import notfoundImg from '../assets/images/detectivepikachu.png';
import searchImg from '../assets/images/pokedex.png';
import Search from '../components/Search';

export const Home = () => (
  <div className="home-container">
    <img
      style={{ width: 200, marginBottom: '1rem' }}
      src={searchImg}
      alt="pokedex logo"
    />

    <Search />
  </div>
);

export const Loading = () => (
  <center>
    <p style={{ marginBottom: 20, fontSize: '1rem' }}>Loading...</p>

    <img
      style={{ height: '10vh' }}
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
      style={{ height: '30vh' }}
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
      style={{ height: '30vh' }}
      src={notfoundImg}
      alt="Page not found"
    />
  </center>
);