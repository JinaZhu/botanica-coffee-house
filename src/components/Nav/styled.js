import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainter = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 10px;
  padding: 0;
  border: 1px solid black;

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0;
  list-style-type: none;
  margin: 10px;
`;

export const StyledBurger = styled.button`
  display: none;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin: 5px 10px;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }
    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;
