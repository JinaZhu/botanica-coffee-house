import React from "react";

import { AddressContainer, ContactText, MapRedirect } from "./styled";

const Address = () => {
  return (
    <AddressContainer>
      <ContactText size={"30px"} margin={"21px"}>
        Sopocachi
      </ContactText>
      <ContactText size={"20px"}>Calle Fernando Guachalla</ContactText>
      <ContactText size={"20px"}>No. 369</ContactText>
      <ContactText size={"16px"} italicized={true} margin={"6px"}>
        <MapRedirect
          href="https://www.google.com/maps/place/Bot%C3%A1nica+Coffee+House/@-16.5079881,-68.1304432,17z/data=!3m1!4b1!4m5!3m4!1s0x915f21a766ce2345:0xe44a1bca2d30b4c3!8m2!3d-16.5079881!4d-68.1282545"
          target="_blank"
        >
          (Entre Av. 6 de Agosto y
        </MapRedirect>
      </ContactText>
      <ContactText size={"16px"} italicized={true} margin={"6px"}>
        <MapRedirect
          href="https://www.google.com/maps/place/Bot%C3%A1nica+Coffee+House/@-16.5079881,-68.1304432,17z/data=!3m1!4b1!4m5!3m4!1s0x915f21a766ce2345:0xe44a1bca2d30b4c3!8m2!3d-16.5079881!4d-68.1282545"
          target="_blank"
        >
          Av. 20 de Octubre)
        </MapRedirect>
      </ContactText>
    </AddressContainer>
  );
};

export default Address;
