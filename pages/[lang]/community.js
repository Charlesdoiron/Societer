import { useEffect, useState, useRef } from "react";
import { NextSeo } from "next-seo";

import styled from "styled-components";
import BackgroundImage from "../../components/backgroundImage";
import Member from "../../components/member";
import StrategicComite from "../../components/strategicComite";
import { useMocks } from "../../context/mock-context";
import { fetchPage } from "../../api/call";

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

  const { members, strategicComiteeSubtitle, strategicComite } = props;
  console.log(props, "communaute");
  return (
    <>
      <NextSeo
        title={communaute.seo_title}
        description={communaute.seo_description}
        canonical={communaute.seo_canonical}
      />
      <HideOnMediumPlus>
        <FirstPart>
          <img src="/images/home/bkg_prehome.jpg" alt="Societer Communaute" />
        </FirstPart>
      </HideOnMediumPlus>

      {members.map((member, i) => (
        <Member dataMember={member} key={i} even={i % 2 == !0} />
      ))}
      <StrategicComite
        dataMember={communaute.strategicComite.members}
        subtitle={communaute.strategicComite.smallSubtitle}
      />
    </>
  );
};

Community.getInitialProps = async function(context) {
  const currentLocale = context.query.lang;
  return fetchPage({ page: "community", locale: currentLocale });
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
