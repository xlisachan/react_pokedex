import C from './constants';
import axios from 'axios';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

const setParams = ({ query }) => {
  const searchParams = new URLSearchParams();
  searchParams.set("pokemon", query || "");
  return searchParams.toString();
};

export const clearResult = () => dispatch => {
  dispatch({
    type: C.CLEAR_RESULTS
  })
};

export const pokeSearch = (pokemon, history) => dispatch => {
  dispatch({
    type: C.FETCH_PENDING
  })

  dispatch({
    type: C.UPDATE_SEARCHINPUT,
    payload: pokemon
  })

  const url = setParams({ query: pokemon });

  axios.create({
    baseURL: apiUrl,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
    .get(`${pokemon}`)
    .then(({ data }) => {
      if (data) {
        const pokemonAbilities = [];
        const abilities = data.abilities;
        abilities.forEach(ability => {
          pokemonAbilities.push(ability.ability.name);
        });

        const results = {
          abilities: pokemonAbilities,
          atk: parseInt(`${data.stats[4].base_stat}`),
          def: parseInt(`${data.stats[3].base_stat}`),
          hp: parseInt(`${data.stats[5].base_stat}`),
          id: data.id,
          image: data.sprites.front_default,
          name: data.name,
          type: data.types[0].type.name
        }

        dispatch({
          type: C.SET_POKEMON,
          payload: results
        })

        history.push(`/pokemon/?${url}`)
      }
    })
    .catch(error => {
      console.log(error)
      history.push(`/pokemon/?${url}`)

      dispatch({
        type: C.FETCH_CANCEL
      })
      
      dispatch({
        type: C.SEARCH_NOMATCH
      })
    })
};

export const getAllPokemon = () => dispatch => {
  axios.create({
    baseURL: apiUrl,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
    .get('?limit=802')
    .then(({ data }) => {
      if (data.results) {
        return data.results.map(result=> ({
          label: result.name
        }))
      }
    })
    .then(results => {
      dispatch({
        type: C.GET_UNIVERSE,
        payload: results
      })
    })
};