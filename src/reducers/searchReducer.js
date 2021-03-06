import C from '../actions/constants';

const initialState = {
  error: false,
  fetching: false,
  searchInput: "",
  searchResults: {},
  universe: []
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.CLEAR_RESULTS:
      return {
        ...state,
        searchResults: {}
      }
    
    case C.FETCH_PENDING:
      return {
        ...state,
        error: false,
        fetching: true
      }

    case C.FETCH_CANCEL:
      return {
        ...state,
        fetching: false
      }
    
    case C.SEARCH_ERROR:
      return {
        ...state,
        error: true,
        fetching: false,
        searchResult: {}
      }

    case C.SET_POKEMON:
      return {
        ...state,
        fetching: false,
        searchResults: action.payload
      }
      
    case C.UPDATE_SEARCHINPUT:
      return {
        ...state,
        searchInput: action.payload
      }

    case C.GET_UNIVERSE :
      return {
          ...state,
          universe: action.payload
      }

    default:
      return state
  }
}

export default searchReducer;