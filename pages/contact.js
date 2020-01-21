import { useEffect, useState } from "react";
import Head from "next/head";

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

  console.log(getWindowWidth());
  const Image = styled(BackgroundImage)`
    position: relative;
    height: 100vh;
    top: -${getMenuHeight()}px;
    margin-bottom: -${getMenuHeight()}px;
  `;

  return (
    <Container>
      <Head>
        <title>Societer | Contact</title>
      </Head>
      <Image alt="Societer Contact" image="images/contact/contact.jpg" />
      <Wrapper isWhite>
        <Titles>
          <ContactTitle>{contact.title}</ContactTitle>
          <Button>
            <ContactBtn>{contact.cta}</ContactBtn>
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
                    <a href={link.url} key={i}>
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
                    <a href={link.url} key={i}>
                      <LinkItem>{link.title}</LinkItem>
                    </a>
                  );
                })}
              </Flex>
            </Sub>
            <Sub style={{ margin: "0" }}>
              <LinkTitle>{contact.footer.press.title}</LinkTitle>
              <Flex>
                <a href={contact.footer.press.url} target="_blank">
                  <LinkItem style={{ whiteSpace: "nowrap" }}>
                    {contact.footer.press.cta}
                  </LinkItem>
                </a>
              </Flex>
            </Sub>
            {/* <div>
              <LinkTitle>&nbsp;</LinkTitle>
              <Flex>
                <a href="#">
                  <LinkItem>{contact.footer.others.legals}</LinkItem>
                </a>
                <a href="#">
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
  margin-bottom: 60px;
  flex: 0 30%;

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
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
`;

const Titles = styled.div`
  width: 100%;
  z-index: 9;
  position: absolute;
  top: 40%;
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
