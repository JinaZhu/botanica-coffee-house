import styled, { css } from "styled-components";

export const ContactBody = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Address = styled.div`
  background-color: #0d163d;
  width: 300px;
  padding: 15px;
`;

export const Contacts = styled.div`
  background-color: #0d163d;
  width: 300px;
  padding: 15px;
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

  ${(props) => {
    return (
      props.italicized &&
      css`
        font-style: italic;
      `
    );
  }}
`;

export const Icon = styled.img`
  margin: 0 7px;
`;

export const RedirectLink = styled.a`
  font-family: "Bodoni";
  font-size: 16px;
  color: #ae802c;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  margin: 7px 5px;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
