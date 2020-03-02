import React, { useState } from "react";
import { Navigation, Chapeau, SmallSubtitle } from "../styled/typos";
import styled from "styled-components";
import { useMocks } from "../context/mock-context";
import Link from "next/link";
import classNames from "classnames";

const Article = props => {
  const { articles } = props;
  const [isHover, setIsHover] = useState("");

  let articlesFiltered;

  if (props.filter === "all") {
    articlesFiltered = articles;
  } else {
    articlesFiltered = articles.filter((article, i) => {
      const hadFilter = article.fields.categories.filter(
        cat => cat.fields.slug === props.filter
      );
      if (hadFilter.length > 0) {
        return articles[i];
      }
    });
  }
  const pdf = "/images/debat_public/picto_pdf.png";
  return (
    <Container>
      {articlesFiltered.map((el, i) => (
        <ArticleContainer
          className={classNames("article__container", {
            isActive: isHover === el.fields.slug
          })}
          key={i}
          onMouseOver={() => setIsHover(el.fields.slug)}
          isActive={isHover === el.fields.slug}
        >
          <Flex>
            {el.fields.categories &&
              el.fields.categories.map((cat, i) => (
                <React.Fragment key={i}>
                  <CategorieTitle className="categorie__title" key={i}>
                    {cat.fields.label}
                  </CategorieTitle>
                  <CategorieTitle>
                    {i < el.fields.categories.length - 1 && "/"}
                  </CategorieTitle>
                </React.Fragment>
              ))}
          </Flex>

          <SpaceBetween>
            <div>
              <Link
                href={{
                  pathname: `article/${el.fields.slug}`,
                  query: { title: el.fields.title }
                }}
                as={`article/${el.fields.slug}`}
              >
                <Title className="title">{el.fields.title}</Title>
              </Link>
              <Published className="published">{el.fields.published}</Published>
            </div>

            {el.fields.pdf ? (
              <div className="pdf">
                <a
                  href={el.fields.pdf.fields.file.url}
                  target="_blank"
                  rel="noopener"
                >
                  <img src={pdf} alt="Pdf" style={{ width: "40px" }} />
                </a>
              </div>
            ) : (
              ""
            )}
          </SpaceBetween>
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
  h4 {
    margin-right: 20px;
  }
`;
const SpaceBetween = styled.div`
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
