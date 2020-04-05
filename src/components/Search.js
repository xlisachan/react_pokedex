import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => (
  <form className="search-form" autoComplete="off">
    <FaSearch style={{ fontSize: '1rem', marginRight: 10 }} />
          
    <input className="input-search" type="text" placeholder="Enter Pokémon" />
  </form>
);

export default Search;