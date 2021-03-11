import React from "react";

import { MenuSelectionImg, AllMenyPages } from "./styled";

const MenuSelection = ({ menuPages, setDisplayPageNum, displayPageNum }) => {
  return (
    <AllMenyPages>
      {menuPages.map((menuPage, i) => {
        return (
          <MenuSelectionImg
            key={i}
            src={menuPage}
            alt="menu page"
            width="100"
            onClick={() => setDisplayPageNum(i)}
            isActive={i === displayPageNum}
          />
        );
      })}
    </AllMenyPages>
  );
};

export default MenuSelection;
