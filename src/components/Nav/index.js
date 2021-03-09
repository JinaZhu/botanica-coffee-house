import React, { useState } from "react";

import { NavItem, NavUl, NavContainter } from "./styled";
import Hamburger from "./Hamburger";
import Dropdown from "./Dropdown";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainter>
      <NavUl>
        <NavItem>Inicio</NavItem>
        <NavItem>Menú</NavItem>
        <NavItem>Nosotrxs</NavItem>
        <NavItem>Contacto</NavItem>
      </NavUl>
      <Hamburger onClick={setIsOpen} isOpen={isOpen} />
      <Dropdown isOpen={isOpen} />
    </NavContainter>
  );
};

export default Nav;
