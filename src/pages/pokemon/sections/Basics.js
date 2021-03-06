import React from 'react';
import { connect } from 'react-redux';
import { addPokemon, removePokemon } from '../../../actions/trainerActions';
import DeleteModal from '../../../components/DeleteModal';

import '../index.scss';

class Basics extends React.Component {
  state = {
    isOwned: null,
  }

  componentDidMount() {
    this.hasRelation(this.props.pokemon.id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.pokedex.length !== prevProps.pokedex.length) {
      this.hasRelation(this.props.pokemon.id)
    }
  }

  hasRelation = id => {
    const rel = this.props.pokedex.filter(mon => mon.id === id);
    this.setState({ isOwned: rel.length > 0 ? true : false });
  }

  displayType = (type) => {
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
  };

  render() {
    const { pokemon } = this.props;
    return (
      <div className="pokemon-basics">
        <div className="pokemon-top">
          <img src={pokemon.image} alt={pokemon.name} />
          <div>
            <p>{pokemon.name}</p>

            <span
              className="pokemon-type"
              style={{ background: this.displayType(pokemon.type) }}
            >
              {pokemon.type}
            </span>
          </div>
        </div>

        {this.state.isOwned ?
          <DeleteModal
            item={'pokemon'}
            el={this.props.pokemon}
            onClick={() => this.props.onRemovePokemon(this.props.trainer.name, this.props.pokemon.id)}
          />
          :
          <div
            className="button add-button"
            onClick={() => this.props.onAddPokemon(this.props.trainer.name, {
              img: this.props.pokemon.image,
              id: this.props.pokemon.id,
              name: this.props.pokemon.name
            })
          }>
            Add To Pokedex
          </div>
        }
      </div>
    );
  };
};

const mapStateToProps = state => ({
  trainer: state.trainer,
  pokedex: state.trainer.pokedex
});

const mapDispatchToProps = dispatch => ({
  onAddPokemon(trainerName, newPokemon) {
    dispatch(
      addPokemon(trainerName, newPokemon)
    )
  },

  onRemovePokemon(trainerName, pokemonId) {
    dispatch(
      removePokemon(trainerName, pokemonId)
    )
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Basics);