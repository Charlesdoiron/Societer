import { useEffect, useState } from "react";
import { useTrail, useSpring, animated } from "react-spring";
import { NextSeo } from "next-seo";
import Head from "next/head";
import styled from "styled-components";
import { Wrapper } from "../../styled/space";
import getPage from "../../endpoints/getPage";
import SliderHomepage from "../../components/sliderHomepage";
import { homeJsonLd, pageJsonLd } from "../../jsonLd";
const HomePage = (props) => {
  const { quotes, metatitle, metadescription, canonical } = props.data;
  if (!props) return;
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#10101010";
    document.querySelector("html").style.backgroundColor = "#10101010";

    return () => {
      document.querySelector("body").style.backgroundColor = "#FFFFFF";
      document.querySelector("html").style.backgroundColor = "#FFFFFF";
    };
  }, []);
  return (
    <Container>
      <NextSeo
        title={metatitle}
        description={metadescription}
        canonical={canonical}
        languageAlternates={{
          hrefLang: "en",
          href: "https://www.societer.co/en",
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: homeJsonLd }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: pageJsonLd }}
        />
      </Head>
      <StyledWrapper>
        <SliderHomepage quotes={quotes} />
      </StyledWrapper>
    </Container>
  );
};

HomePage.getInitialProps = async function (context) {
  const currentLocale = context.query.lang;
  return getPage({
    c_type_id: "4rglDhHrrnut1MGCRtPX9X",
    locale: currentLocale,
  });
};

export default HomePage;

const StyledWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.colors.blue};
  padding: 0 20% 0 8%;
`;
const Container = styled.div`
  background-color: ${(props) => props.theme.colors.blue};
  height: 100vh;
  display: flex;
  align-items: center;

  ${(props) => props.theme.medias.medium`
 margin-bottom: -80px;
  `}
`;
