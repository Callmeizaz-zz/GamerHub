import React from "react";
//STYLED AND MOTION
import styled from "styled-components";
import { motion } from "framer-motion";

const Pagination = () => {
  return (
    <Page>
      <ul className="pagination">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </Page>
  );
};

//STYLED
const Page = styled(motion.div)`
  ul {
    display: flex;
  }
`;

export default Pagination;
