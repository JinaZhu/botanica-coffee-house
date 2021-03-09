import React from "react";

import { NavItem, NavUl, NavContainter } from "./styled";

const Nav = () => {
  return (
    <NavContainter>
      <NavUl>
        <NavItem>Inicio</NavItem>
        <NavItem>Menú</NavItem>
        <NavItem>Nosotrxs</NavItem>
        <NavItem>Contacto</NavItem>
      </NavUl>
    </NavContainter>
  );
};

export default Nav;
