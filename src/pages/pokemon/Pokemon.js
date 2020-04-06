import React from 'react';
import './Pokemon.scss';
import PropTypes from 'prop-types';
import Header from './sections/Header'
import Basics from './sections/Basics';
import Stats from './sections/Stats';
import Abilities from './sections/Abilities';

const Pokemon = ({ history, pokemon, onSearchPokemon=f=>f }) => {
  return (
    <section className="pokemon">
      <Header
        pokemon={pokemon}
        history={history}
        onSearchPokemon={onSearchPokemon}
      />

      <Basics pokemon={pokemon} />

      <Stats pokemon={pokemon} />

      <Abilities pokemon={pokemon} />
    </section>
  );
};

Pokemon.propTypes = {
  history: PropTypes.object.isRequired,
  pokemon: PropTypes.object,
  onSearchPokemon: PropTypes.func.isRequired
};

export default Pokemon;
