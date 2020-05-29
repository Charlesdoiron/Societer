import { useEffect } from "react";

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
  console.log(props);
  return (
    <Container>
      <NextSeo
        title={metatitle}
        description={metadescription}
        canonical={canonical}
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
