import React from "react";

import leftArrow from "../../images/icons/arrow-left.svg";
import rightArrow from "../../images/icons/arrow-right.svg";
import { MenuSelectionImg, ArrrowButton } from "./styled";

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
    <div>
      <img src={menuPages[displayPageNum]} alt="menu page" width="350" />
      <div>
        <ArrrowButton onClick={backward}>
          <MenuSelectionImg src={leftArrow} alt="left arrow" width="30" />
        </ArrrowButton>
        <ArrrowButton onClick={forward}>
          <MenuSelectionImg src={rightArrow} alt="right arrow" width="30" />
        </ArrrowButton>
      </div>
    </div>
  );
};

export default MenuPageCarousel;
