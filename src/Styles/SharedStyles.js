//STYLED AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
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
