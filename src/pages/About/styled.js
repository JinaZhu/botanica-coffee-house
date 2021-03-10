import styled, { css } from "styled-components";

const AlignCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AboutBody = styled.div`
  ${AlignCenter};
`;

export const Bio = styled.div`
  background-color: #0d163d;
  width: 500px;
  ${AlignCenter};
  margin-top: 35px;
  padding: 25px 15px;

  @media screen and (max-width: 425px) {
    width: 300px;
  }
`;

export const AboutText = styled.div`
  line-height: 1.2;
  color: #ae802c;
  font-size: 25px;
  font-family: "Bodoni", "Roboto";

  @media screen and (max-width: 425px) {
    font-size: 20px;
  }
`;
