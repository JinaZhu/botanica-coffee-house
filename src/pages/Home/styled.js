import styled from "styled-components";

import logoImagePath from "../../images/botanica-logo.jpg";

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
  width: 450px;

  @media screen and (max-width: 425px) {
    width: 325px;
  }
`;
