import React from "react";

import Nav from "../../components/Nav";
import { BotanicaMidnightBackground } from "../../globalStyles/backgrounds";
import {
  ContactBody,
  Address,
  ContactText,
  Icon,
  RedirectLink,
  Contacts,
  ContactInfoContainer,
} from "./styled";
import logo from "../../images/botanica-logo.jpg";
import phone from "../../images/icons/phone.svg";
import instagram from "../../images/icons/instagram.svg";
import facebook from "../../images/icons/facebook.svg";

const Contact = () => {
  return (
    <BotanicaMidnightBackground>
      <Nav />
      <ContactBody>
        <img src={logo} alt="logo" width="250px" />
        <ContactInfoContainer>
          <Address>
            <ContactText size={"30px"}>Sopocachi</ContactText>
            <ContactText size={"20px"}>Calle Fernando Guachalla</ContactText>
            <ContactText size={"20px"}>No. 369</ContactText>
            <ContactText size={"16px"} italicized={true}>
              (Entre Av. 6 de Agosto y Av. 20 de Octubre)
            </ContactText>
          </Address>
          <Contacts>
            <ContactText size={"30px"}>Pedidos</ContactText>
            <ContactText size={"20px"}>
              <Icon src={phone} alt="phone" width="15" />
              60502012
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
            <RedirectLink href="tel:60502012" target="_blank">
              <Icon src={phone} alt="phone" width="14" />
              60502012
            </RedirectLink>
          </Contacts>
        </ContactInfoContainer>
      </ContactBody>
    </BotanicaMidnightBackground>
  );
};

export default Contact;
