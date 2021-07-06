import React from 'react';
import PropTypes from 'prop-types';
import Abilities from './sections/Abilities';
import Basics from './sections/Basics';
import Header from './sections/Header'
import Stats from './sections/Stats';

import './index.scss';

const Pokemon = ({ history, pokemon, onSearchPokemon = f => f }) => (
    <section className="pokemon">
      <Header
        history={history}
        onSearchPokemon={onSearchPokemon}
        pokemon={pokemon}
      />

      <Basics pokemon={pokemon} />

      <Stats pokemon={pokemon} />

      <Abilities pokemon={pokemon} />
    </section>
);

Pokemon.propTypes = {
  history: PropTypes.object.isRequired,
  pokemon: PropTypes.object,
  onSearchPokemon: PropTypes.func.isRequired
};

export default Pokemon;
