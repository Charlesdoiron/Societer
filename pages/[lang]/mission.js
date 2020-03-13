import React, { useEffect, useState, useRef } from "react";
import { NextSeo } from "next-seo";

import styled from "styled-components";
import { Chapeau, Labor, FatTitle } from "../../styled/typos";
import { Wrapper } from "../../styled/space";
import Accordion from "../../components/accordion";
import getPage from "../../api/getPage";
import { useMocks } from "../../context/mock-context";

const Mission = props => {
  const {
    metatitle,
    metadescription,
    canonical,
    chapeau,
    firstPartLabor,
    secondPartFatTitle,
    subTitle,
    subTitleTwo,
    teamImg
  } = props.data;

  const expertises = [
    {
      title: props.data.expertiseTitle1,
      slug: props.data.expertiseSlug1,
      description: props.data.expertiseDescription1
    },
    {
      title: props.data.expertiseTitle2,
      slug: props.data.expertiseSlug2,
      description: props.data.expertiseDescription2
    },
    {
      title: props.data.expertiseTitle3,
      slug: props.data.expertiseSlug3,
      description: props.data.expertiseDescription3
    },
    {
      title: props.data.expertiseTitle4,
      slug: props.data.expertiseSlug4,
      description: props.data.expertiseDescription4
    },
    {
      title: props.data.expertiseTitle5,
      slug: props.data.expertiseSlug5,
      description: props.data.expertiseDescription5
    },
    {
      title: props.data.expertiseTitle6,
      slug: props.data.expertiseSlug6,
      description: props.data.expertiseDescription6
    },
    {
      title: props.data.expertiseTitle7,
      slug: props.data.expertiseSlug7,
      description: props.data.expertiseDescription7
    },
    {
      title: props.data.expertiseTitle8,
      slug: props.data.expertiseSlug8,
      description: props.data.expertiseDescription8
    }
  ];

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
        title={metatitle}
        description={metadescription}
        canonical={canonical}
      />
      <Wrapper>
        <FirstPart>
          <Chapeau dangerouslySetInnerHTML={{ __html: chapeau }} />
          <Labor>{firstPartLabor}</Labor>
        </FirstPart>
      </Wrapper>

      <SecondPart>
        <Wrapper isWhite ref={wrapperRef}>
          <FatTitle dangerouslySetInnerHTML={{ __html: secondPartFatTitle }} />
        </Wrapper>

        <Img src={teamImg.fields.file.url} alt={teamImg.fields.description} />
        <Accordion
          subTitle={subTitle}
          subTitleTwo={subTitleTwo}
          content={expertises}
        />
      </SecondPart>
    </>
  );
};
Mission.getInitialProps = async function(context) {
  const currentLocale = context.query.lang;
  return getPage({
    c_type_id: "3taYoO1vmefwW3QhyePqBn",
    locale: currentLocale
  });
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
