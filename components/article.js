import React, { useState } from "react";
import { Navigation, Chapeau, SmallSubtitle } from "../styled/typos";
import styled from "styled-components";
import { useMocks } from "../context/mock-context";
import Link from "next/link";
import classNames from "classnames";
const Article = props => {
  const { articles } = useMocks();
  const [isHover, setIsHover] = useState("");

  let articlesFiltered;

  if (props.filter === "all") {
    articlesFiltered = articles;
  } else {
    articlesFiltered = articles.filter((article, i) => {
      const hadFilter = article.categorie.filter(
        cat => cat.id === props.filter
      );
      if (hadFilter.length > 0) {
        return articles[i];
      }
    });
  }

  return (
    <Container>
      {articlesFiltered.map((el, i) => (
        <ArticleContainer
          className={classNames("article__container", {
            isActive: isHover === el.slug
          })}
          key={i}
          onMouseOver={() => setIsHover(el.slug)}
          isActive={isHover === el.slug}
        >
          {el.categorie.map((cat, i) => (
            <CategorieTitle className="categorie__title" key={i}>
              {cat.label}
            </CategorieTitle>
          ))}
          <Flex>
            <div>
              <Link
                href={{
                  pathname: `article/${el.slug}`,
                  query: { title: el.title }
                }}
                as={`article/${el.slug}`}
              >
                <Title className="title">{el.title}</Title>
              </Link>
              <Published className="published">{el.published}</Published>
            </div>

            {el.pdf !== null ? (
              <div className="pdf">
                <a href={el.pdf.url.toString()} target="_blank" rel="noopener">
                  <img src="/images/debat_public/pdf.svg" alt="Pdf" />
                </a>
              </div>
            ) : (
              ""
            )}
          </Flex>
        </ArticleContainer>
      ))}
    </Container>
  );
};

export default Article;

const ArticleContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.black};
  margin-top: 35px;
  width: 100%;
  opacity: 1;
  transition: all 500ms;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategorieTitle = styled(SmallSubtitle)`
  color: ${props => props.theme.colors.blue};
  margin-bottom: 20px;
`;
const Title = styled(Chapeau)`
  color: ${props => props.theme.colors.black};
  margin-bottom: 20px;
  width: 80%;
  cursor: pointer;
`;
const Published = styled(Navigation)`
  color: ${props => props.theme.colors.black};
  margin-bottom: 15px;
  cursor: auto;
`;

const Container = styled.div`
  position: relative;
  padding: 0 0 200px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${props => props.theme.colors.white};
  transition: all 500ms;
  &:hover {
    .categorie__title,
    .title,
    .published {
      opacity: 0.3;
      transition: all 500ms;
    }
    .article__container {
      border-bottom: 1px solid rgba(16, 16, 16, 0.3);
    }
    .article__container {
      &.isActive {
        .categorie__title,
        .title,
        .published {
          transition: all 500ms;
          opacity: 1;
        }
      }
    }
    &.pdf {
      transition: all 500ms;
      opacity: 1;
    }
  }
`;
