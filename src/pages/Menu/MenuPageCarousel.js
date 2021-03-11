import React from "react";

import leftArrow from "../../images/icons/arrow-left.svg";
import rightArrow from "../../images/icons/arrow-right.svg";
import {
  MenuSelectionImg,
  ArrrowButton,
  CurrentViewMenuPage,
  CarouselContainer,
} from "./styled";

const MenuPageCarousel = ({ displayPageNum, setDisplayPageNum, menuPages }) => {
  function forward() {
    if (displayPageNum === 9) {
      setDisplayPageNum(0);
    } else {
      let newPageNum = displayPageNum + 1;
      setDisplayPageNum(newPageNum);
    }
  }

  function backward() {
    console.log(displayPageNum);
    if (displayPageNum === 0) {
      setDisplayPageNum(9);
    } else {
      let newPageNum = displayPageNum - 1;
      setDisplayPageNum(newPageNum);
    }
  }

  return (
    <CarouselContainer>
      <ArrrowButton onClick={backward}>
        <MenuSelectionImg src={leftArrow} alt="left arrow" width="50" />
      </ArrrowButton>
      <CurrentViewMenuPage
        src={menuPages[displayPageNum]}
        alt="menu page"
        width="350"
      />
      <ArrrowButton onClick={forward}>
        <MenuSelectionImg src={rightArrow} alt="right arrow" width="50" />
      </ArrrowButton>
    </CarouselContainer>
  );
};

export default MenuPageCarousel;
