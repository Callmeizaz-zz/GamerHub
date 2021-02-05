const initState = {
  selectedGame: { selectedGame: [] },
  screenshots: { screenshots: [] },
  isLoading: true,
};

export const gameDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_GAME_DETAILS": {
      return {
        ...state,
        selectedGame: action.payload.gameDetails,
        screenshots: action.payload.screenshot,
        isLoading: false,
      };
    }
    case "IS_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "RESET_STATE": {
      return {
        selectedGame: { selectedGame: [] },
        screenshots: { screenshots: [] },
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
