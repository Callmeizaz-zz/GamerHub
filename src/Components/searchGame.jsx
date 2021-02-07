import React, { useState } from "react";
//Styled and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useDispatch } from "react-redux";
import { searchGames, searchInputVal } from "../Actions/gameActions";
import { resetState } from "../Actions/gameDetailAction";
import { useHistory } from "react-router-dom";

const SearchGame = () => {
  //STATES
  const [searchInput, setSearchInput] = useState("");
  //REDUX
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
  return (
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
  );
};
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

export default SearchGame;
