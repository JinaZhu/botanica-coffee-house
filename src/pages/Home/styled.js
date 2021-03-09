import styled from "styled-components";

import botanicaImagePath from "../../images/botanica-background.jpg";
import botanicaMobileImagePath from "../../images/botanica-background-mobile.png";
import logoImagePath from "../../images/botanica-logo.jpg";

export const Homepage = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-image: url(${botanicaImagePath});
  background-position: center;
  background-size: cover;
  overflow: hidden;

  @media screen and (max-width: 425px) {
    background-image: url(${botanicaMobileImagePath});
  }
`;

export const LogoContainer = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    height: 70vh;
  }
`;

export const Logo = styled.img.attrs({
  src: `${logoImagePath}`,
  alt: "Logo",
})`
  width: 35vw;

  @media screen and (max-width: 425px) {
    width: 80vw;
  }
`;
