import { useEffect, useState } from "react";
import Head from "next/head";

import styled from "styled-components";
import { Chapeau, Labor, Subtitle, FatTitle } from "../styled/typos";
import { Wrapper } from "../styled/space";
import Accordion from "../components/accordion";
import BackgroundImage from "../components/backgroundImage";
import Member from "../components/member";
import { useMocks } from "../context/mock-context";

const client = require("contentful").createClient({
  space: "86i03dw6wwwc",
  accessToken: "fs65wT3qwmrz2Rcyh0fFkJE2uukw1N5mxY9_IzljpH0"
});

function Communaute() {
  const { communaute } = useMocks();
  const [menuHeight, setMenuHeight] = useState("");
  useEffect(() => {
    setMenuHeight(document.querySelector(".menu").offsetHeight);
  }, []);
  const FirstPart = styled.div`
    position: relative;
    height: 100vh;
    top: -${menuHeight}px;
    margin-bottom: -${menuHeight}px;
  `;
  return (
    <>
      <Head>
        <title>Societer | la Communauté</title>
      </Head>

      <FirstPart>
        <BackgroundImage />
      </FirstPart>
      {communaute.members.map((member, i) => (
        <Member dataMember={member} key={i} even={i % 2 == !0} />
      ))}
    </>
  );
}

export default Communaute;

const Img = styled.img`
  width: 490px;
  position: absolute;
  top: 300px;
  right: 0;

  ${props => props.theme.medias.medium`
    display:none;
  `}
`;

const SecondPart = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 150px 0;
  position: relative;
  ${props => props.theme.medias.medium`
    padding: 60px 0;
  `}

  h1 {
    margin-top: 30px;
    color: ${props => props.theme.colors.black};
    max-width: 80%;
    z-index: 10;
    position: relative;
    margin-bottom: 270px;

    ${props => props.theme.medias.medium`
     max-width: unset;
     margin-bottom: 60px;
    `}
  }
`;

const ThirdPart = styled.div`
  background-color: ${props => props.theme.colors.white};
`;
