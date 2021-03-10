import styled, { css } from "styled-components";

export const ContactBody = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    height: auto;
  }
`;

export const AddressContainer = styled.div`
  background-color: #0d163d;
  width: 300px;
  padding: 15px;
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    width: 250px;
    margin: 10px 0;
  }
`;

export const Contacts = styled.div`
  background-color: #0d163d;
  width: 300px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;

  @media screen and (max-width: 425px) {
    width: 250px;
    margin: 10px 0;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const ContactText = styled.p`
  color: #ae802c;
  font-size: ${(props) => props.size};
  font-family: "Bodoni";
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.margin};

  ${(props) => {
    return (
      props.italicized &&
      css`
        font-style: italic;
      `
    );
  }};
`;

export const Icon = styled.img`
  margin: 0 7px 0 0;
`;

export const RedirectLink = styled.a`
  font-family: "Bodoni";
  font-size: 18px;
  color: #ae802c;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  margin: 7px 5px;
`;

export const MapRedirect = styled.a`
  font-size: 16px;
  color: #ae802c;
  text-decoration: none;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    margin-top: 25px;
  }
`;
