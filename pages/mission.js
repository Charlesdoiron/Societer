import React, { useEffect } from "react";
import { NextSeo } from "next-seo";

import styled from "styled-components";
import { Chapeau, Labor, Subtitle, FatTitle } from "../styled/typos";
import { Wrapper } from "../styled/space";
import Accordion from "../components/accordion";

import { useMocks } from "../context/mock-context";

const client = require("contentful").createClient({
  space: "86i03dw6wwwc",
  accessToken: "fs65wT3qwmrz2Rcyh0fFkJE2uukw1N5mxY9_IzljpH0"
});

function Mission() {
  const { mission } = useMocks();

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <NextSeo
        title={mission.seo.title}
        description={mission.seo.description}
        canonical={mission.seo.canonical}
      />
      <Wrapper>
        <FirstPart>
          <Chapeau dangerouslySetInnerHTML={{ __html: mission.chapeau }} />
          <Labor>{mission.firstPartLabor}</Labor>
        </FirstPart>
      </Wrapper>
      <SecondPart>
        <Wrapper isWhite>
          {/* <Subtitle>{mission.secondPartSubtitle}</Subtitle> */}
          <FatTitle
            dangerouslySetInnerHTML={{ __html: mission.secondPartFatTitle }}
          />
        </Wrapper>
        <Img
          src="images/mission/mission_img.jpg"
          alt="Societer intervient sur mesure"
        />
        <Accordion
          subTitle={mission.expertise.subTitle}
          subTitleTwo={mission.expertise.subTitleTwo}
          content={mission.expertise.content}
        />
      </SecondPart>
    </>
  );
}

export default Mission;

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
    z-index: 9;
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
