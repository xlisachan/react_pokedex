import C from '../actions/constants';

const initialState = {
  name: "lisa",
  pokedex: []
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