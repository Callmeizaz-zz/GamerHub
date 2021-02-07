import axios from "axios";
//URL
import { allUpcomingURL } from "../Api/api";

export const allUpcomingGames = (page) => async (dispatch) => {
  dispatch({
    type: "IS_GAME_LOADING",
  });

  const fetchUpcoming = await axios.get(allUpcomingURL(page));
  dispatch({
    type: "UPCOMING_GAMES",
    payload: {
      upcoming: fetchUpcoming.data.results,
      count: fetchUpcoming.data.count,
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
