import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

import styled from "styled-components";
import {
  ContactTitle,
  ContactBtn,
  LinkTitle,
  LinkItem,
  Chapeau,
  Labor,
  FatTitle
} from "../../styled/typos";
import { Wrapper } from "../../styled/space";
import BackgroundImage from "../../components/backgroundImage";
import { useMocks } from "../../context/mock-context";
import { getWindowWidth } from "../../utils/windowWidth";
import { getMenuHeight } from "../../utils/menuHeight";

import getData from "../../api/getPage";

const Legals = props => {
  const legals = props.data;

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const Hero = styled(BackgroundImage)`
    position: relative;
    height: 100vh;
    top: -${getMenuHeight()}px;
    margin-bottom: -${getMenuHeight()}px;
    background-color: ${props => props.theme.colors.blue};

    ${props => props.theme.medias.medium`
        display:none;
        top:0;
  `};
  `;

  return (
    <Container>
      <NextSeo
        title={legals.title}
        // description={contact.seo_description}
        // canonical={contact.seo_canonical}
      />
      <Hero>
        <Flex isCenter>
          <Logo>
            <img src={legals.logo.fields.file.url} />
          </Logo>

          <Titles>
            <ContactTitle>{legals.bigTitle}</ContactTitle>
          </Titles>
        </Flex>
      </Hero>
      <Wrapper isWhite>
        <Flex>
          <Part>
            {getWindowWidth() === "Mobile" ? (
              <FatTitle isBlack style={{ marginBottom: "90px" }}>
                {legals.title}
              </FatTitle>
            ) : (
              ""
            )}

            <Chapeau isBlack style={{ marginBottom: "-10px" }}>
              {legals.subtitle1}
            </Chapeau>
            <CustomLabor
              dangerouslySetInnerHTML={{
                __html: legals.content1.content[0].content[0].value
              }}
            ></CustomLabor>
          </Part>
          <Part>
            <Chapeau isBlack>{legals.subtitle2}</Chapeau>
            <CustomLabor
              dangerouslySetInnerHTML={{
                __html: legals.content2.content[0].content[0].value
              }}
            ></CustomLabor>
            <CustomChapeau isBlack>{legals.subtitle3}</CustomChapeau>
            <CustomLabor
              dangerouslySetInnerHTML={{
                __html: legals.content3.content[0].content[0].value
              }}
            ></CustomLabor>
          </Part>
        </Flex>
      </Wrapper>
    </Container>
  );
};

Legals.getInitialProps = async function(context) {
  const currentLocale = context.query.lang;
  return getData({
    c_type_id: "3ywu7osEe7cUe8TICSDFNo",
    locale: currentLocale
  });
};

export default Legals;

const Container = styled.div`
  background-color: white;
  padding-bottom: 80px;
`;
const Logo = styled.div`
  width: 50%;
  text-align: center;
`;

const CustomLabor = styled(Labor)`
  margin-top: 30px;
  span {
    text-transform: uppercase;
    display: block;
    margin-top: 10px;
    font-size: 11px;
  }
`;

const CustomChapeau = styled(Chapeau)`
  margin-top: 80px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 50%;
  width: 100%;
  justify-content: space-evenly;
  align-items: ${props => (props.isCenter ? "center" : "")};

  ${props => props.theme.medias.medium`
   flex-direction: column;
   margin-top: 80px;
  `};
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  width: 50%;
  ${props => props.theme.medias.medium`
    width: 100%;
  `};
`;

const Titles = styled.div`
  z-index: 9;
  width: 50%;
  h1 {
    width: 50%;
  }
`;

const Button = styled.button`
  color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 50px;
  padding: 12px 35px;
  background-color: transparent;
  margin-top: 55px;
  cursor: pointer;
  transition: all 500ms;
  a {
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    transition: all 500ms;
    background-color: ${props => props.theme.colors.white};
    p {
      color: ${props => props.theme.colors.black};
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  ${props => props.theme.medias.medium`
   flex-direction: column-reverse;
  `};
`;

{
  /* <div>
              <LinkTitle>&nbsp;</LinkTitle>
              <Flex>
                <a target="_blank" href="#">
                  <LinkItem>{contact.footer.others.legals}</LinkItem>
                </a>
                <a target="_blank" href="#">
                  <LinkItem>{contact.footer.others.credits}</LinkItem>
                </a>
              </Flex>
            </div> */
}
