import { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import { NextSeo } from "next-seo";
import styled from "styled-components";
import { Subtitle, BigTitle } from "../../styled/typos";
import { Wrapper } from "../../styled/space";
import BackgroundImage from "../../components/backgroundImage";
import getPage from "../../api/getPage";

const HomePage = props => {
  const {
    canonical,
    metatitle,
    metadescription,
    backgroundImage,
    tagline,
    subtitle
  } = props.data;
  if (!props) return;

  console.log(props, "homepage");
  return (
    <Container>
      <NextSeo
        title={metatitle}
        description={metadescription}
        canonical={canonical}
      />
      <BackgroundImage
        alignBottom
        noImageOnMobile
        image={backgroundImage}
        alt={backgroundImage.fields.description}
      />
      <Wrapper>
        <Titles>
          <Subtitle>{subtitle}</Subtitle>
          <BigTitle>{tagline}</BigTitle>
        </Titles>
      </Wrapper>
    </Container>
  );
};

HomePage.getInitialProps = async function(context) {
  const currentLocale = context.query.lang;
  return getPage({
    c_type_id: "5bA22RzOfK9fLA6PbB3xzP",
    locale: currentLocale
  });
};

export default HomePage;

const Container = styled.div`
  ${props => props.theme.medias.medium`
overflow: hidden;
 -webkit-overflow-scrolling: touch;
`}
`;

const Titles = styled.div`
  width: 100%;
  z-index: 9;
  position: absolute;
  top: 58%;
  left: 0;
  right: 0;
  padding-left: 10%;

  ${props => props.theme.medias.medium`
  padding-left:30px;
`}
  h1 {
    width: 50%;
  }
  h3 {
    color: ${props => props.theme.colors.white};
  }
`;
