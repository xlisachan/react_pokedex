import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pokeSearch } from '../actions/searchActions';
import { FaSearch } from 'react-icons/fa';

const Search = ({history, onSearchPokemon=f=>f}) => {
  const [query, setQuery] = React.useState('');
    let searchEl = React.useRef();

    const handleChange = () => {
      setQuery(searchEl.value);
    }

  const onSubmit = e => {
    e.preventDefault();

    let newQuery;
    typeof query === 'string' ? newQuery = query.toLowerCase() : newQuery = query;
    onSearchPokemon(newQuery, history);
    setQuery('');
  }
  return (
    <form style={{ display: 'flex', alignItems: 'center' }} className="search-form" autoComplete="off" onSubmit={onSubmit}>
      <FaSearch style={{ fontSize: '1rem', marginRight: 10 }} />

      <input
        ref={input => searchEl = input}
        className="input-search"
        type="text"
        placeholder="Search Pokedex"
        value={query}
        onChange={handleChange}
      />
    </form>
  )
};

const mapDispatchToProps = dispatch => ({
  onSearchPokemon(pokemon, history) {
    dispatch(
      pokeSearch(pokemon, history)
    )
  }
});

export default connect(null, mapDispatchToProps)(withRouter(Search));