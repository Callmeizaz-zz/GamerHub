import React, { useEffect } from "react";
//ANIMATION AND STYLED
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

//REDUX and ROUTER
import {
  AllPopularGame,
  NextPage,
  PrevPage,
} from "../Actions/popularGameActions";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
//COMPONENTS
import Game from "./games";
import GameDetail from "./gameDetail";

const PopularGames = () => {
  //GETTNG PATH
  const Location = useLocation();
  const History = useHistory();
  const pathId = Location.pathname.split("/")[4];

  //Redux store
  const { allPopularGame, gameCount, currentPage, gameLoading } = useSelector(
    (state) => state.popular
  );
  //No of pages
  const totalPage = Math.ceil(gameCount / 36);

  //SCROLL TO TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  //Handlers
  const PrevHandler = () => {
    if (currentPage <= 1) {
      return;
    } else {
      dispatch(PrevPage());
      History.push(`/popular/games?page=${currentPage - 1}`);
    }
  };

  const NextHandler = () => {
    if (currentPage >= totalPage) {
      console.log("Hello");
      return;
    } else {
      dispatch(NextPage());
      History.push(`/popular/games?page=${currentPage + 1}`);
    }
  };
  //Fetch all popular games
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchGames(page) {
      const games = dispatch(AllPopularGame(page));
      return games;
    }
    fetchGames(currentPage);
  }, [dispatch, currentPage]);

  // {`${currentPage} /popular/games/${popularGames.id}`}
  return (
    <Popular>
      <h2>Popular Games </h2>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} curPage={currentPage} />}
        </AnimatePresence>
        {gameLoading ? (
          <h2>Loading</h2>
        ) : (
          <Games>
            {allPopularGame.map((popularGames) => (
              <Link
                to={`/popular/games/${currentPage}/${popularGames.id}`}
                key={popularGames.id}
              >
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
        )}
      </AnimateSharedLayout>
      <Page>
        <Button onClick={PrevHandler}>
          <span>Prev</span>
        </Button>
        <p>{currentPage}</p>
        <Button onClick={NextHandler}>
          <span>Next</span>
        </Button>
      </Page>
    </Popular>
  );
};

//Styled
const Popular = styled(motion.div)`
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
//STYLED
const Page = styled(motion.div)`
  padding: 10rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  p {
    font-weight: bold;
  }
`;

const Button = styled(motion.button)`
  letter-spacing: 0.1em;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  color: #fff;
  border: 4px solid #000;
  box-shadow: 0px 0px 0px 1px #000 inset;
  background-color: #000;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
  &:hover {
    text-decoration: none;
  }
  &:hover {
    color: #333;
    border: 4px solid #666;
    background-color: #fff;
    box-shadow: 0px 0px 0px 4px #eee inset;
  }
  &::after {
    background: #fff;
    border: 0px solid #000;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.8;
    position: absolute;
    top: -50px;
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
    width: 50px;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1); /*easeOutCirc*/
    z-index: 1;
  }
  &:hover::after {
    background: #fff;
    border: 20px solid #000;
    opacity: 0;
    left: 120%;
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
  }
  span {
    transition: all 0.2s ease-out;
    z-index: 2;
    &:hover {
      letter-spacing: 0.13em;
      color: #333;
    }
  }
`;
export default PopularGames;
