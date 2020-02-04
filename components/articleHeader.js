import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  Navigation,
  ArticleTitle,
  ArtcileTitleHeader,
  SmallSubtitle
} from "../styled/typos";
import Share from "../components/share";
import Link from "next/link";

const ArticleHeader = props => {
  const lineRef = useRef(null);
  const [isTimeline, setIsTimeline] = useState("");
  useEffect(() => {
    const getPosition = () => {
      let scroll = window.scrollY;
      let body = document.body;
      let html = document.documentElement;
      let height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      let percent = (scroll * 125) / height;
      setIsTimeline(percent);
    };

    if (typeof window !== undefined) {
      getPosition();
      window.addEventListener("scroll", () => getPosition());
      return () => window.removeEventListener("scroll", () => getPosition());
    }
  });

  const Media = styled.img``;

  const Container = styled.div`
    border-top: 1px solid ${props => props.theme.colors.black};
    border-bottom: none !important;
    padding: 20px 0;
    display: flex;
    width: 100%;
    align-items: center;
    background-color: ${props => props.theme.colors.white};
    overflow: hidden;
    z-index: 300;
  `;
  const Line = styled.div`
    background-color: ${props => props.theme.colors.blue};
    width: ${isTimeline}%;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 2000ms;
  `;

  const Published = styled(Navigation)`
    color: ${props => props.theme.colors.black};
    opacity: 0.5;
    margin: 0;
    margin-left: 40px;
  `;

  const Author = styled.div`
    ${props => props.theme.medias.medium`
    display:none;
   `}
  `;

  const Flex = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 73.5%;
    h4 {
      margin-right: 15px;
    }
  `;
  const Category = styled(SmallSubtitle)`
    color: ${props => props.theme.colors.blue};
  `;

  const Back = styled(SmallSubtitle)`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 17%;

    img {
      margin-right: 10px;
      transition: all 500ms;
      right: 0px;
      position: relative;
    }
    &:hover {
      img {
        position: relative;
        right: 5px;
        color: blue;
        transition: all 1000ms;
      }
    }
  `;

  return (
    <Container isSticky={props.isSticky}>
      <Link href="/debat-public">
        <Back>
          <img src="/pictos/arrow_back.svg" alt="Retour" />
          RETOUR
        </Back>
      </Link>
      <Row>
        <Category>{props.category}</Category>
        <Flex>
          <ArtcileTitleHeader>{props.articleTitle}</ArtcileTitleHeader>

          <Author>
            <Navigation isBlack noLink>
              <a
                href={props.url}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {" "}
                Co-signée par{" "}
                {props.authors.map((author, i) => {
                  return (
                    <span key={i}>
                      {" "}
                      {author.name}
                      {i < props.authors.length - 1 ? ", " : "."}
                    </span>
                  );
                })}
              </a>
            </Navigation>
          </Author>
        </Flex>
        {/* <Media src={props.media} alt="Logo Média"></Media> */}
        <Published>{props.published}</Published>
      </Row>

      <Line ref={lineRef} />
      {/* <Share isFinished={isTimeline > 100} /> */}
    </Container>
  );
};

export default ArticleHeader;
