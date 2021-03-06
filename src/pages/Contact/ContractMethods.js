import React from "react";

import {
  ContactText,
  Icon,
  RedirectLink,
  Contacts,
  ContactDetails,
} from "./styled";
import phone from "../../images/icons/phone.svg";
import instagram from "../../images/icons/instagram.svg";
import facebook from "../../images/icons/facebook.svg";

const ContactMethods = () => {
  return (
    <Contacts>
      <ContactDetails>
        <ContactText size={"30px"} margin={"21px 0"}>
          Pedidos
        </ContactText>
        <ContactText size={"18px"} margin={"8px 0"}>
          Horarios de Atención
        </ContactText>
        <ContactText size={"18px"} margin={"8px 0"}>
          Martes - Sábados [7:30 am - 9:30 pm]
        </ContactText>
        <RedirectLink
          href="https://www.instagram.com/botanicacoffeehouse/"
          target="_blank"
        >
          <Icon src={instagram} alt="phone" width="16" />
          @botanicacoffeehouse
        </RedirectLink>
        <RedirectLink
          href="https://www.facebook.com/botanicacoffeehouse/about/"
          target="_blank"
        >
          <Icon src={facebook} alt="phone" width="10" />
          Botánica Coffee House
        </RedirectLink>
        <RedirectLink href="tel:59160502012" target="_blank">
          <Icon src={phone} alt="phone" width="14" />
          +591 (6) 050-2012
        </RedirectLink>
      </ContactDetails>
    </Contacts>
  );
};

export default ContactMethods;
