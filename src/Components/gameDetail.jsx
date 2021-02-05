import React from "react";
//STYLED
import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useSelector, useDispatch } from "react-redux";
//REDUX ACTIONS
import { resetState } from "../Actions/gameDetailAction";
//React router
import { useHistory, useLocation } from "react-router-dom";
//Function
import { imageResize } from "../util";
//Platform images
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import playstation from "../img/playstation.svg";
import ps4 from "../img/ps4.svg";
import ps5 from "../img/ps5.svg";
import xbox from "../img/xbox.svg";
import steam from "../img/steam.svg";

const GameDetail = ({ pathId, curPage }) => {
  const Dispatch = useDispatch();
  const History = useHistory();
  const Location = useLocation();
  const pathName = Location.pathname.split("/")[1];

  //EXIT DETAILS
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      Dispatch(resetState());
      switch (pathName) {
        case "search":
          return History.push(`/search?=${searchInput}`);
        case "popular":
          return History.push(`/popular/games?page=${curPage}`);
        default:
          return History.push("/");
      }
    }
  };
  //PLATFORMS IMAGE
  const PlatformIcon = (platformType) => {
    switch (platformType) {
      case "PlayStation 5":
        return ps5;
      case "Xbox One":
        return xbox;
      case "PlayStation 4":
        return ps4;
      case "PC":
        return steam;
      case "Nintendo Swtich":
        return nintendo;
      case "PlayStation":
        return playstation;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };
  //REDUX SELECTOR
  const { selectedGame, screenshots, isLoading } = useSelector(
    (state) => state.detail
  );
  const { searchInput } = useSelector((state) => state.games);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>
                  {selectedGame.name}
                </motion.h3>
                <p>Rating : {selectedGame.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platform>
                  {selectedGame.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={PlatformIcon(data.platform.name)}
                      alt={data.name}
                    />
                  ))}
                </Platform>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={imageResize(selectedGame.background_image, 1280)}
                alt={selectedGame.name}
              />
              <Description>
                <p>{selectedGame.description_raw}</p>
              </Description>
            </Media>

            <div className="gallery">
              {screenshots.results.map((img) => (
                <img
                  src={imageResize(img.image, 1280)}
                  alt={img.image}
                  key={img.id}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

//STYLED
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  z-index: 5;
  left: 0;
  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }
  &::-webkit-scrollbar-track {
    background: linear-gradient(90deg, #434343, #434343 1px, #111 0, #111);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #434343;
    border-radius: 16px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;
const Platform = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 4rem 0rem;
`;

export default GameDetail;
