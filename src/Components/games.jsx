import React from "react";
//REDUX
import { useDispatch } from "react-redux";
//Styled and Animation
//Import action-creators
import { gameDetail } from "../Actions/gameDetailAction";
import styled from "styled-components";
import { motion } from "framer-motion";

//Function
import { imageResize } from "../util";

const Game = ({ name, img, rating, released, id }) => {
  const dispatch = useDispatch();

  //Converting number to string
  const idToString = id.toString();

  const gameDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(gameDetail(id));
  };

  return (
    <GameStyled layoutId={idToString} onClick={gameDetailHandler}>
      <motion.h3 layoutId={`title ${idToString}`}>{name}</motion.h3>
      <p className="released">{released}</p>
      <p className="rating">Rating: {rating}</p>
      <motion.img
        layoutId={`image ${idToString}`}
        src={imageResize(img, 640)}
        alt={name}
      />
    </GameStyled>
  );
};

//STYLED
const GameStyled = styled(motion.div)`
  cursor: pointer;
  overflow: hidden;
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(70, 56, 56, 0.4);
  border-radius: 1rem;
  .released {
    padding-left: 2rem;
    float: left;
  }
  .rating {
    padding-right: 2rem;
    float: right;
  }
  text-align: center;
  img {
    height: 40vh;
    object-fit: cover;
    width: 100%;
  }
`;

export default Game;
