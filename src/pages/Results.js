import React from 'react';
import { connect } from 'react-redux';
import { clearResult, pokeSearch } from '../actions/searchActions';
import { Loading, NoMatch} from './index';
import Pokemon from '../components/Pokemon';

class Results extends React.Component {
  componentDidMount() {
    if (!this.props.query) {
      return this.props.onClearResult();
    }
    return this.props.onSearchPokemon(this.props.query, this.props.history);
  };

  render() {
    const { query, history, search } = this.props;

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
      />
    );
  }
};

const mapStateToProps = state => ({
  search: state.search
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