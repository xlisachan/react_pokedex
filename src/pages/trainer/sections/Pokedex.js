import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pokeSearch } from '../../../actions/searchActions';

import '../index.scss';

const Pokedex = ({ history, trainer, onSearchPokemon = f => f }) => (
  <div className="trainer-pokedex">
    {trainer.pokedex.map(pokemon => {
      return (
        <center
          key={pokemon.id}
          className="trainer-pokeball"
          onClick={() => onSearchPokemon(pokemon.id, history)}>

          <img
            src={pokemon.img}
            alt={pokemon.name}
          />

          <div className="trainer-pokemon-name">
            {pokemon.name}
          </div>
        </center>
      )
    })}
  </div>
);

const mapDispatchToProps = dispatch => ({
  onSearchPokemon(pokemon, history) {
    dispatch(
      pokeSearch(pokemon, history)
    )
  }
});
 
export default connect(null, mapDispatchToProps)(withRouter(Pokedex));
