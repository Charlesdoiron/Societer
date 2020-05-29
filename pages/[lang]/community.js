import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import { Spring, config } from "react-spring/renderprops.cjs";
import styled from "styled-components";
import BackgroundImage from "../../components/backgroundImage";
import Member from "../../components/member";
import StrategicComite from "../../components/strategicComite";

import fetch from "../../endpoints/getCommunity";

const Community = (props) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setTimeout(() => {
      setAnimate(true);
    }, 300);
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
        <Spring
          config={{ delay: 50 }}
          from={{
            transform: !animate ? "translateX(-30px)" : "translateX(0px)",
            opacity: !animate ? 0 : 1,
          }}
          to={{
            transform: animate ? "translateX(0px)" : "translateX(-30px)",
            opacity: animate ? 1 : 0,
          }}
        >
          {({ transform, opacity }) => (
            <div
              style={{
                transform,
                opacity,
                position: "relative",
                left: " 5%",
                whiteSpace: " nowrap",
                zIndex: " 20",
              }}
            >
              <Title>La communauté</Title>
            </div>
          )}
        </Spring>

        <Space />
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

const Title = styled.h1`
  font-family: "garnett_bold";
  z-index: 20;
  top: 55vh;
  left: 5%;
  color: ${(props) => props.theme.colors.white};
  font-size: 80px;
  line-height: 95px;
  position: absolute;
  ${(props) => props.theme.medias.mediumLarge`
  display:none;
   `};
`;

const Space = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  width: 40%;
  ${(props) => props.theme.medias.mediumLarge`
  display:none;
   `};
`;

const FirstPart = styled.div`
  height: 100%;
  position: relative;
  display: flex;

  ${(props) => props.theme.medias.medium`
   height:50vh;
   `};
`;

export default Community;
