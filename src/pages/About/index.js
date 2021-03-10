import React from "react";

import { BotanicaMidnightBackground } from "../../globalStyles/backgrounds";
import { Bio, AboutBody, AboutText } from "./styled";
import Nav from "../../components/Nav";
import logo from "../../images/botanica-logo.jpg";

const About = () => {
  return (
    <BotanicaMidnightBackground>
      <Nav />
      <AboutBody>
        <img src={logo} alt="logo" width="250px" />
        <Bio>
          <AboutText>
            Somos un Café Vegano y Vegetariano, con una ética ecológica que
            respeta la naturaleza y cuida a nuestro planeta. Además, promovemos
            productos orgánicos locales de la más alta calidad.
          </AboutText>
          <br />
          <AboutText>
            Nuestro Café, es un lugar muy especial y encantador. En Botánica
            Coffee House somos verdaderos amantes del Café y de las plantas.
            Esperamos poder compartir y contagiar ese amor contigo.
          </AboutText>
          <br />
          <AboutText>Te esperamos!</AboutText>
        </Bio>
      </AboutBody>
    </BotanicaMidnightBackground>
  );
};

export default About;
