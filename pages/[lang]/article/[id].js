import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useMocks } from "../../../context/mock-context";
import { Wrapper } from "../../../styled/space";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { ScreenSizes } from "../../../config/theme/medias";
import {
  MediumSubtitle,
  ArticleTitle,
  Chapeau,
  Labor,
  ArticleInterTitle
} from "../../../styled/typos";
import ArticleHeader from "../../../components/articleHeader";

const Article = props => {
  const { article } = useMocks();
  const router = useRouter();
  const categoryRef = useRef(null);
  const titleRef = useRef(null);
  const articleHeaderRef = useRef(null);

  let currentArticle = article[router.query.id];

  useEffect(() => {
    const fixCategory = () => {
      if (
        titleRef.current &&
        categoryRef.current &&
        window.innerWidth > ScreenSizes.MEDIUM
      ) {
        const titleTop = titleRef.current.getBoundingClientRect().top;
        categoryRef.current.style.top = titleTop + 30 + "px";
      } else {
        if (categoryRef.current) return (categoryRef.current.style.top = "0px");
      }
    };

    if (typeof window !== undefined) {
      fixCategory();
      window.addEventListener("resize", () => fixCategory());
      return () => window.removeEventListener("resize", () => fixCategory());
    }
  });

  useEffect(() => {
    const showArticleHeader = () => {
      if (titleRef.current && articleHeaderRef.current) {
        const titleTop = titleRef.current.getBoundingClientRect().top;
        let total =
          99 - articleHeaderRef.current.getBoundingClientRect().height;

        // 99 = header.height (95) + 4px of border.

        if (window.scrollY >= titleTop) {
          articleHeaderRef.current.style.position = "sticky";
          articleHeaderRef.current.style.top = "95px";
        } else {
          console.log(total);
          articleHeaderRef.current.style.top = `${total}px`;
        }
      }
    };
    if (typeof window !== undefined) {
      showArticleHeader();
      window.addEventListener("scroll", () => showArticleHeader());
      return () =>
        window.removeEventListener("scroll", () => showArticleHeader());
    }
  });

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  if (currentArticle === undefined) return null;
  return (
    <>
      <NextSeo
        title={currentArticle.seo_title}
        description={currentArticle.seo_description}
        canonical={currentArticle.seo_canonical}
      />
      <Sticky ref={articleHeaderRef}>
        <ArticleHeader
          category={currentArticle.category.label}
          url={currentArticle.url}
          media={currentArticle.media.logo}
          articleTitle={currentArticle.title}
          authors={currentArticle.authors}
          published={currentArticle.published}
        />
      </Sticky>

      <CustomWrapper isWhite>
        <Part>
          <CustomCategoryTitle isBlack ref={categoryRef}>
            {currentArticle.category.label}
          </CustomCategoryTitle>

          <CustomArticleTitle ref={titleRef}>
            {currentArticle.title}
          </CustomArticleTitle>

          <BigImage src={currentArticle.images.big} />
          <ArticleSection>
            <CustomChapeau
              isBlack
              dangerouslySetInnerHTML={{
                __html: currentArticle.chapeau
              }}
            ></CustomChapeau>
          </ArticleSection>
          {currentArticle.content.map((section, i) => {
            return (
              <ArticleSection key={i}>
                {section.subtitle && (
                  <CustomDiv>
                    <ArticleInterTitle>{section.subtitle}</ArticleInterTitle>
                    <HideOnMobile>
                      {i === 0 && (
                        <SmallImage src={currentArticle.images.small} />
                      )}
                    </HideOnMobile>
                  </CustomDiv>
                )}
                <CustomLabor
                  dangerouslySetInnerHTML={{
                    __html: section.content
                  }}
                  style={{ width: "100%" }}
                />
                <ShowOnMobile>
                  {i === 0 && <SmallImage src={currentArticle.images.small} />}
                </ShowOnMobile>
              </ArticleSection>
            );
          })}
        </Part>
      </CustomWrapper>
    </>
  );
};
export default Article;

const CustomWrapper = styled(Wrapper)`
  padding: 0 17%;
`;

const Sticky = styled.div`
  top: 15px;
  margin-bottom: -95px;
  transition: all 500ms ease-in-out;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 9;
  position: sticky;
  overflow: hidden;
`;

const CustomCategoryTitle = styled(MediumSubtitle)`
  position: absolute;
  transform: rotate(-90deg);
  left: 6%;
  ${props => props.theme.medias.medium`
    transform: rotate(0);
    position:relative;
    left:0;
`}
`;

const CustomArticleTitle = styled(ArticleTitle)`
  color: ${props => props.theme.colors.black};
  font-size: 60px;
`;
const ShowOnMobile = styled.div`
  display: none;
  ${props => props.theme.medias.medium`
  display:block;
`}
`;
const HideOnMobile = styled.div`
  display: block;
  ${props => props.theme.medias.medium`
  display:none;
`}
`;

const BigImage = styled.img`
  width: 100%;
`;
const CustomDiv = styled.div`
  width: 50%;
  ${props => props.theme.medias.medium`
      width:100% ;
    `}
`;
const SmallImage = styled.img`
  margin-top: 45px;
  margin-left: -52%;
  width: 130%;
  transition: all 500ms;

  ${props => props.theme.medias.medium`
    margin: 20px 0 45px 0;
    width:100%;
    transition: all 500ms;
    `}
`;

const CustomLabor = styled(Labor)`
  width: 50%;
  ${props => props.theme.medias.medium`
   width:100%;
    padding-top:20px;
    padding-bottom:45px;
  `}
`;

const CustomChapeau = styled(Chapeau)`
  width: 100%;
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
    top: 50px;
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

const Part = styled.div`
  top: -${props => props.headerHeight}px;
  margin-bottom: -${props => props.headerHeight}px;
  padding: 190px 0;
  background-color: ${props => props.theme.colors.white};

  ${props => props.theme.medias.medium`

    padding-top: 140px;
    padding-bottom: 60px;
  `}
`;
