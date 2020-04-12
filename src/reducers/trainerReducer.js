import C from '../actions/constants';

const initialState = {
  name: "lisa",
  pokedex: [
    {
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "id": 1,
      "name": "bulbasaur"
    },
    {
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      "id": 4,
      "name": "charmander"
    },
    {
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      "id": 7,
      "name": "squirtle"
    }
  ]
};

const newMon = (state = {}, action) =>
  (action.type === C.ADD_POKEMON) ?
    action.newPokemon : state

export default (state = initialState, action) => {
  switch (action.type) {
    case C.ADD_POKEMON:
      return state.name === action.payload ?
        {
          ...state,
          pokedex: [
            ...state.pokedex,
            newMon(null, action)
          ]
        }
        :
        state

    case C.REMOVE_POKEMON:
      return state.name === action.payload ?
        {
          ...state,
          pokedex: state.pokedex.filter(mon => mon.id !== action.pokemonId)
        }
        :
        state

    default:
      return state
  }
};