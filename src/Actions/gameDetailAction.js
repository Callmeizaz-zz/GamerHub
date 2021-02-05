import axios from "axios";
//Import URL
import { gameDetailURL, gameScreenshotURL } from "../Api/api";

export const gameDetail = (id) => async (dispatch) => {
  dispatch({
    type: "IS_LOADING",
  });
  const detail = await axios.get(gameDetailURL(id));
  const screenShot = await axios.get(gameScreenshotURL(id));
  dispatch({
    type: "GET_GAME_DETAILS",
    payload: {
      gameDetails: detail.data,
      screenshot: screenShot.data,
    },
  });
};

export const resetState = () => (dispatch) => {
  dispatch({
    type: "RESET_STATE",
  });
};
