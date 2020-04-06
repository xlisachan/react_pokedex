import React from 'react';
import '../Trainer.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pokeSearch } from '../../../actions/searchActions';

const Pokedex = ({ history, trainer, onSearchPokemon=f=>f }) => {
  return (
    <div className="pokedex">
      {trainer.pokedex.map(pokemon => {
        return (
          <center key={pokemon.id} className="pokeball" onClick={() => onSearchPokemon(pokemon.id, history)}>
            <img src={pokemon.img} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </center>
        )
      })}
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  onSearchPokemon(pokemon, history) {
    dispatch(
      pokeSearch(pokemon, history)
    )
  }
});
 
export default connect(null, mapDispatchToProps)(withRouter(Pokedex));