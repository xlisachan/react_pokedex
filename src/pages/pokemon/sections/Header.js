import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Header = ({ history, pokemon, onSearchPokemon = f => f }) => {
  let nextPokemonId;
  let prevPokemonId;

  nextPokemonId = pokemon.id + 1 === 803 ? 1 : pokemon.id + 1;
  prevPokemonId = pokemon.id - 1 === 0 ? 802 : pokemon.id - 1;

  return (
    <div className="pokemon-nav">
      <div className="pokemon-left" onClick={() => onSearchPokemon(prevPokemonId, history)}>
        <span className="pokemon-arrow"><FaArrowLeft /></span>
        <span>{prevPokemonId}</span>
      </div>

      <center>
        <span className="pokemon-no">No.</span>
        <span style={{fontSize: 14}}>{pokemon.id}</span>
      </center>

      <div className="pokemon-right" onClick={() => onSearchPokemon(nextPokemonId, history)}>
        <span>{nextPokemonId}</span>
        <span className="pokemon-arrow"><FaArrowRight /></span>
      </div>
    </div>
  );
};

Header.propTypes = {
  history: PropTypes.object.isRequired,
  pokemon: PropTypes.object,
  onSearchPokemon: PropTypes.func,
};

export default Header;