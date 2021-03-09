import React from "react";

import { DropdownNav, DropdownItem } from "./styled";

const dropdownItems = ["Inicio", "Menú", "Nosotrxs", "Contacto"];

const Dropdown = ({ isOpen }) => {
  return (
    <DropdownNav isOpen={isOpen}>
      {dropdownItems.map((dropdownItem) => {
        return <DropdownItem key={dropdownItem}>{dropdownItem}</DropdownItem>;
      })}
    </DropdownNav>
  );
};

export default Dropdown;
