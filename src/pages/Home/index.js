import React from "react";

import Nav from "../../components/Nav";
import { Homepage, LogoContainer, Logo } from "./styled";

const Home = () => {
  return (
    <Homepage>
      <Nav />
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Homepage>
  );
};

export default Home;
