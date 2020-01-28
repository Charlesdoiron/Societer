import React from "react";
import styled from "styled-components";
import { Navigation } from "../styled/typos";

const ArticleHeader = props => {
  const Media = styled.img`
    width: ${props.media.width};
  `;

  const Container = styled.div`
    border: 1px solid ${props => props.theme.colors.black};
    border-right: transparent;
    border-left: transparent;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
  `;

  const Published = styled(Navigation)`
    color: ${props => props.theme.colors.black};
    opacity: 0.5;
    margin: 0;
  `;

  const Author = styled.div`
    margin-left: 20px;
    ${props => props.theme.medias.medium`
    display:none;
   `}
  `;

  return (
    <Container>
      <Media src={props.media.logo} alt="Logo Média"></Media>
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

      <Published>publiée le {props.published}</Published>
    </Container>
  );
};

export default ArticleHeader;
