import React, { useEffect, useState, useRef } from "react";
import { NextSeo } from "next-seo";

import styled from "styled-components";
import { Chapeau, Labor, FatTitle } from "../../styled/typos";
import { Wrapper } from "../../styled/space";
import Accordion from "../../components/accordion";
import { fetchPage } from "../../api/call";
import { useMocks } from "../../context/mock-context";

const Mission = props => {
  const {
    title,
    chapeau,
    firstPartLabor,
    secondPartFatTitle,
    subTitle,
    subTitleTwo,
    expertise
  } = props[0];

  const wrapperRef = useRef(null);
  const { mission } = useMocks();

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  if (!props) return;

  return (
    <>
      <NextSeo
        title={title}
        description={mission.seo_description}
        canonical={mission.seo_canonical}
      />
      <Wrapper>
        <FirstPart>
          <Chapeau dangerouslySetInnerHTML={{ __html: chapeau }} />

          <Labor>{firstPartLabor}</Labor>
        </FirstPart>
      </Wrapper>

      <SecondPart>
        <Wrapper isWhite ref={wrapperRef}>
          {/* <Subtitle>{mission.secondPartSubtitle}</Subtitle> */}
          <FatTitle dangerouslySetInnerHTML={{ __html: secondPartFatTitle }} />
        </Wrapper>

        <Img
          src="/images/mission/mission_img.jpg"
          alt="Societer intervient sur mesure"
        />
        <Accordion
          subTitle={subTitle}
          subTitleTwo={subTitleTwo}
          content={expertise}
        />
      </SecondPart>
    </>
  );
};
Mission.getInitialProps = async function(context) {
  const currentLocale = context.query.lang;
  return fetchPage({ page: "mission", locale: currentLocale });
};
export default Mission;

const FirstPart = styled.div`
  padding: 280px 0 140px 0;
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
