import { combineReducers } from "redux";
//Importing reducers
import { gameReducer } from "./gameReducer";
import { gameDetailReducer } from "./gameDetailReducer";
import { PopularGames } from "./popularGameReducer";
import { UpcomingGames } from "./upcomingReducer";
import { ReleasedGames } from "./releasedGamesReducer";

const rootReducer = combineReducers({
  games: gameReducer,
  detail: gameDetailReducer,
  popular: PopularGames,
  upcoming: UpcomingGames,
  released: ReleasedGames,
});

export default rootReducer;
