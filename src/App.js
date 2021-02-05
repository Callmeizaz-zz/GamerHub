import React from "react";
//Import Components
import Nav from "../src/Components/navBar";
//IMPORT PAGES
import Home from "../src/Pages/Home";
import SearchedResults from "../src/Pages/Searched";
import PopularGame from "../src/Pages/Popular";
//Global styles
import GlobalStyles from "../src/Styles/GlobalStyles";
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
      </Switch>
    </div>
  );
}

export default App;
