import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import styled from "styled-components";
import { ContactTitle } from "../../styled/typos";
import { Wrapper } from "../../styled/space";
import BackgroundImage from "../../components/backgroundImage";
import { useMocks } from "../../context/mock-context";
import Categories from "../../components/categories";
import Article from "../../components/article";
import { getMenuHeight } from "../../utils/menuHeight";
import { pageJsonLd } from "../../jsonLd";
import getPage from "../../api/getPage";
const PublicDebat = (props) => {
  const { debat_public } = useMocks();
  const { bigTitle, categories, articles, backgroundImage } = props.data;
  const [isFilter, setFilter] = useState("all");

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const ImageContainer = styled.div`
    position: relative;
    height: 80vh;
    opacity: 0.7;
  `;

  return (
    <Container>
      <NextSeo
        title={debat_public.seo_title}
        description={debat_public.seo_description}
        canonical={debat_public.seo_canonical}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: pageJsonLd }}
        />
      </Head>
      <Titles>
        <ContactTitle>{bigTitle}</ContactTitle>
      </Titles>
      <ImageContainer>
        <Shape />
        <BackgroundImage
          style={{ height: "100%" }}
          alignBottom
          alt={backgroundImage.fields.description}
          image={backgroundImage}
        />
      </ImageContainer>

      <CustomWrapper isWhite>
        <Categories
          handleClick={(id) => setFilter(id)}
          categories={categories}
        />
        <Article filter={isFilter} articles={articles} />
      </CustomWrapper>
    </Container>
  );
};

PublicDebat.getInitialProps = async function (context) {
  const currentLocale = context.query.lang;
  return getPage({
    c_type_id: "6Y1xDPclXIJWOLHsDZEQXS",
    locale: currentLocale,
  });
};

export default PublicDebat;

const CustomWrapper = styled(Wrapper)`
  padding: 0 17%;
  position: relative;
  ${(props) => props.theme.medias.medium`
    padding:0 30px;
  `};
`;
const Container = styled.div`
  background-color: ${(props) => props.theme.colors.black};
`;

const Shape = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  position: relative;
  opacity: 0.2;
  z-index: 100;
`;
const Titles = styled.div`
  width: 100%;
  z-index: 9;
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  padding-left: 15%;

  h1 {
    width: 55%;
  }
  h3 {
    color: ${(props) => props.theme.colors.white};
  }

  ${(props) => props.theme.medias.medium`
  padding-left:30px;
  top: 45%;
  h1 {
    width: 90%;
  }
`}
`;
