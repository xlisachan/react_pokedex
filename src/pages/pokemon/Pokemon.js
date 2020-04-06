import React from 'react';
import './Pokemon.scss';
import Basics from './sections/Basics';
import Stats from './sections/Stats';
import Abilities from './sections/Abilities';

const Pokemon = ({ pokemon }) => {
  return (
    <>
      <center>
        <span style={{ fontSize: '.6rem' }}>No.</span>
        <span style={{ fontSize: '.8rem' }}>{pokemon.id}</span>
      </center>

      <Basics pokemon={pokemon} />

      <Stats pokemon={pokemon} />

      <Abilities pokemon={pokemon} />
    </>
  );
};

export default Pokemon;
