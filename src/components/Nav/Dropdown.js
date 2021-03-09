import React from "react";

import { DropdownNav, DropdownItem, NavLink } from "./styled";

const Dropdown = ({ isOpen, dropdownItems }) => {
  return (
    <DropdownNav isOpen={isOpen}>
      {dropdownItems.map((dropdownItem) => {
        return (
          <DropdownItem key={dropdownItem.name}>
            <NavLink to={dropdownItem.link}>{dropdownItem.name}</NavLink>
          </DropdownItem>
        );
      })}
    </DropdownNav>
  );
};

export default Dropdown;
