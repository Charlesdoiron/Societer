import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useMocks } from "../../context/mock-context";
import Head from "next/head";
import { pageJsonLd } from "../../jsonLd";
import { NextSeo } from "next-seo";
import getPage from "../../api/getPage";
import { ResizeObserver } from "@juggle/resize-observer";
import useMeasure from "react-use-measure";
import { Wrapper } from "../../styled/space";
import {
  MediumSubtitle,
  ArticleTitle,
  Chapeau,
  Labor,
  ArticleInterTitle,
  Navigation,
} from "../../styled/typos";
import withTranslateUp from "../../components/animateHoc/translateUp";
import { Manifesto } from "../../statik/vision";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import VisionArticleHeader from "../../components/visionArticleHeader";
import PopUp from "../../components/popUp";

const Vision = (props) => {
  const router = useRouter();
  const { vision } = useMocks();
  const [popIsOpen, setPopOpen] = useState(false);
  const [definition, setDefinition] = useState("");

  const currentQuerryLang = router.query.lang;
  const {
    metatitle,
    metadescription,
    canonical,
    secondPartSubtitle,
    secondPartArticleTitle,
    secondPartLogo,
    secondPartAuthors,
    secondPartPublished,
    secondPartChapeau,
    secondPartArticleContent1,
    secondPartArticleTitle2,
    secondPartArticleContent2,
    secondPartArticleTitle3,
    secondPartArticleContent3,
  } = props.data;

  const titleRef = useRef(null);
  const [manifestoRef, bounds] = useMeasure({
    scroll: true,
    resize: true,
    polyfill: ResizeObserver,
  });
  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // useEffect(() => {
  //   if (titleRef.current) {
  //     titleRef.current.style.top = `${bounds.top} px`;
  //   }
  // }, [bounds.top]);

  const handleClick = (e) => {
    setDefinition(vision.firstPart[currentQuerryLang][e]);
    setPopOpen(true);
  };

  if (!props) return;

  return (
    <>
      <NextSeo
        title={metatitle}
        description={metadescription}
        canonical={canonical}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: pageJsonLd }}
        />
      </Head>
      <PopUp
        content={definition}
        popIsOpen={popIsOpen}
        handleClick={() => setPopOpen(false)}
      />

      <Wrapper>
        <FirstPart>
          <Sticky>
            <MediumSubtitle ref={titleRef}>
              {vision.firstPart[currentQuerryLang].subtitle}
            </MediumSubtitle>
          </Sticky>
          <div ref={manifestoRef}>
            <Manifesto
              handleClick={(e) => handleClick(e)}
              currentQuerryLang={currentQuerryLang}
            />
          </div>
        </FirstPart>
      </Wrapper>
      <Wrapper isWhite>
        <SecondPart>
          <MediumSubtitle isBlack>{secondPartSubtitle}</MediumSubtitle>
          <ArticleTitle>{secondPartArticleTitle}</ArticleTitle>
          <VisionArticleHeader
            url="https://www.lesechos.fr/idees-debats/cercle/dirigeants-dentreprise-engagez-vous-pour-sauver-le-monde-et-votre-business-1039127#xtor=CS1-3046"
            media={secondPartLogo.fields.file.url}
            authors={secondPartAuthors}
            published={secondPartPublished}
          />
          <ArticleSection>
            <CustomChapeau
              isBlack
              dangerouslySetInnerHTML={{
                __html: secondPartChapeau,
              }}
            ></CustomChapeau>

            {/* MOBILE */}
            <Author>
              <Navigation isBlack noLink>
                <ReactMarkdown
                  source={secondPartAuthors}
                  renderers={{
                    link: (props) => (
                      <a href={props.href} target="_blank">
                        {props.children}
                      </a>
                    ),
                  }}
                  escapeHtml={false}
                />
              </Navigation>
            </Author>

            <CustomLabor>
              <ReactMarkdown
                source={secondPartArticleContent1}
                renderers={{
                  link: (props) => (
                    <a href={props.href} target="_blank">
                      {props.children}
                    </a>
                  ),
                }}
                escapeHtml={false}
              />
            </CustomLabor>
          </ArticleSection>

          <ArticleSection>
            <TitleSticky>
              <ArticleInterTitle>{secondPartArticleTitle2}</ArticleInterTitle>
            </TitleSticky>

            <CustomLabor>
              <ReactMarkdown
                source={secondPartArticleContent2}
                renderers={{
                  link: (props) => (
                    <a href={props.href} target="_blank">
                      {props.children}
                    </a>
                  ),
                }}
                escapeHtml={false}
              />
            </CustomLabor>
          </ArticleSection>
          <ArticleSection>
            <TitleSticky>
              <ArticleInterTitle>{secondPartArticleTitle3}</ArticleInterTitle>
            </TitleSticky>
            <CustomLabor>
              <ReactMarkdown
                source={secondPartArticleContent3}
                renderers={{
                  link: (props) => (
                    <a href={props.href} target="_blank">
                      {props.children}
                    </a>
                  ),
                }}
                escapeHtml={false}
              />
            </CustomLabor>
          </ArticleSection>
        </SecondPart>
      </Wrapper>
    </>
  );
};
Vision.getInitialProps = async function (context) {
  const currentLocale = context.query.lang;
  return getPage({
    c_type_id: "5pe8WH4Os3Rzel2UfQ247o",
    locale: currentLocale,
  });
};
export default Vision;

const CustomLabor = styled(Labor)`
  width: 50%;
  ${(props) => props.theme.medias.medium`
   width:100%;
    padding-top:20px;
    padding-bottom:45px;
  `}
`;

const Author = styled.div`
  display: none;
  ${(props) => props.theme.medias.medium`
    display:block;
   `}
`;
const CustomChapeau = styled(Chapeau)`
  width: 35%;
  ${(props) => props.theme.medias.medium`
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

  ${(props) => props.theme.medias.medium`
    flex-direction:column;
    padding:0;
  `}
`;

const TitleSticky = styled.div`
  h4 {
    position: sticky;
    top: 80px;
  }
`;
const Sticky = styled.div`
  width: 110px;
  position: relative;
  padding-top: 55px;
  h4 {
    transform: rotate(-90deg);
    position: sticky;

    top: 150px;
    left: 0;
    right: 0;

    ${(props) => props.theme.medias.medium`
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
  background-color: ${(props) => props.theme.colors.black};

  ${(props) => props.theme.medias.medium`
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
  background-color: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.medias.medium`

    padding-top: 60px;
    padding-bottom: 60px;
  `}
`;
