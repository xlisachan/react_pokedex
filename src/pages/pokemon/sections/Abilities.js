import React from 'react';
import '../Pokemon.scss';

const Abilities = ({ pokemon }) => (
  <section>
    <div className="pokemon-header">
      {pokemon.abilities.length > 1 ? 'Abilities' : 'Ability'}
    </div>

    <div className="pokemon-body">
      {pokemon.abilities.join(", ")}
    </div>
  </section>
);

export default Abilities;