import React from "react";

import { MenuSelectionImg, AllMenyPages } from "./styled";

const MenuSelection = ({ menuPages, setDisplayPageNum }) => {
  return (
    <AllMenyPages>
      {menuPages.map((menuPage, i) => {
        return (
          <MenuSelectionImg
            key={i}
            src={menuPage}
            alt="menu page"
            width="70"
            onClick={() => setDisplayPageNum(i)}
          />
        );
      })}
    </AllMenyPages>
  );
};

export default MenuSelection;
