import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

import styled from "styled-components";
import { ContactTitle, ContactBtn, LinkTitle, LinkItem } from "../styled/typos";
import { Wrapper } from "../styled/space";
import BackgroundImage from "../components/backgroundImage";
import { useMocks } from "../context/mock-context";

import { getMenuHeight } from "../utils/menuHeight";
import { getWindowWidth } from "../utils/windowWidth";

const client = require("contentful").createClient({
  space: "86i03dw6wwwc",
  accessToken: "fs65wT3qwmrz2Rcyh0fFkJE2uukw1N5mxY9_IzljpH0"
});

function HomePage() {
  const { contact } = useMocks();
  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
  const Image = styled(BackgroundImage)`
    position: relative;
    height: 100vh;
    top: -${getMenuHeight()}px;
    margin-bottom: -${getMenuHeight()}px;
  `;

  return (
    <Container>
      <NextSeo
        title={contact.seo.title}
        description={contact.seo.description}
        canonical={contact.seo.canonical}
      />
      <Image
        alt="Societer Contact"
        image="images/contact/contact.jpg"
        imageMobile="images/contact/contact_mobile.jpg"
      />
      <Wrapper isWhite>
        <Titles>
          <ContactTitle>{contact.title}</ContactTitle>
          <Button>
            <ContactBtn>
              <a target="_blank" href={contact.url} target="_blank">
                {contact.cta}
              </a>
            </ContactBtn>
          </Button>
        </Titles>
      </Wrapper>
      <Footer>
        <LeftPart>
          <div
            alt="societer in Societer we trust"
            style={{
              backgroundImage: `url(${contact.footer.logo})`,
              backgroundSize: "contain",
              width: "260px",
              height: "116px",
              backgroundRepeat: "no-repeat",
              margin: "0 auto"
            }}
          />
        </LeftPart>
        <RightPart>
          <Links>
            <Sub>
              <LinkTitle>{contact.footer.socials.title}</LinkTitle>
              <Flex>
                {contact.footer.socials.links.map((link, i) => {
                  return (
                    <a target="_blank" href={link.url} key={i}>
                      <LinkItem>{link.title}</LinkItem>
                    </a>
                  );
                })}
              </Flex>
            </Sub>
            <Sub>
              <LinkTitle>{contact.footer.contact.title}</LinkTitle>
              <Flex>
                {contact.footer.contact.links.map((link, i) => {
                  return (
                    <a target="_blank" href={link.url} key={i}>
                      <LinkItem>{link.title}</LinkItem>
                    </a>
                  );
                })}
              </Flex>
            </Sub>
            <Sub>
              <LinkTitle>{contact.footer.press.title}</LinkTitle>
              <Flex>
                <a
                  target="_blank"
                  href={contact.footer.press.url}
                  target="_blank"
                >
                  <LinkItem style={{ whiteSpace: "nowrap" }}>
                    {contact.footer.press.cta}
                  </LinkItem>
                </a>
              </Flex>
            </Sub>
            <Sub>
              <LinkTitle>{contact.footer.others.legals.title}</LinkTitle>
              <Flex>
                <a target="_blank" href="#">
                  <LinkItem style={{ whiteSpace: "nowrap" }}>
                    {contact.footer.others.legals.links.title}
                  </LinkItem>
                </a>
              </Flex>
            </Sub>
            <Sub>
              <LinkTitle>{contact.footer.design.title}</LinkTitle>
              <Flex>
                <a target="_blank" href={contact.footer.design.links.url}>
                  <LinkItem>{contact.footer.design.links.title}</LinkItem>
                </a>
              </Flex>
            </Sub>
            <Sub>
              <LinkTitle>{contact.footer.photography.title}</LinkTitle>
              <Flex>
                <a target="_blank" href={contact.footer.photography.links.url}>
                  <LinkItem>{contact.footer.photography.links.title}</LinkItem>
                </a>
              </Flex>
            </Sub>

            {/* <div>
              <LinkTitle>&nbsp;</LinkTitle>
              <Flex>
                <a target="_blank" href="#">
                  <LinkItem>{contact.footer.others.legals}</LinkItem>
                </a>
                <a target="_blank" href="#">
                  <LinkItem>{contact.footer.others.credits}</LinkItem>
                </a>
              </Flex>
            </div> */}
          </Links>
        </RightPart>
      </Footer>
    </Container>
  );
}

export default HomePage;

const Container = styled.div``;

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
