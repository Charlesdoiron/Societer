import { useEffect, useState, useRef } from "react";
import { NextSeo } from "next-seo";
import { Wrapper } from "../../../styled/space";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import Member from "../../../components/member";
import WrittenArticle from "../../../components/writtenArticle";

import { Chapeau } from "../../../styled/typos";
import getAuthor from "../../../endpoints/getAuthor";

const Community = (props) => {
  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  if (!props) return;

  const { metatitle, metadescription, canonical, members } = props.data;

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

      <Member dataMember={props.data} even={false} />

      {props.data.articlesAuthor && (
        <CustomWrapper isWhite>
          <ShowOnMobile>
            <Chapeau isBlack>Publications</Chapeau>
          </ShowOnMobile>

          {props.data.articlesAuthor.map((article) => (
            <WrittenArticle
              title={article.fields.title}
              slug={article.fields.slug}
              categories={article.fields.categories}
            />
          ))}
        </CustomWrapper>
      )}
    </>
  );
};

Community.getInitialProps = async function (context) {
  const currentLocale = context.query.lang;
  const currentAuthor = context.query.id;

  return getAuthor({
    currentAuthor: currentAuthor,
    locale: currentLocale,
  });
};

const CustomWrapper = styled(Wrapper)`
  padding: 200px 3%;
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
