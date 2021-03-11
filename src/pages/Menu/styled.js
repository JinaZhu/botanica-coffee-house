import styled, { css } from "styled-components";

export const MenuBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AllMenyPages = styled.div`
  overflow-x: scroll;
  will-change: transform;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50vw;
  margin: 25px 0;

  @media screen and (max-width: 425px) {
    width: 90vw;
    margin: 15px 0;
  }
`;

export const MenuSelectionImg = styled.img`
  cursor: pointer;
  margin: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  ${(props) => {
    return (
      props.isActive &&
      css`
        transform: scale(1.1);
      `
    );
  }};
`;

export const ArrrowButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  margin: 0 15px;

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const CurrentViewMenuPage = styled.img`
  width: 500px;

  @media screen and (max-width: 425px) {
    width: 350px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
