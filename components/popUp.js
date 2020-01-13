import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../styled/space";
import { Labor, PopUpTitle } from "../styled/typos";
const PopUp = props => {
  const Container = styled.div`
    background-color: ${props => props.theme.colors.blue};
    position: fixed;
    z-index: 300;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 0;
    ${props => props.theme.medias.medium`
    padding: 10px 0 30px 0;
  `}
  `;

  if (!props.popIsOpen) {
    return null;
  }
  return (
    <Container>
      <BlueWrapper>
        <Flex>
          <PopUpTitle>{props.content.title}</PopUpTitle>
          <Close
            src="pictos/close.svg"
            onClick={() => props.handleClick(false)}
          />
        </Flex>

        <Labor
          isWhite
          dangerouslySetInnerHTML={{ __html: props.content.content }}
        ></Labor>
        <Link isWhite>
          <a href={props.content.link.url} target="_blank">
            {props.content.link.label}
          </a>
        </Link>
      </BlueWrapper>
    </Container>
  );
};

export default PopUp;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Close = styled.img`
  width: 16px;
  position: absolute;
  right: 40px;
  cursor: pointer;
  ${props => props.theme.medias.medium`
   right: 10px;
  `}
`;
const BlueWrapper = styled(Wrapper)`
  background-color: ${props => props.theme.colors.blue};
`;

const Link = styled(Labor)`
  margin-top: 25px;
  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    border-bottom: 1px solid ${props => props.theme.colors.white};
  }
`;
