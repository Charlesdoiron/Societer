import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { ResizeObserver } from "@juggle/resize-observer";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import ArticleHeader from "../../../components/articleHeader";
import { useSpring, animated } from "react-spring";
import {
  CustomWrapper,
  Sticky,
  CustomCategoryTitle,
  CustomArticleTitle,
  ShowOnMobile,
  HideOnMobile,
  BigImage,
  CustomDiv,
  SmallImage,
  CustomLabor,
  CustomChapeau,
  ArticleSection,
  Fixed,
  Part
} from "../../../styled/pages/article";
import { ArticleInterTitle } from "../../../styled/typos";
import getArticle from "../../../api/getArticle";
import { getWindowWidth } from "../../../utils/windowWidth";
import useMeasure from "react-use-measure";

const Article = props => {
  const router = useRouter();
  const categoryRef = useRef(null);
  const titleRef = useRef(null);

  const article = props.data;
  const device = getWindowWidth();
  const [showSubMenu, setShowMenu] = useState(false);

  const [subMenuRef, bounds] = useMeasure({ polyfill: ResizeObserver });

  const handleSubMenu = () => {
    if (titleRef.current) {
      // Get Title Position to trigger the animation
      const titleTopPosition = titleRef.current.getBoundingClientRect().top;
      // If window's scroll > Title Position we set the state to true
      if (window.pageYOffset > titleTopPosition) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", () => handleSubMenu());
      return () => window.removeEventListener("scroll", () => handleSubMenu());
    }
  });

  const animate = useSpring({
    top: showSubMenu ? "85px" : "-10px",
    position: showSubMenu ? "sticky" : "sticky",
    zIndex: "10",
    visibility: showSubMenu ? "visible" : "hidden"
  });

  return (
    <>
      <NextSeo
        title={article.title}
        // description={article.seo_description}
        // canonical={article.seo_canonical}
      />
      <animated.div style={animate}>
        <Sticky ref={subMenuRef}>
          <ArticleHeader
            categories={article.categories}
            logo={article.logo.fields.file.url}
            articleTitle={article.title}
            authors={article.authors}
            published={article.published}
          />
        </Sticky>
      </animated.div>

      <CustomWrapper isWhite>
        <Part>
          {/* Only the first category is showing */}
          <CustomCategoryTitle isBlack ref={categoryRef}>
            {article.categories[0].fields.label}
          </CustomCategoryTitle>

          <CustomArticleTitle ref={titleRef}>
            {article.title}
          </CustomArticleTitle>

          <BigImage src={article.coverImage.fields.file.url} />
          <ArticleSection>
            <CustomChapeau
              isBlack
              dangerouslySetInnerHTML={{
                __html: article.chapeau
              }}
            ></CustomChapeau>
          </ArticleSection>
          {article.content.map((section, i) => {
            return (
              <ArticleSection key={i}>
                {section.fields.articleInterTitle && (
                  <CustomDiv>
                    <ArticleInterTitle>
                      {section.fields.articleInterTitle}
                    </ArticleInterTitle>
                    <HideOnMobile>
                      {i === 0 && (
                        <SmallImage src={article.smallImage.fields.file.url} />
                      )}
                    </HideOnMobile>
                  </CustomDiv>
                )}
                <CustomLabor
                  dangerouslySetInnerHTML={{
                    __html: section.fields.articleContent
                  }}
                  style={{ width: "100%" }}
                />
                <ShowOnMobile>
                  {i === 0 && (
                    <SmallImage src={article.smallImage.fields.file.url} />
                  )}
                </ShowOnMobile>
              </ArticleSection>
            );
          })}
        </Part>
      </CustomWrapper>
    </>
  );
};

Article.getInitialProps = async function(context) {
  const currentLocale = context.query.lang;
  const currentSlug = context.query.id;

  return getArticle({
    slug: currentSlug,
    locale: currentLocale
  });
};
export default Article;
