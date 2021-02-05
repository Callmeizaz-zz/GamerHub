import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  releasedGamesURL,
  searchedGamesURL,
  allPopularGamesURL,
} from "../Api/api";

export const loadGames = () => async (dispatch) => {
  const fetchPopularGames = await axios.get(popularGamesURL());
  const fetchUpcomingGames = await axios.get(upcomingGamesURL());
  const fetchReleasedGames = await axios.get(releasedGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: fetchPopularGames.data.results,
      upcoming: fetchUpcomingGames.data.results,
      released: fetchReleasedGames.data.results,
    },
  });
};

export const searchGames = (game_name) => async (dispatch) => {
  const fetchSearchedGames = await axios.get(searchedGamesURL(game_name));
  dispatch({
    type: "SEARCH_GAMES",
    payload: {
      searched: fetchSearchedGames.data.results,
    },
  });
};

export const searchInputVal = (value) => (dispatch) => {
  dispatch({
    type: "SEARCH_INPUT",
    payload: {
      searchInput: value,
    },
  });
};

export const fetchAllPopularGames = (page) => async (dispatch) => {
  const getAllPopGames = await axios.get(allPopularGamesURL(page));
  dispatch({
    type: "POPULAR_GAMES",
    payload: {
      popularGames: getAllPopGames.data.results,
      count: getAllPopGames.data.count,
    },
  });
};
