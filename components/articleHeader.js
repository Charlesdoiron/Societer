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
    ${props => props.theme.medias.medium`
    display:none;
   `}
  `;

  return (
    <Container>
      <Media src={props.media.logo}></Media>
      <Author>
        <Navigation isBlack>
          Co-signée par{" "}
          {props.authors.map((author, i) => {
            return (
              <>
                {" "}
                {author.name}
                {i < props.authors.length - 1 ? ", " : "."}
              </>
            );
          })}
        </Navigation>
      </Author>

      <Published>publiée le {props.published}</Published>
    </Container>
  );
};

export default ArticleHeader;
