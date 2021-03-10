import React from "react";

import Nav from "../../components/Nav";
import { LogoContainer, Logo } from "./styled";
import { BotanicaMidnightBackground } from "../../globalStyles/backgrounds";

const Home = () => {
  return (
    <BotanicaMidnightBackground>
      <Nav />
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </BotanicaMidnightBackground>
  );
};

export default Home;
