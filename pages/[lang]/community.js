import { useEffect, useState, useRef } from "react";
import { NextSeo } from "next-seo";

import styled from "styled-components";
import BackgroundImage from "../../components/backgroundImage";
import Member from "../../components/member";
import StrategicComite from "../../components/strategicComite";
import { useMocks } from "../../context/mock-context";
import fetch from "../../api/getCommunity";

const Community = props => {
  const { communaute } = useMocks();
  const [menuHeight, setMenuHeight] = useState("");

  useEffect(() => {
    setMenuHeight(document.querySelector(".menu").offsetHeight);
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  if (!props) return;

  const {
    metatitle,
    metadescription,
    canonical,
    members,
    strategicComiteSubtitle,
    strategicComitee
  } = props.data;

  console.log(props, "community");
  console.log(members, "merbers");
  return (
    <>
      <NextSeo
        title={metatitle}
        description={metadescription}
        canonical={canonical}
      />
      <HideOnMediumPlus>
        <FirstPart>
          <img src="/images/home/bkg_prehome.jpg" alt="Societer Communaute" />
        </FirstPart>
      </HideOnMediumPlus>

      {members.map((member, i) => (
        <Member dataMember={member.fields} key={i} even={i % 2 == !0} />
      ))}
      <StrategicComite
        strategicComitee={strategicComitee}
        subtitle={strategicComiteSubtitle}
      />
    </>
  );
};

Community.getInitialProps = async function(context) {
  const currentLocale = context.query.lang;
  return fetch({
    c_type_id: "5ASzL8iF6PpZnriSZq8FWJ",
    locale: currentLocale
  });
};

const FirstPart = styled.div`
  img {
    width: 100%;
  }
`;

const HideOnMediumPlus = styled.div`
  display: none;
  ${props => props.theme.medias.mediumPlus`
  display:block;
`}
`;
export default Community;
