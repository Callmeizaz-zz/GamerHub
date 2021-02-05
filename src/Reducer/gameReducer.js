const initState = {
  popular: [],
  upcoming: [],
  released: [],
  searched: [],
  searchInput: "",
};
export const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES": {
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        released: action.payload.released,
      };
    }
    case "SEARCH_GAMES": {
      return {
        ...state,
        searched: action.payload.searched,
      };
    }
    case "SEARCH_INPUT": {
      return {
        ...state,
        searchInput: action.payload.searchInput,
      };
    }
    default:
      return { ...state };
  }
};
