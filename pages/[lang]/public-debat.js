import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

import styled from "styled-components";
import {
  ContactTitle,
  ContactBtn,
  LinkTitle,
  LinkItem
} from "../../styled/typos";
import { Wrapper } from "../../styled/space";
import BackgroundImage from "../../components/backgroundImage";
import { useMocks } from "../../context/mock-context";
import Categories from "../../components/categories";
import Article from "../../components/article";
import { getMenuHeight } from "../../utils/menuHeight";

import getPage from "../../api/getPage";
const PublicDebat = props => {
  console.log(props, "public debat");
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
    height: 100vh;
    top: -${getMenuHeight()}px;
    margin-bottom: -${getMenuHeight()}px;
    opacity: 0.7;
  `;

  console.log(backgroundImage);
  return (
    <Container>
      <NextSeo
        title={debat_public.seo_title}
        description={debat_public.seo_description}
        canonical={debat_public.seo_canonical}
      />
      <ImageContainer>
        <BackgroundImage
          alt={backgroundImage.fields.description}
          image={backgroundImage}
        />
      </ImageContainer>

      <CustomWrapper isWhite>
        <Titles>
          <ContactTitle>{bigTitle}</ContactTitle>
        </Titles>
        <Categories handleClick={id => setFilter(id)} categories={categories} />
        <Article filter={isFilter} articles={articles} />
      </CustomWrapper>
    </Container>
  );
};

PublicDebat.getInitialProps = async function(context) {
  const currentLocale = context.query.lang;
  return getPage({
    c_type_id: "6Y1xDPclXIJWOLHsDZEQXS",
    locale: currentLocale
  });
};

export default PublicDebat;

const CustomWrapper = styled(Wrapper)`
  padding: 0 17%;
  ${props => props.theme.medias.medium`
    padding:0 30px;
  `};
`;
const Container = styled.div`
  background-color: ${props => props.theme.colors.black};
`;

const Titles = styled.div`
  width: 100%;
  z-index: 9;
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  padding-left: 15%;

  h1 {
    width: 50%;
  }
  h3 {
    color: ${props => props.theme.colors.white};
  }

  ${props => props.theme.medias.medium`
  padding-left:30px;
  top: 45%;
  h1 {
    width: 90%;
  }
`}
`;
