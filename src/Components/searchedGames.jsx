import React from "react";
//Components
import Game from "./games";
import GameDetail from "./gameDetail";
//Redux
import { useSelector } from "react-redux";
//Router
import { Link, useLocation } from "react-router-dom";
//Animation and STYLED
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const SearchedGames = () => {
  const Location = useLocation();
  const pathId = Location.pathname.split("/")[2];

  const { searched, searchInput } = useSelector((state) => state.games);
  /*  const { selectedGame } = useSelector((state) => state.detail); */

  return (
    <SearchedList>
      <h2>Result's for {searchInput}</h2>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        <Games>
          {searched.map((searchedGame) => (
            <Link to={`/search/${searchedGame.id}`} key={searchedGame.id}>
              <Game
                name={searchedGame.name}
                img={searchedGame.background_image}
                rating={searchedGame.rating}
                id={searchedGame.id}
                key={searchedGame.id}
                released={searchedGame.released}
              />
            </Link>
          ))}
        </Games>
      </AnimateSharedLayout>
    </SearchedList>
  );
};

//Styled

const SearchedList = styled(motion.div)`
  margin-bottom: 2rem;
  padding: 1rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
`;
export default SearchedGames;
