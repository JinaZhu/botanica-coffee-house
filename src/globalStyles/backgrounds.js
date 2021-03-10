import styled from "styled-components";

import botanicaImagePath from "../images/botanica-background.jpg";
import botanicaMobileImagePath from "../images/botanica-background-mobile.png";

export const BotanicaMidnightBackground = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-image: url(${botanicaImagePath});
  background-position: center;
  background-size: cover;
  overflow: hidden;

  @media screen and (max-width: 425px) {
    background-image: url(${botanicaMobileImagePath});
  }
`;
