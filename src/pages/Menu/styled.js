import styled from "styled-components";

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
`;

export const MenuSelectionImg = styled.img`
  cursor: pointer;
  margin: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ArrrowButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
`;
