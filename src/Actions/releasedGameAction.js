import axios from "axios";
//IMPORT URL
import { allReleasedGames } from "../Api/api";

export const AllReleasedGames = (page) => async (dispatch) => {
  dispatch({
    type: "GAME_LOADING",
  });

  const fetchReleasedGames = await axios.get(allReleasedGames(page));
  dispatch({
    type: "RELEASED_GAMES",
    payload: {
      releasedGames: fetchReleasedGames.data.results,
      count: fetchReleasedGames.data.count,
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
