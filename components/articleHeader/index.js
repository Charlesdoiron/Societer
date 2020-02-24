import React, { useState, useEffect, useRef } from "react";

import { Navigation, ArtcileTitleHeader } from "../../styled/typos";
import Share from "../share";
import Link from "next/link";

import { useMocks } from "../../context/mock-context";
import {
  Container,
  Line,
  Published,
  Author,
  Flex,
  Row,
  Category,
  Back
} from "./styled";

const ArticleHeader = props => {
  const { articleHeader } = useMocks();
  const lineRef = useRef(null);
  const [isTimeline, setIsTimeline] = useState("");

  useEffect(() => {
    const getPosition = () => {
      let scroll = window.pageYOffset;
      let body = document.body;
      let height = body.scrollHeight - body.offsetHeight;
      let percent = (scroll * 100) / height;
      percent = percent.toFixed(0);
      setIsTimeline(percent);
    };

    if (typeof window !== undefined) {
      getPosition();
      window.addEventListener("scroll", () => getPosition());
      return () => window.removeEventListener("scroll", () => getPosition());
    }
  });

  return (
    <Container isSticky={props.isSticky}>
      <Link href="/debat-public">
        <Back>
          <img src="/pictos/arrow_back.svg" alt="Retour" />
          {articleHeader.back}
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
                {articleHeader.publishedBy}{" "}
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

      <Line ref={lineRef} timeline={isTimeline} />
      <Share isFinished={isTimeline >= 100} />
    </Container>
  );
};

export default ArticleHeader;
