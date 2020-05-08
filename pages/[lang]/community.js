import { useEffect } from "react";
import { NextSeo } from "next-seo";

import styled from "styled-components";
import BackgroundImage from "../../components/backgroundImage";
import Member from "../../components/member";
import StrategicComite from "../../components/strategicComite";

import fetch from "../../endpoints/getCommunity";

const Community = (props) => {
  useEffect(() => {
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
    strategicComitee,
    cover,
  } = props.data;

  return (
    <>
      <NextSeo
        title={metatitle}
        description={metadescription}
        canonical={canonical}
      />

      <FirstPart>
        <BackgroundImage
          heightDesktop="90vh"
          height="100%"
          style={{ position: "relative" }}
          image={cover}
          alt={cover.fields.description}
        />
      </FirstPart>

      {members.map((member, i) => (
        <Member
          dataMember={member.fields}
          key={i}
          even={i % 2 == !0}
          position={i}
        />
      ))}
      <StrategicComite
        strategicComitee={strategicComitee}
        subtitle={strategicComiteSubtitle}
      />
    </>
  );
};

Community.getInitialProps = async function (context) {
  const currentLocale = context.query.lang;
  return fetch({
    c_type_id: "5ASzL8iF6PpZnriSZq8FWJ",
    locale: currentLocale,
  });
};

const FirstPart = styled.div`
  height: 100%;
  position: relative;
  ${(props) => props.theme.medias.medium`
   height:50vh;
   `};
`;

export default Community;
