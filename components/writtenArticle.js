import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Wrapper } from "../styled/space";
import { Navigation, SmallSubtitle } from "../styled/typos";
import { useRouter } from "next/router";
const WrittenArticle = (props) => {
  const router = useRouter();
  const currentLocale = router.query.lang;

  return (
    <Link
      href={{
        pathname: `/${currentLocale}/article/${props.slug}`,
        query: { title: props.title },
      }}
      as={`/${currentLocale}/article/${props.slug}`}
    >
      <Container>
        <CategorieContainer>
          <Categorie>{props.categorie}</Categorie>
        </CategorieContainer>

        <TitleContainer>
          <Title isBlack>{props.title}</Title>
        </TitleContainer>
        <CtaContainer>
          <Cta>Lire plus</Cta>
        </CtaContainer>
      </Container>
    </Link>
  );
};

export default WrittenArticle;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};

  &:hover {
    cursor: pointer;
    transition: all 400ms;

    p {
      font-weight: bold;
      ${(props) => props.theme.medias.medium`
           font-weight: normal; 
        `}
    }

    button {
      background-color: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.white};
      cursor: pointer;
      padding: 22px 10px;

      ${(props) => props.theme.medias.medium`
          padding: 13px 10px;
          background-color: unset;
          color:${(props) => props.theme.colors.black};   
        `}
    }
  }

  ${(props) => props.theme.medias.medium`
    flex-direction:column;
    padding-top:20px;
    width: 100%;
    `}
`;

const TitleContainer = styled.div`
  width: 70%;
  ${(props) => props.theme.medias.medium`
    width: 100%;
    p{
        padding-bottom:0;
    } 
`}
`;

const CtaContainer = styled.div`
  ${(props) => props.theme.medias.medium`
    width: 100%;
    text-align:right;
    
`}
`;

const CategorieContainer = styled.div`
  width: 10%;
  ${(props) => props.theme.medias.medium`
    width: 100%;
`}
`;
const Categorie = styled(SmallSubtitle)`
  color: ${(props) => props.theme.colors.blue};
`;
const Title = styled(Navigation)`
  text-align: left;
  padding: 20px 0;
  transition: all 400ms;
  ${(props) => props.theme.medias.medium`
    font-family: "garnett_medium";
    font-size:14px;
    line-height:22px;
`}
`;
const Cta = styled.button`
  transition: all 400ms;
  background-color: transparent;
  border: 0;
  border-left: 1px solid ${(props) => props.theme.colors.black};
  padding: 13px 10px;

  ${(props) => props.theme.medias.medium`
    border:0;
    text-transform:uppercase;
`}
`;
