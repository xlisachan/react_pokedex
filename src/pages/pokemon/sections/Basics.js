import React from 'react';
import '../Pokemon.scss';

const Basics = ({ pokemon }) => {
  const displayType = (type) => {
    switch (type) {
      case 'bug':
        return 'darkseagreen';
      case 'dark':
        return 'darkgray';
      case 'dragon':
        return 'darkslategray';
      case 'electric':
        return 'goldenrod';
      case 'fairy':
        return 'pink';
      case 'fighting':
        return 'darkorange';
      case 'fire':
        return 'red';
      case 'flying':
        return 'cadetblue';
      case 'ghost':
        return 'violet';
      case 'grass':
        return 'green';
      case 'ground':
        return 'sienna';
      case 'ice':
        return 'aqua';
      case 'normal':
        return 'gray';
      case 'psychic':
        return 'fuchsia';
      case 'poison':
        return 'rebeccapurple';
      case 'rock':
        return 'brown';
      case 'steel':
        return 'darkslateblue';
      case 'water':
        return 'blue';
      default:
        return 'black'
    }
  }
  return (
    <section style={{ display: 'flex', alignItems: 'center' }}>
      <img src={pokemon.image} alt={pokemon.name} />

      <div>
        <p>{pokemon.name}</p>

        <p
          className="pokemon-type"
          style={{ background: displayType(pokemon.type) }}
        >
          {pokemon.type}
        </p>
      </div>
    </section>
  );
}

export default Basics;