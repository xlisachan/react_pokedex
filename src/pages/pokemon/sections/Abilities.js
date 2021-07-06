import React from 'react';

const Abilities = ({ pokemon }) => (
  <div className="pokemon-abilities">
    <div className="pokemon-header">
      {pokemon.abilities.length > 1 ? 'Abilities' : 'Ability'}
    </div>

    <div className="pokemon-body">
      {pokemon.abilities.join(", ")}
    </div>
  </div>
);

export default Abilities;