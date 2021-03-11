import React, { useState } from "react";

import { BotanicaMidnightBackground } from "../../globalStyles/backgrounds";
import { MenuBody } from "./styled";
import Nav from "../../components/Nav";
import MenuSelection from "./MenuSelection";
import MenuPageCarousel from "./MenuPageCarousel";
import menu1 from "../../images/menu/menu-page-1.jpg";
import menu2 from "../../images/menu/menu-page-2.jpg";
import menu3 from "../../images/menu/menu-page-3.jpg";
import menu4 from "../../images/menu/menu-page-4.jpg";
import menu5 from "../../images/menu/menu-page-5.jpg";
import menu6 from "../../images/menu/menu-page-6.jpg";
import menu7 from "../../images/menu/menu-page-7.jpg";
import menu8 from "../../images/menu/menu-page-8.jpg";
import menu9 from "../../images/menu/menu-page-9.jpg";
import menu10 from "../../images/menu/menu-page-10.jpg";

const menuPages = [
  menu1,
  menu2,
  menu3,
  menu4,
  menu5,
  menu6,
  menu7,
  menu8,
  menu9,
  menu10,
];

const Menu = () => {
  const [displayPageNum, setDisplayPageNum] = useState(0);

  return (
    <BotanicaMidnightBackground>
      <Nav />
      <MenuBody>
        <MenuPageCarousel
          displayPageNum={displayPageNum}
          setDisplayPageNum={setDisplayPageNum}
          menuPages={menuPages}
        />
        <MenuSelection
          menuPages={menuPages}
          setDisplayPageNum={setDisplayPageNum}
          displayPageNum={displayPageNum}
        />
      </MenuBody>
    </BotanicaMidnightBackground>
  );
};

export default Menu;
