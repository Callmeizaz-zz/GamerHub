const initState = {
  released: [],
  gameCount: null,
  currentPage: 1,
  gameLoading: true,
};

export const ReleasedGames = (state = initState, action) => {
  switch (action.type) {
    case "RELEASED_GAMES": {
      return {
        ...state,
        released: action.payload.releasedGames,
        gameCount: action.payload.count,
        gameLoading: false,
      };
    }
    case "GAME_LOADING": {
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
    default: {
      return {
        ...state,
      };
    }
  }
};
