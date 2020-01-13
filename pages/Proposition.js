import { useEffect, useState } from "react";
import Head from "next/head";

import styled from "styled-components";
import { Chapeau, Labor, Subtitle, FatTitle } from "../styled/typos";
import { Wrapper } from "../styled/space";
import Accordion from "../components/accordion";

import { useMocks } from "../context/mock-context";

const client = require("contentful").createClient({
  space: "86i03dw6wwwc",
  accessToken: "fs65wT3qwmrz2Rcyh0fFkJE2uukw1N5mxY9_IzljpH0"
});

function Proposition() {
  const { proposition } = useMocks();

  return (
    <>
      <Head>
        <title>Societer | la Proposition</title>
      </Head>
      <Wrapper>
        <FirstPart>
          <Chapeau>{proposition.chapeau}</Chapeau>
          <Labor>{proposition.firstPartLabor}</Labor>
        </FirstPart>
      </Wrapper>
      <SecondPart>
        <Wrapper isWhite>
          <Subtitle>{proposition.secondPartSubtitle}</Subtitle>
          <FatTitle>{proposition.secondPartFatTitle}</FatTitle>
        </Wrapper>
        <Img src="images/proposition/proposition_img.jpg" alt="" />
        <Accordion
          subTitle={proposition.expertise.subTitle}
          subTitleTwo={proposition.expertise.subTitleTwo}
          content={proposition.expertise.content}
        />
      </SecondPart>
    </>
  );
}

export default Proposition;

const FirstPart = styled.div`
  padding: 200px 0 120px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h3 {
    max-width: 60%;
  }

  p {
    max-width: 30%;
    color: ${props => props.theme.colors.white};
  }

  ${props => props.theme.medias.medium`
   flex-direction : column;
   padding: 60px 0;

      h3 {
        max-width: unset;
        padding-right: 0px;
        margin-bottom:50px;
      }

      p {
        max-width: unset;
      }
  `}
`;

const Img = styled.img`
  width: 490px;
  position: absolute;
  top: 300px;
  right: 0;

  ${props => props.theme.medias.medium`
    display:none;
  `}
`;

const SecondPart = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 150px 0;
  position: relative;
  ${props => props.theme.medias.medium`
    padding: 60px 0;
  `}

  h1 {
    margin-top: 30px;
    color: ${props => props.theme.colors.black};
    max-width: 80%;
    z-index: 10;
    position: relative;
    margin-bottom: 270px;

    ${props => props.theme.medias.medium`
     max-width: unset;
     margin-bottom: 60px;
    `}
  }
`;

const ThirdPart = styled.div`
  background-color: ${props => props.theme.colors.white};
`;
