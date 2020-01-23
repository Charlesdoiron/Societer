import React from "react";
import { SmallNavigation } from "../styled/typos";
import styled from "styled-components";
import { useMocks } from "../context/mock-context";
const socials = () => {
  const { socials } = useMocks();
  return (
    <Container>
      {socials.map((el, i) => (
        <Limit key={i}>
          <a href={el.url} target="_blank">
            <SmallNavigation>{el.title}</SmallNavigation>
          </a>
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
  text-align: right;
  a {
    color: inherit;
    text-decoration: none;
  }

  /* p {
    left: 65px;
    position: relative;
    transition: all 500ms;
    &:hover {
      left: 10px;
      cursor: pointer;
      transition: all 500ms;
    }
  } */
`;
