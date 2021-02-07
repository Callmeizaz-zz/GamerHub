import React from "react";
//Import Components
import Nav from "./Components/navBar";
//IMPORT PAGES
import Home from "./Pages/Home";
import SearchedResults from "./Pages/Searched";
import PopularGame from "./Pages/Popular";
import Upcoming from "./Pages/Upcoming";
import Released from "./Pages/Released";
//Global styles
import GlobalStyles from "./Styles/GlobalStyles";
//Router
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const Location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch location={Location} key={Location.pathname}>
        <Route path={["/", "/games/:id"]} exact>
          <Home />
        </Route>
        <Route path={["/search", "/search/:id", "/search?="]} exact>
          <SearchedResults />
        </Route>
        <Route path="/popular/games">
          <PopularGame />
        </Route>
        <Route path="/upcoming/games">
          <Upcoming />
        </Route>
        <Route path="/released/games">
          <Released />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
