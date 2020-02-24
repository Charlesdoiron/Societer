import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useMocks } from "../../context/mock-context";
import { Wrapper } from "../../styled/space";
import { NextSeo } from "next-seo";

import { fetchPage } from "../../api/call";

import {
  ManifestLabor,
  MediumSubtitle,
  ArticleTitle,
  Chapeau,
  Labor,
  ArticleInterTitle,
  Navigation
} from "../../styled/typos";
import VisionArticleHeader from "../../components/visionArticleHeader";
import PopUp from "../../components/popUp";
import { Manifesto } from "../../static/vision";

import { useRouter } from "next/router";

const Vision = props => {
  console.log(props, "vision");

  const router = useRouter();
  const { vision } = useMocks();
  const [popIsOpen, setPopOpen] = useState(false);
  const [definition, setDefinition] = useState("");
  const manifestLaborRef = useRef(null);
  const titleRef = useRef(null);
  const currentQuerryLang = router.query.lang;

  const {
    secondPartSubtitle,
    secondPartArticleTitle,
    secondPartLogo,
    secondPartAuthors,
    secondPartPublished,
    secondPartChapeau,
    secondPartArticleContent
  } = props.fields;

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const handleClick = e => {
    setDefinition(vision.firstPart[currentQuerryLang][e]);
    setPopOpen(true);
  };

  if (!props) return;
  return (
    <>
      <PopUp
        content={definition}
        popIsOpen={popIsOpen}
        handleClick={() => setPopOpen(false)}
      />
      <NextSeo
        title={vision.seo_title}
        description={vision.seo_description}
        canonical={vision.seo_canonical}
      />
      <Wrapper>
        <FirstPart>
          <Fixed>
            <MediumSubtitle ref={titleRef}>
              {vision.firstPart[currentQuerryLang].subtitle}
            </MediumSubtitle>
          </Fixed>
          <Manifesto
            handleClick={e => handleClick(e)}
            currentQuerryLang={currentQuerryLang}
          />
        </FirstPart>
      </Wrapper>
      <Wrapper isWhite>
        <SecondPart>
          <MediumSubtitle isBlack>{secondPartSubtitle}</MediumSubtitle>
          <ArticleTitle>{secondPartArticleTitle}</ArticleTitle>
          <VisionArticleHeader
            url="https://www.lesechos.fr/idees-debats/cercle/dirigeants-dentreprise-engagez-vous-pour-sauver-le-monde-et-votre-business-1039127#xtor=CS1-3046"
            media={secondPartLogo}
            authors={secondPartAuthors}
            published={secondPartPublished}
          />
          <ArticleSection>
            <CustomChapeau
              isBlack
              dangerouslySetInnerHTML={{
                __html: secondPartChapeau
              }}
            ></CustomChapeau>

            {/* MOBILE */}
            <Author>
              <Navigation isBlack noLink>
                <a
                  href="https://www.lesechos.fr/idees-debats/cercle/dirigeants-dentreprise-engagez-vous-pour-sauver-le-monde-et-votre-business-1039127#xtor=CS1-3046"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {" "}
                  Co-signée par{" "}
                  {vision.secondPart.authors.map((author, i) => {
                    return (
                      <span key={i}>
                        {" "}
                        {author.name}
                        {i < vision.secondPart.authors.length - 1 ? ", " : "."}
                      </span>
                    );
                  })}
                </a>
              </Navigation>
            </Author>
            {/*  */}

            <CustomLabor
              dangerouslySetInnerHTML={{
                __html: secondPartArticleContent[0].content
              }}
            />
          </ArticleSection>

          <ArticleSection>
            <ArticleInterTitle>
              {secondPartArticleContent[1].title}
            </ArticleInterTitle>
            <CustomLabor
              dangerouslySetInnerHTML={{
                __html: secondPartArticleContent[2].content
              }}
            />
          </ArticleSection>
          <ArticleSection>
            <ArticleInterTitle>
              {secondPartArticleContent[3].title}
            </ArticleInterTitle>
            <CustomLabor
              dangerouslySetInnerHTML={{
                __html: secondPartArticleContent[4].content
              }}
            />
          </ArticleSection>
        </SecondPart>
      </Wrapper>
    </>
  );
};
Vision.getInitialProps = async function(context) {
  const currentLocale = context.query.lang;
  return fetchPage({ page: "vision", locale: currentLocale });
};
export default Vision;

const CustomLabor = styled(Labor)`
  width: 50%;
  ${props => props.theme.medias.medium`
   width:100%;
    padding-top:20px;
    padding-bottom:45px;
  `}
`;

const Author = styled.div`
  display: none;
  ${props => props.theme.medias.medium`
    display:block;
   `}
`;
const CustomChapeau = styled(Chapeau)`
  width: 35%;
  ${props => props.theme.medias.medium`
   width:100%;
   padding-top:50px;
   padding-bottom:25px;
  `}
`;
const ArticleSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 70px 0;

  ${props => props.theme.medias.medium`
    flex-direction:column;
    padding:0;
  `}
`;

const Fixed = styled.div`
  width: 30%;
  position: relative;

  h4 {
    transform: rotate(-90deg);
    position: absolute;
    margin-left: 36%;
    top: 35px;
    left: 0;
    right: 0;

    ${props => props.theme.medias.medium`
    position:relative;
    transform: rotate(0deg);
    margin-left: 0;
    top: 0px;
    margin-bottom: 30px;
  `}
  }
`;
const FirstPart = styled.div`
  padding-top: 230px;
  padding-bottom: 180px;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background-color: ${props => props.theme.colors.black};

  ${props => props.theme.medias.medium`
    flex-direction:column;
    padding-top: 60px;
    padding-bottom: 90px;
  `}

  p {
    width: 100%;
  }
`;

const SecondPart = styled.div`
  padding: 120px 0;
  background-color: ${props => props.theme.colors.white};

  ${props => props.theme.medias.medium`

    padding-top: 60px;
    padding-bottom: 60px;
  `}
`;
