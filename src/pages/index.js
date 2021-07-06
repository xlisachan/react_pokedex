import React from 'react';
import { connect } from 'react-redux';
import { clearResult, pokeSearch } from '../actions/searchActions';
import { Loading, NoMatch} from '../components/index';
import Pokemon from './pokemon';

const Results = ({ query, history, search, onSearchPokemon = f => f }) => {
  if (search.fetching) {
    return <Loading />
  };

  if (search.error || Object.keys(search.searchResults).length === 0) {
    return <NoMatch query={query} />
  };

  return (
    <Pokemon
      query={query}
      history={history}
      pokemon={search.searchResults}
      onSearchPokemon={onSearchPokemon}
    />
  );
};

const mapStateToProps = state => ({
  search: state.search,
  query: state.search.searchInput
});

const mapDispatchToProps = dispatch => ({
  onClearResult() {
    dispatch(
      clearResult()
    )
  },

  onSearchPokemon(pokemon, history) {
    dispatch(
      pokeSearch(pokemon, history)
    )
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);