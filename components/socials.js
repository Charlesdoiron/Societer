import React from "react";
import { SmallNavigation } from "../styled/typos";
import styled from "styled-components";

const rsx = [
  { name: "Twitter", url: "https://twitter.fr" },
  { name: "Linkedin", url: "https://linkedin.fr" },
  { name: "Instagram", url: "https://instagram.fr" }
];

const socials = () => {
  return (
    <Container>
      {rsx.map((el, i) => (
        <Limit key={i}>
          <SmallNavigation>{el.name}</SmallNavigation>
        </Limit>
      ))}
    </Container>
  );
};

export default socials;

const Container = styled.div`
  position: fixed;
  z-index: 200;
  right: 40px;
  top: 50%; /* poussé de la moitié de hauteur du référent */
  transform: translateY(-50%);
  ${props => props.theme.medias.medium`
    display:none;
   `}
`;

const Limit = styled.div`
  transition: all 500ms;
  position: relative;
  text-align: right;
  width: 80px;
  overflow: hidden;
  text-align: left;

  p {
    left: 65px;
    position: relative;
    transition: all 500ms;
    &:hover {
      left: 10px;
      cursor: pointer;
      transition: all 500ms;
    }
  }
`;
