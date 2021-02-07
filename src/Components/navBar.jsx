import React from "react";
//Styled and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { AllPopularGame } from "../Actions/popularGameActions";
import { allUpcomingGames } from "../Actions/upcomingGameAction";
import { AllReleasedGames } from "../Actions/releasedGameAction";
//Router
import { Link, useHistory, useLocation } from "react-router-dom";
//COMPONENTS
import SearchGame from "../Components/searchGame";

const Nav = () => {
  //Redux selector
  const { currentPage } = useSelector((state) => state.popular);

  const dispatch = useDispatch();
  const History = useHistory();
  const { pathname } = useLocation();

  //PAGE HANDLER
  const popularPageHandler = () => {
    dispatch(AllPopularGame(1));
    History.push(`/popular/games?page=${currentPage}`);
  };
  const upcomingPageHandler = () => {
    dispatch(allUpcomingGames(1));
    History.push(`/upcoming/games?page=${currentPage}`);
  };
  const releasedPageHandler = () => {
    dispatch(AllReleasedGames(1));
    History.push(`/upcoming/games?page=${currentPage}`);
  };
  return (
    <NavBar>
      <SearchGame />
      <Ul>
        <li>
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "60%" : "0%" }}
            exit={{ duration: 0.4 }}
          />
        </li>
        <li>
          <Link
            onClick={() => {
              popularPageHandler();
            }}
            to={`/popular/games?page=${currentPage}`}
          >
            Popular
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/popular/games" ? "60%" : "0%" }}
            exit={{ duration: 0.4 }}
          />
        </li>
        <li>
          <Link
            onClick={() => {
              upcomingPageHandler();
            }}
            to={`/upcoming/games?page=${currentPage}`}
          >
            Upcoming
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/upcoming/games" ? "60%" : "0%" }}
            exit={{ duration: 0.4 }}
          />
        </li>
        <li>
          <Link
            onClick={() => {
              releasedPageHandler();
            }}
            to={`/released/games?page=${currentPage}`}
          >
            Released
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/released/games" ? "60%" : "0%" }}
            exit={{ duration: 0.4 }}
          />
        </li>
      </Ul>
    </NavBar>
  );
};

//Styled
const NavBar = styled(motion.nav)`
  width: 100%;
  min-height: 8vh;
  position: fixed;
  display: inline-flex;
  justify-content: space-around;
  background: #333;
  li {
    color: #fff;
    position: relative;
  }
`;

const Ul = styled(motion.ul)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  li {
    list-style: none;
    padding: 1rem;
  }
`;
const Line = styled(motion.div)`
  background: tomato;
  width: 0%;
  height: 0.3rem;
  position: absolute;
  left: 10%;
  top: 75%;
  margin-left: 8px;
`;
export default Nav;
