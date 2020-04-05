import React from 'react';
import searchImg from '../assets/images/pokedex.png';
import Search from '../components/Search';

const Home = () => (
  <div className="home-container">
    <img
      style={{width: 200, marginBottom: '1rem'}}
      src={searchImg}
      alt="pokedex logo"
    />

    <Search />
  </div>
  
);

export default Home;