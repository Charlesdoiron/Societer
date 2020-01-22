import { useEffect, useState, useRef } from "react";
import { NextSeo } from "next-seo";

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

  useEffect(() => {
    setMenuHeight(document.querySelector(".menu").offsetHeight);
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const FirstPart = styled.div`
    position: relative;
    height: 100vh;
    top: -${menuHeight}px;
    margin-bottom: -${menuHeight}px;
  `;
  return (
    <>
      <NextSeo
        title={communaute.seo.title}
        description={communaute.seo.description}
        canonical={communaute.seo.canonical}
      />
      <ShowOnMediumPlus>
        <FirstPart>
          <BackgroundImage image="images/home/bkg_prehome.jpg" />
        </FirstPart>
      </ShowOnMediumPlus>

      {communaute.members.map((member, i) => (
        <Member dataMember={member} key={i} even={i % 2 == !0} />
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
