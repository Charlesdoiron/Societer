import React from "react";
import styled from "styled-components";
import { Navigation, ArticleTitle, ArtcileTitleHeader } from "../styled/typos";
import ReactMarkdown from "react-markdown";
const VisionArticleHeader = (props) => {
  const Media = styled.img``;

  const Container = styled.div`
    border: 1px solid ${(props) => props.theme.colors.black};
    border-right: transparent;
    border-left: transparent;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Published = styled(Navigation)`
    color: ${(props) => props.theme.colors.black};
    opacity: 0.5;
    margin: 0;
    cursor: auto;
  `;

  const Author = styled.div`
    margin-left: 20px;
    a {
      color: inherit;
    }
    ${(props) => props.theme.medias.medium`
    display:none;
   `}
  `;

  const Flex = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <Container isSticky={props.isSticky}>
      <a
        href="https://www.lesechos.fr/idees-debats/cercle/dirigeants-dentreprise-engagez-vous-pour-sauver-le-monde-et-votre-business-1039127"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Media src={props.media} alt="Logo Média"></Media>
      </a>

      <Author>
        <Navigation isBlack noLink>
          <ReactMarkdown
            source={props.authors}
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

      <Published>{props.published}</Published>
    </Container>
  );
};

export default VisionArticleHeader;
