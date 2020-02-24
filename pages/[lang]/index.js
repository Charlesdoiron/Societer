import { useEffect, useState } from "react";
import "isomorphic-unfetch";

import { NextSeo } from "next-seo";
import styled from "styled-components";
import { useStateValue } from "../../context/state";
import { Subtitle, BigTitle } from "../../styled/typos";
import { Wrapper } from "../../styled/space";
import BackgroundImage from "../../components/backgroundImage";
import { useMocks } from "../../context/mock-context";
import { fetchPage } from "../../api/call";
import { useRouter } from "next/router";
const HomePage = props => (
  <Container>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <a>{show.name}</a>
        </li>
      ))}
    </ul>
    <BackgroundImage
      noImageOnMobile
      image={props.fields && props.fields.backgroundImage}
      alt="Societer Team"
    />
    <Wrapper>
      <Titles>
        <Subtitle>{props.fields && props.fields.subtitle}</Subtitle>
        <BigTitle>{props.fields && props.fields.tagline}</BigTitle>
      </Titles>
    </Wrapper>
  </Container>
);

HomePage.getInitialProps = async function(context) {
  const currentLocale = context.query.lang;
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  return {
    shows: data.map(entry => entry.show)
  };

  // await fetchPage({ page: "homepage", locale: currentLocale });
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
