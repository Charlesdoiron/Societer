import { useEffect, useState } from "react";
import { useTrail, useSpring, animated } from "react-spring";
import { NextSeo } from "next-seo";
import styled from "styled-components";
import { Wrapper } from "../../styled/space";
import getPage from "../../api/getPage";
import SliderHomepage from "../../components/sliderHomepage";

const HomePage = (props) => {
  const { quotes, metatitle, metadescription, canonical } = props.data;
  if (!props) return;

  return (
    <Container>
      <NextSeo
        title={metatitle}
        description={metadescription}
        canonical={canonical}
      />

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
  height: 102vh;
  display: flex;
  align-items: center;
`;
