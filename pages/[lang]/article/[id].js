import React, { useRef, useEffect, useState } from "react";

import { ResizeObserver } from "@juggle/resize-observer";
import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";
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
  CustomLaborArticle,
  CustomChapeau,
  ArticleSection,
  Author,
  Part,
} from "../../../styled/pages/article";
import { ArticleInterTitle, Navigation } from "../../../styled/typos";
import getArticle from "../../../endpoints/getArticle";
import { ScreenSizes } from "../../../config/theme/medias";
import useMeasure from "react-use-measure";
import { useMediaQuery } from "react-responsive";
const Article = (props) => {
  const categoryRef = useRef(null);
  const titleRef = useRef(null);
  const article = props.data;
  const [showSubMenu, setShowMenu] = useState(false);
  const [subMenuRef, bounds] = useMeasure({ polyfill: ResizeObserver });
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${ScreenSizes.MEDIUM}px)`,
  });
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
    top: showSubMenu ? (!isDesktopOrLaptop ? "85px" : "95px") : "-10px",
    position: showSubMenu ? "sticky" : "sticky",
    zIndex: "10",
    visibility: showSubMenu ? "visible" : "hidden",
  });

  return (
    <>
      <NextSeo
        title={article.metatitle}
        description={article.metadescription}
        canonical={article.canonical}
        openGraph={{
          type: "website",
          url: "https://www.societer.co",
          title: article.metatitle,
          description: article.metadescription,
          images: [
            {
              url: article.metaimage
                ? `https:${article.metaimage.fields.file.url}`
                : `https://www.societer.co/og-image-02.jpg`,
              width: 800,
              height: 600,
              alt: article.metatitle,
            },
          ],
          site_name: "Societer | Maison de conseil en sustainable leadership",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <animated.div style={animate}>
        <Sticky ref={subMenuRef}>
          <ArticleHeader
            categories={article.categories}
            logo={article.logo && article.logo.fields.file.url}
            alt={article.logo && article.logo.fields.description}
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

          {article.coverImage && (
            <BigImage
              src={article.coverImage.fields.file.url}
              alt={article.coverImage.fields.description}
            />
          )}
          {article.authors && (
            <Author>
              <Navigation isBlack noLink>
                <ReactMarkdown
                  source={article.authors}
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
          )}
          {article.chapeau && (
            <ArticleSection>
              <CustomChapeau isBlack>
                <ReactMarkdown
                  source={article.chapeau}
                  renderers={{
                    link: (props) => (
                      <a href={props.href} target="_blank">
                        {props.children}
                      </a>
                    ),
                  }}
                  escapeHtml={false}
                />
              </CustomChapeau>
            </ArticleSection>
          )}

          {article.content.map((section, i) => {
            return (
              <ArticleSection key={i}>
                <CustomDiv>
                  <ArticleInterTitle>
                    {section.fields.articleInterTitle}
                  </ArticleInterTitle>
                  <HideOnMobile>
                    {i === 0 && article.smallImage && (
                      <SmallImage
                        src={article.smallImage.fields.file.url}
                        alt={article.smallImage.fields.description}
                      />
                    )}
                  </HideOnMobile>
                </CustomDiv>

                <CustomLaborArticle style={{ width: "100%" }}>
                  <ReactMarkdown
                    source={section.fields.articleContent}
                    renderers={{
                      link: (props) => (
                        <a href={props.href} target="_blank">
                          {props.children}
                        </a>
                      ),
                    }}
                    escapeHtml={false}
                  />
                </CustomLaborArticle>
                <ShowOnMobile>
                  {i === 0 && article.smallImage && (
                    <SmallImage
                      src={article.smallImage.fields.file.url}
                      alt={article.smallImage.fields.description}
                    />
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

Article.getInitialProps = async function (context) {
  const currentLocale = context.query.lang;
  const currentSlug = context.query.id;

  return getArticle({
    slug: currentSlug,
    locale: currentLocale,
  });
};
export default Article;
