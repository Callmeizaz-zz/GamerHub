import React, { useEffect } from "react";
//IMPORT DISPATCH
import { useDispatch, useSelector } from "react-redux";
//Import action-creators
import { loadGames } from "../Actions/gameActions";
//Styled and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
//COMPONENTS
import Game from "../Components/games";
import GameDetail from "../Components/gameDetail";
//ROUTER
import { useLocation, Link } from "react-router-dom";

const Home = () => {
  //Current Location
  const Location = useLocation();

  const pathID = Location.pathname.split("/")[2];

  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, upcoming, released } = useSelector((state) => state.games);

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathID && <GameDetail pathId={pathID} />}
        </AnimatePresence>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((popularGames) => (
            <Link to={`/games/${popularGames.id}`} key={popularGames.id}>
              <Game
                name={popularGames.name}
                img={popularGames.background_image}
                rating={popularGames.rating}
                id={popularGames.id}
                key={popularGames.id}
                released={popularGames.released}
              />
            </Link>
          ))}
        </Games>

        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((upcomingGames) => (
            <Link to={`/games/${upcomingGames.id}`} key={upcomingGames.id}>
              <Game
                name={upcomingGames.name}
                img={upcomingGames.background_image}
                rating={upcomingGames.rating}
                id={upcomingGames.id}
                key={upcomingGames.id}
                released={upcomingGames.released}
              />
            </Link>
          ))}
        </Games>
        <h2>Released Games</h2>
        <Games>
          {released.map((releasedGames) => (
            <Link to={`/games/${releasedGames.id}`} key={releasedGames.id}>
              <Game
                name={releasedGames.name}
                img={releasedGames.background_image}
                rating={releasedGames.rating}
                id={releasedGames.id}
                key={releasedGames.id}
                released={releasedGames.released}
              />
            </Link>
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
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

export default Home;
