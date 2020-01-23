import { useEffect, useState } from "react";

import { NextSeo } from "next-seo";
import styled from "styled-components";
import { Subtitle, BigTitle } from "../styled/typos";
import { Wrapper } from "../styled/space";
import BackgroundImage from "../components/backgroundImage";
import { useMocks } from "../context/mock-context";

const client = require("contentful").createClient({
  space: "86i03dw6wwwc",
  accessToken: "fs65wT3qwmrz2Rcyh0fFkJE2uukw1N5mxY9_IzljpH0"
});

function HomePage() {
  const { homepage } = useMocks();
  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
  return (
    <Container>
      <NextSeo
        title={homepage.seo.title}
        description={homepage.seo.description}
        canonical={homepage.seo.canonical}
      />

      <BackgroundImage
        image="images/home/bkg_prehome.jpg"
        alt="Societer Team"
      />
      <Wrapper>
        <Titles>
          <Subtitle>{homepage.subtitle}</Subtitle>
          <BigTitle>{homepage.title}</BigTitle>
        </Titles>
      </Wrapper>
    </Container>
  );
}

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
  top: 50%;
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

// async function fetchContentTypes() {
//   const types = await client.getContentTypes();
//   if (types.items) return types.items;
//   console.log("Error getting Content Types.");
// }

// async function fetchEntriesForContentType(contentType) {
//   const entries = await client.getEntries({
//     content_type: contentType.sys.id
//   });
//   if (entries.items) return entries.items;
//   console.log(`Error getting Entries for ${contentType.name}.`);
// }

// const [posts, setPosts] = useState([]);

// useEffect(() => {
//   async function getPosts() {
//     const contentTypes = await fetchContentTypes();
//     const allPosts = await fetchEntriesForContentType(contentTypes[0]);
//     setPosts([...allPosts]);
//   }
//   getPosts();
// }, []);
