const initState = {
  upcomingGames: [],
  gameCount: null,
  currentPage: 1,
  isGameLoading: true,
};

export const UpcomingGames = (state = initState, action) => {
  switch (action.type) {
    case "UPCOMING_GAMES": {
      return {
        ...state,
        upcomingGames: action.payload.upcoming,
        gameCount: action.payload.count,
        isGameLoading: false,
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
