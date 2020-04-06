const initialState = {
  name: "lisa",
  pokedex: [
    {
      id: 1,
      name: "bulbasaur",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
      id: 4,
      name: "charmander",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
      id: 7,
      name: "squirtle",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
  ]
};

export default (state=initialState, action) => {
  switch (action.type) {
      default :
          return state
  }
};