import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Header = ({ history, pokemon, onSearchPokemon = f => f }) => {
  let nextPokemonId;
  let prevPokemonId;

  nextPokemonId = nextPokemonId === 803 ? 1 : pokemon.id + 1;
  prevPokemonId = prevPokemonId === 0 ? 802 : pokemon.id - 1;

  return (
    <section style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <div className="pokemon-arrows" onClick={() => onSearchPokemon(prevPokemonId, history)}>
        <span style={{ fontSize: '.9rem', paddingRight: 2 }}><FaArrowLeft /></span>
        <span style={{ fontSize: '.6rem' }}>{prevPokemonId}</span>
      </div>

      <center>
        <span style={{ fontSize: '.6rem' }}>No.</span>
        <span style={{ fontSize: '.8rem' }}>{pokemon.id}</span>
      </center>

      <div className="pokemon-arrows" onClick={() => onSearchPokemon(nextPokemonId, history)}>
        <span style={{ fontSize: '.6rem' }}>{nextPokemonId}</span>
        <span style={{ fontSize: '.9rem', paddingLeft: 2 }}><FaArrowRight /></span>
      </div>
    </section>
  );
};

Header.propTypes = {
  history: PropTypes.object.isRequired,
  pokemon: PropTypes.object,
  onSearchPokemon: PropTypes.func,
};

export default Header;