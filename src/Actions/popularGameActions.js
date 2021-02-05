import axios from "axios";
//Import URL
import { allPopularGamesURL } from "../Api/api";

export const AllPopularGame = (page) => async (dispatch) => {
  dispatch({
    type: "IS_GAME_LOADING",
  });
  const fetchPopularGames = await axios.get(allPopularGamesURL(page));
  dispatch({
    type: "POPULAR_GAMES",
    payload: {
      popular: fetchPopularGames.data.results,
      count: fetchPopularGames.data.count,
    },
  });
};

export const NextPage = () => (dispatch) => {
  dispatch({
    type: "NEXT_PAGE",
  });
};
export const PrevPage = () => (dispatch) => {
  dispatch({
    type: "PREV_PAGE",
  });
};

export const ResetPage = () => (disptach) => {
  disptach({
    type: "RESET_PAGE",
  });
};
