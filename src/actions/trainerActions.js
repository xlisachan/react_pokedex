import C from './constants';

export const addPokemon = (trainerName, newPokemon) => dispatch => {
  dispatch({
    type: C.ADD_POKEMON,
    payload: trainerName, newPokemon
  })
}

export const removePokemon = (trainerName, pokemonId) => dispatch => {
  dispatch({
    type: C.REMOVE_POKEMON,
    payload: trainerName, pokemonId
  })
};