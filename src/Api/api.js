//BASE URL
const base_url = "https://api.rawg.io/api/";

//Current date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const CurrentYear = new Date().getFullYear();
const CurrentMonth = getCurrentMonth();
const CurrentDay = getCurrentDay();

const CurrentDate = `${CurrentYear}-${CurrentMonth}-${CurrentDay}`;
const LastYear = `${CurrentYear - 1}-${CurrentMonth}-${CurrentDay}`;
const NextYear = `${CurrentYear + 1}-${CurrentMonth}-${CurrentDay}`;

//Popular Movie url

const Popular_games = `games?dates=${LastYear},${CurrentDate}&ordering=-rating&page_size=10`;
const Upcoming_games = `games?dates=${CurrentDate},${NextYear}&ordering=-added&page_size=10`;
const Released_games = `games?dates=${LastYear},${CurrentDate}&ordering=-released&page_size=10`;

//Getgames
export const popularGamesURL = () => `${base_url}${Popular_games}`;
export const upcomingGamesURL = () => `${base_url}${Upcoming_games}`;
export const releasedGamesURL = () => `${base_url}${Released_games}`;

//GET DETAILS
export const gameDetailURL = (game_id) => `${base_url}games/${game_id}`;
//GET SCREENSHOT
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;

//GET SEARCHED GAMES
export const searchedGamesURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=10`;

//GET ALL POPULAR GAMES
export const allPopularGamesURL = (page) =>
  `${base_url}games?dates=${LastYear},${CurrentDate}&ordering=-rating&page=${page}&page_size=36`;
