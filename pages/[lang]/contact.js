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

import { getMenuHeight } from "../../utils/menuHeight";

import getContact from "../../api/getContact";

const Contact = props => {
  const contact = props.data;

  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const credits = (a, b) => {
    return (
      <Sub>
        <LinkTitle>{contact[a]}</LinkTitle>
        <Flex>
          {contact[b].map(({ fields }) => {
            return (
              <a
                target="_blank"
                href={fields.url}
                key={fields.label}
                rel="noopener"
              >
                <LinkItem>{fields.label}</LinkItem>
              </a>
            );
          })}
        </Flex>
      </Sub>
    );
  };

  const Image = styled(BackgroundImage)`
    position: relative;
    height: 100vh;
    top: -${getMenuHeight()}px;
    margin-bottom: -${getMenuHeight()}px;
  `;

  return (
    <Container>
      <NextSeo
        title={contact.title}
        // description={contact.seo_description}
        // canonical={contact.seo_canonical}
      />
      <Image
        alt="Societer Contact"
        image={contact.backgroundImage.fields.file.url}
        imageMobile={contact.backgroundImageMobile.fields.file.url}
      />
      <Wrapper isWhite>
        <Titles>
          <ContactTitle>{contact.adress}</ContactTitle>
          <Button>
            <ContactBtn>
              <a target="_blank" href={contact.cta.fields.url} rel="noopener">
                {contact.cta.fields.label}
              </a>
            </ContactBtn>
          </Button>
        </Titles>
      </Wrapper>
      <Footer>
        <LeftPart>
          <Logo
            alt="societer in Societer we trust"
            style={{
              backgroundImage: `url(${contact.logo.fields.file.url})`
            }}
          />
        </LeftPart>
        <RightPart>
          <Links>
            {credits("subtitle1", "credits1")}
            {credits("subtitle2", "credits2")}
            <Sub>
              <LinkTitle>{contact.subtitle3}</LinkTitle>
              <Flex>
                <a
                  target="_blank"
                  href={contact.credits3.fields.file.url}
                  key={contact.credits3.fields.title}
                  rel="noopener"
                >
                  <LinkItem>{contact.credits3.fields.title}</LinkItem>
                </a>
              </Flex>
            </Sub>
            {credits("subtitle4", "credits4")}
            {credits("subtitle5", "credits5")}
          </Links>
        </RightPart>
      </Footer>
    </Container>
  );
};

Contact.getInitialProps = async function(context) {
  const currentLocale = context.query.lang;
  return getContact({
    c_type_id: "4EzvFHRWcWOThCzEsyu3jI",
    locale: currentLocale
  });
};

export default Contact;

const Container = styled.div``;
const Logo = styled.div`
  background-size: contain;
  width: 260px;
  height: 116px;
  background-repeat: no-repeat;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  justify-content: start;
  a {
    margin: 20px 50px 0 0;
    text-decoration: none;
    border-bottom: 1px solid ${props => props.theme.colors.white};
  }
  ${props => props.theme.medias.medium`
    justify-content: space-between;
    a {
      margin: 12px 0 0 0;
    }
  `};
`;

const Sub = styled.div`
  margin: 30px 0;
  flex: 0 40%;
  flex-wrap: wrap;

  ${props => props.theme.medias.medium`
    flex: 0 100%;
  `};
`;

const RightPart = styled.div`
  background-color: ${props => props.theme.colors.black};
  position: relative;
  width: 70%;
  padding: 100px;

  ${props => props.theme.medias.medium`
   width: 100%;
    padding:40px 30px;
  `};
`;

const LeftPart = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 10%;
  display: flex;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  align-items: flex-start;
`;

const Titles = styled.div`
  width: 100%;
  z-index: 9;
  position: absolute;
  top: 40%;
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