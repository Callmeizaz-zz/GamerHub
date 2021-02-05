import { combineReducers } from "redux";
//Importing reducers
import { gameReducer } from "./gameReducer";
import { gameDetailReducer } from "./gameDetailReducer";
import { PopularGames } from "./popularGameReducer";

const rootReducer = combineReducers({
  games: gameReducer,
  detail: gameDetailReducer,
  popular: PopularGames,
});

export default rootReducer;
