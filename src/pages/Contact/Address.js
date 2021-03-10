import React from "react";

import { AddressContainer, ContactText } from "./styled";

const Address = () => {
  return (
    <AddressContainer>
      <ContactText size={"30px"} margin={"21px"}>
        Sopocachi
      </ContactText>
      <ContactText size={"20px"}>Calle Fernando Guachalla</ContactText>
      <ContactText size={"20px"}>No. 369</ContactText>
      <ContactText size={"16px"} italicized={true} margin={"6px"}>
        (Entre Av. 6 de Agosto y
      </ContactText>
      <ContactText size={"16px"} italicized={true} margin={"6px"}>
        Av. 20 de Octubre)
      </ContactText>
    </AddressContainer>
  );
};

export default Address;
