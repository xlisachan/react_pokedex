import C from '../actions/constants';

const initialState = {
  error: false,
  fetching: false,
  searchInput: "",
  searchMatch: false,
  searchResults: {}
}

export default (state = initialState, action) => {
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
    
    case C.SEARCH_NOMATCH:
      return {
        ...state,
        nomatch: true
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

    default:
      return state
  }
}