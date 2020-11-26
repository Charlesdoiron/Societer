import { useEffect, useState, useRef } from "react";
import { NextSeo } from "next-seo";
import { Wrapper } from "../../../styled/space";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import gql from "graphql-tag";
import Member from "../../../components/member";
import WrittenArticle from "../../../components/writtenArticle";
import { GET_ARTICLES_BY_AUTHOR } from "../../../queries/articlesByAuthor";
import { Chapeau } from "../../../styled/typos";
import fetch from "../../../endpoints/getAuthor";
import withApollo from "../../../apollo/client";
import authorName from "../../../statik/authorName";
import { isConstructorDeclaration } from "typescript";
const Community = (props) => {
  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  if (!props) return;

  const {
    metatitle,
    metadescription,
    canonical,
  } = props.data.memberCollection.items[0];
  console.log(props);
  return (
    <>
      <NextSeo
        title={metatitle}
        description={metadescription}
        canonical={canonical}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {"@context": "https://schema.org/",
            "@type": "Person",
            "name": "${props.data.name}",
            "url": "https://www.societer.co/fr/author/${props.data.slug}",
            s
            "jobTitle": "${props.data.subtitle}",
            "worksFor": {
              "@type": "Organization",
              "name": "Societer"
            },
            "sameAs": [
              "${props.data.linkedin}"
            ]
          }
            `,
          }}
        />
      </Head>

      <Member dataMember={props.data.memberCollection.items[0]} even={false} />

      {props.data.articleCollection && (
        <CustomWrapper isWhite>
          <ShowOnMobile>
            <Chapeau isBlack>Publications</Chapeau>
          </ShowOnMobile>

          {props.data.articleCollection.items.length > 0 &&
            props.data.articleCollection.items.map((article) => (
              <WrittenArticle
                title={article.title}
                slug={article.slug}
                categorie={article.categoriesCollection.items[0].label}
              />
            ))}
        </CustomWrapper>
      )}
    </>
  );
};

Community.getInitialProps = async (ctx) => {
  const {
    apolloClient,
    query: { id },
  } = ctx;

  const { data, loading, error } = await apolloClient.query({
    query: GET_ARTICLES_BY_AUTHOR,
    variables: { id: authorName[id] },
  });
  return {
    data,
    loading,
    error,
  };
};

const CustomWrapper = styled(Wrapper)`
  padding: 500px 3% 230px 3%;

  ${(props) => props.theme.medias.largePlus`
  padding: 200px 3% 350px 3%;
`}

  ${(props) => props.theme.medias.medium`
    padding: 30px ;
`}
`;

const ShowOnMobile = styled.div`
  display: none;
  ${(props) => props.theme.medias.medium`
  display:block;
`}
`;
export default Community;
