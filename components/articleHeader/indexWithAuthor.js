import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Navigation, ArticleTitleHeader } from "../../styled/typos";
import Share from "../share";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMocks } from "../../context/mock-context";
import {
  Container,
  MobileContainer,
  Line,
  Published,
  Author,
  Flex,
  Row,
  Category,
  Back,
  Media,
  ArticleTitle
} from "./styled";

import { getWindowWidth } from "../../utils/windowWidth";

const ArticleHeader = props => {
  const { articleHeader } = useMocks();
  const lineRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState("");

  const router = useRouter();
  const getScrollPosition = () => {
    let scroll = window.pageYOffset;
    setScrollPosition(scroll);
  };

  const makeLine = scrollPosition => {
    if (typeof window !== "undefined") {
      let body = document.body;
      let height = body.scrollHeight - body.offsetHeight;
      let percent = (scrollPosition * 100) / height;
      percent = percent.toFixed(0);
      return percent;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => getScrollPosition(), {
        capture: true,
        passive: true
      });
      return () =>
        window.removeEventListener("scroll", () => getScrollPosition(), {
          capture: true,
          passive: true
        });
    }
  });

  useEffect(() => {
    getScrollPosition();
  }, []);

  return getWindowWidth() === "Desktop" ? (
    <Container isSticky={props.isSticky}>
      <Link href={`/${router.query.lang}/public-debat`}>
        <Back>
          <img src="/pictos/arrow_back.svg" alt="Retour" />
          {articleHeader.back}
        </Back>
      </Link>
      <Row>
        {props.categories && (
          <Category className="categorie__title">
            {props.categories[0].fields.label}
          </Category>
        )}
        <Flex>
          <ArticleTitleHeader>{props.articleTitle}</ArticleTitleHeader>

          <Author>
            <Navigation isBlack noLink>
              <ReactMarkdown
                source={props.authors}
                renderers={{
                  link: props => (
                    <a href={props.href} target="_blank">
                      {props.children}
                    </a>
                  )
                }}
                escapeHtml={false}
              />
            </Navigation>
          </Author>
        </Flex>
        <Media
          src={props.logo}
          alt={props.alt}
          style={{ width: "80px" }}
        ></Media>
        <Published>{props.published}</Published>
      </Row>

      <Line ref={lineRef} timeline={makeLine(scrollPosition)} />
      <Share isFinished={makeLine(scrollPosition) >= 100} />
    </Container>
  ) : (
    <MobileContainer isSticky={props.isSticky}>
      <Row style={{ width: "100%", padding: "0 30px" }}>
        <Row style={{ width: "unset", justifyContent: "space-around" }}>
          <Link href={`/${router.query.lang}/public-debat`}>
            <Back isCross>
              <img src="/pictos/close_article.svg" alt="Retour" />
            </Back>
          </Link>
          <Media src={props.logo} alt={props.alt}></Media>
        </Row>

        {props.categories && (
          <Category className="categorie__title">
            {props.categories[0].fields.label}
          </Category>
        )}
        <Published>{props.published}</Published>
      </Row>

      <ArticleTitle>{props.articleTitle}</ArticleTitle>

      {/* <Line ref={lineRef} timeline={makeLine(scrollPosition)} /> */}
      <Share isFinished={makeLine(scrollPosition) >= 100} />
    </MobileContainer>
  );
};

export default ArticleHeader;

//  {
//    getWindowWidth === "Desktop" ? (
//      <Back>
//        <img src="/pictos/arrow_back.svg" alt="Retour" />
//        {articleHeader.back}
//      </Back>
//    ) : (
//      <Back isCross>
//        <img src="/pictos/close_article.svg" alt="Retour" />
//      </Back>
//    );
//  }

{
  /* <Author>
            <Navigation
              isBlack
              noLink
              dangerouslySetInnerHTML={{ __html: props.authors }}
            ></Navigation>
          </Author> */
}
