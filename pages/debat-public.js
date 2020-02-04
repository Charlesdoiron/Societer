import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

import styled from "styled-components";
import { ContactTitle, ContactBtn, LinkTitle, LinkItem } from "../styled/typos";
import { Wrapper } from "../styled/space";
import BackgroundImage from "../components/backgroundImage";
import { useMocks } from "../context/mock-context";
import Categories from "../components/categories";
import Article from "../components/article";
import { getMenuHeight } from "../utils/menuHeight";
import { getWindowWidth } from "../utils/windowWidth";

function DebatPublic() {
  const { debat_public } = useMocks();

  const [isFilter, setFilter] = useState("all");

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const Image = styled(BackgroundImage)`
    position: relative;
    height: 100%;
    opacity: 0.7;
    background-position: bottom;
  `;

  const ImageContainer = styled(BackgroundImage)`
    position: relative;
    height: 100%;
    top: -${getMenuHeight()}px;
    margin-bottom: -${getMenuHeight()}px;
    opacity: 0.7;
    background-position: bottom;
  `;

  return (
    <Container>
      <NextSeo
        title={debat_public.seo.title}
        description={debat_public.seo.description}
        canonical={debat_public.seo.canonical}
      />
      <ImageContainer style={{ height: "80vh" }}>
        <Image
          alt="Societer Contact"
          image="images/debat_public/debat_public.jpg"
        />
      </ImageContainer>

      <CustomWrapper isWhite>
        <Titles>
          <ContactTitle>{debat_public.title}</ContactTitle>
        </Titles>
        <Categories handleClick={id => setFilter(id)} />
        <Article filter={isFilter} />
      </CustomWrapper>
    </Container>
  );
}

export default DebatPublic;

const CustomWrapper = styled(Wrapper)`
  padding: 0 17%;
  ${props => props.theme.medias.medium`
    padding:0 30px;
  `};
`;
const Container = styled.div``;

const Titles = styled.div`
  width: 100%;
  z-index: 9;
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  padding-left: 15%;

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
