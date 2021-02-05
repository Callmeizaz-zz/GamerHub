import React, { useState } from "react";
//Styled and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//ROUTER AND REDUX
import { useDispatch, useSelector } from "react-redux";
import { searchGames, searchInputVal } from "../Actions/gameActions";
import { ResetPage } from "../Actions/popularGameActions";
import { resetState } from "../Actions/gameDetailAction";
//Router
import { useHistory } from "react-router-dom";

const Nav = () => {
  //Redux selector
  const { currentPage } = useSelector((state) => state.popular);

  //STATES

  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  const History = useHistory();

  //HANDLERS
  const SearchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(resetState());
    dispatch(searchGames(searchInput));
    dispatch(searchInputVal(searchInput));
    History.push(`/search?=${searchInput}`);
    setSearchInput("");
  };

  //PAGE HANDLER
  const resetPageHandler = () => {
    dispatch(ResetPage());
  };
  return (
    <NavBar>
      <Searched>
        <form action="">
          <input
            onChange={SearchHandler}
            type="text"
            value={searchInput}
            placeholder="Search Games"
          />
          <button onClick={SubmitHandler}>Search</button>
        </form>
      </Searched>
      <Ul>
        <Link to="">
          <li> Home</li>
        </Link>
        <Link
          onClick={resetPageHandler}
          to={`/popular/games?page=${currentPage}`}
        >
          <li> Popular</li>
        </Link>
        <Link to="">
          <li> Upcoming</li>
        </Link>
        <Link to="">
          <li> Released</li>
        </Link>
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
  }
`;
const Searched = styled(motion.div)`
  display: inline-flex;
  padding: 1rem 5rem;
  text-align: center;
  input {
    font-size: 1.5rem;
    padding: 0.2rem 0.4rem;
    border: none;
    box-shadow: 0px 0px 30px rgba(83, 82, 82, 0.3);
    border-radius: 1rem;
    outline: none;
    &:focus {
      outline: none;
    }
  }
  button {
    border: none;
    padding: 0.2rem 0.4rem;
    margin: 0rem 0.5rem;
    font-size: 1.5rem;
    border-radius: 1rem;
    background-color: #fff;
    &:focus {
      outline: none;
    }
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

export default Nav;
