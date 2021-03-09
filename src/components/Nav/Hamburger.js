import React from "react";

import { StyledBurger } from "./styled";

const Hamburger = ({ onClick, isOpen }) => {
  return (
    <StyledBurger isOpen={isOpen} onClick={() => onClick(!isOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Hamburger;
