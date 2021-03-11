import React, { useState } from "react";

import { NavItem, NavUl, NavContainter, NavLink } from "./styled";
import Hamburger from "./Hamburger";
import Dropdown from "./Dropdown";

const dropdownItems = [
  { name: "Inicio", link: "/" },
  { name: "Menú", link: "/menu" },
  { name: "Nosotrxs", link: "/nosotrxs" },
  { name: "Contacto", link: "/contacto" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainter>
      <NavUl>
        {dropdownItems.map((dropdownItem) => {
          return (
            <NavItem key={dropdownItem.name}>
              <NavLink to={dropdownItem.link}>{dropdownItem.name}</NavLink>
            </NavItem>
          );
        })}
      </NavUl>
      <Hamburger onClick={setIsOpen} isOpen={isOpen} />
      <Dropdown isOpen={isOpen} dropdownItems={dropdownItems} />
    </NavContainter>
  );
};

export default Nav;
