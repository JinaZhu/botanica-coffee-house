import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainter = styled.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #ae802c;

  @media screen and (max-width: 425px) {
    height: 10vh;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 30px;
  padding: 9px 20px;
  border: 3px solid #ae802c;

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  list-style-type: none;
  margin: 10px 20px;
  font-family: "Bodoni";
  font-size: 25px;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  outline: none;
  color: #ae802c;
`;

export const DropdownNav = styled.ul`
  background: transparent;
  left: 0;
  position: absolute;
  width: 100vw;
  transition: transform 0.3s ease-in-out;
  color: black;
  z-index: 1;
  margin: 0;
  padding: 0;
  background-color: #0d163d;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(57%)" : "translateY(-100%)"};
`;

export const DropdownItem = styled.li`
  list-style-type: none;
  margin: 10px;
  font-family: "Bodoni";
  font-size: 25px;
  border-bottom: 1px solid #ae802c;
  padding: 10px;
  color: #ae802c;
`;

export const StyledBurger = styled.button`
  display: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
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
    background: #ae802c;
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
