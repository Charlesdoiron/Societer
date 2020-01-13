import { useEffect, useState, useRef } from "react";
import Head from "next/head";

import styled from "styled-components";
import BackgroundImage from "../components/backgroundImage";
import Member from "../components/member";
import StrategicComite from "../components/strategicComite";
import { useMocks } from "../context/mock-context";

const client = require("contentful").createClient({
  space: "86i03dw6wwwc",
  accessToken: "fs65wT3qwmrz2Rcyh0fFkJE2uukw1N5mxY9_IzljpH0"
});

const Communaute = () => {
  const { communaute } = useMocks();
  const [menuHeight, setMenuHeight] = useState("");
  const partTrigger = useRef(null);

  useEffect(() => {
    setMenuHeight(document.querySelector(".menu").offsetHeight);
    console.log(partTrigger);
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
      <ShowOnMediumPlus>
        <FirstPart>
          <BackgroundImage />
        </FirstPart>
      </ShowOnMediumPlus>

      {communaute.members.map((member, i) => (
        <Member
          dataMember={member}
          key={i}
          even={i % 2 == !0}
          ref={partTrigger}
        />
      ))}
      <StrategicComite
        dataMember={communaute.strategicComite.members}
        subtitle={communaute.strategicComite.smallSubtitle}
      />
    </>
  );
};
const ShowOnMediumPlus = styled.div`
  display: block;
  ${props => props.theme.medias.mediumPlus`
  display:none;
`}
`;
export default Communaute;
