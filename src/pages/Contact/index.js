import React from "react";

import Nav from "../../components/Nav";
import { BotanicaMidnightBackground } from "../../globalStyles/backgrounds";
import { ContactBody, ContactInfoContainer } from "./styled";
import logo from "../../images/botanica-logo.jpg";
import Address from "./Address";
import ContactMethods from "./ContractMethods";

const Contact = () => {
  return (
    <BotanicaMidnightBackground>
      <Nav />
      <ContactBody>
        <img src={logo} alt="logo" width="250px" />
        <ContactInfoContainer>
          <Address />
          <ContactMethods />
        </ContactInfoContainer>
      </ContactBody>
    </BotanicaMidnightBackground>
  );
};

export default Contact;
