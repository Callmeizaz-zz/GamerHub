const initState = {
  allPopularGame: [],
  gameCount: null,
  currentPage: 1,
  gameLoading: true,
};

export const PopularGames = (state = initState, action) => {
  switch (action.type) {
    case "POPULAR_GAMES": {
      return {
        ...state,
        allPopularGame: action.payload.popular,
        gameCount: action.payload.count,
        gameLoading: false,
      };
    }
    case "IS_GAME_LOADING": {
      return {
        ...state,
        gameLoading: true,
      };
    }
    case "NEXT_PAGE": {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }
    case "PREV_PAGE": {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }
    case "RESET_PAGE": {
      return {
        ...state,
        currentPage: 1,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
