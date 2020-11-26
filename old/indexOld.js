import { useEffect, useState } from "react";
import { useTrail, useSpring, animated } from "react-spring";
import { NextSeo } from "next-seo";
import Head from "next/head";
import styled from "styled-components";
import { Subtitle, BigTitle } from "../styled/typos";
import { Wrapper } from "../styled/space";
import BackgroundImage from "../components/backgroundImage";
import getPage from "../endpoints/getPage";
import { ScreenSizes } from "../config/theme/medias";
import { useMediaQuery } from "react-responsive";

import { homeJsonLd, pageJsonLd } from "../jsonLd";
const HomePage = (props) => {
  const {
    canonical,
    metatitle,
    metadescription,
    backgroundImage,
    tagline,
    subtitle,
  } = props.data;
  if (!props) return;

  let items = tagline.split(" ");
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${ScreenSizes.MEDIUM}px)`,
  });
  const config = { mass: 5, tension: 2000, friction: 200 };
  const [toggle, set] = useState(false);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? (!isDesktopOrLaptop ? 50 : 90) : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  const appear = useSpring({
    opacity: toggle ? "1" : "0",
    transform: toggle ? "translateX(10px)" : "translateX(0px)",
  });

  useEffect(() => {
    // document.querySelector("body").style.backgroundColor = "#10101010";
    // document.querySelector("html").style.backgroundColor = "#10101010";

    setTimeout(function () {
      set(true);
    }, 400);
    // return () => {
    //   document.querySelector("body").style.backgroundColor = "#492EFA";
    //   document.querySelector("html").style.backgroundColor = "#492EFA";
    // };
  }, []);

  return (
    <Container>
      <NextSeo
        title={metatitle}
        description={metadescription}
        canonical={canonical}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: homeJsonLd }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: pageJsonLd }}
        />
      </Head>

      <BackgroundImage
        alignBottom
        noImageOnMobile
        image={backgroundImage}
        alt={backgroundImage.fields.description}
      />
      <Wrapper>
        <div>
          <Titles>
            <animated.div style={appear}>
              <Subtitle>{subtitle}</Subtitle>
            </animated.div>

            <div>
              {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                  key={items[index]}
                  className="trails-text"
                  style={{
                    ...rest,
                    transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
                  }}
                >
                  <animated.div style={{ height }}>
                    <BigTitle> {items[index]}</BigTitle>
                  </animated.div>
                </animated.div>
              ))}
            </div>
          </Titles>
        </div>
      </Wrapper>
    </Container>
  );
};

HomePage.getInitialProps = async function (context) {
  const currentLocale = context.query.lang;
  return getPage({
    c_type_id: "5bA22RzOfK9fLA6PbB3xzP",
    locale: currentLocale,
  });
};

export default HomePage;

const Container = styled.div`
  ${(props) => props.theme.medias.medium`
overflow: hidden;
 -webkit-overflow-scrolling: touch;
`}
  .trails-text {
    position: relative;
    width: 100%;
    height: 90px;
    will-change: transform, opacity;
    overflow: hidden;
    padding-left: 10px;
    ${(props) => props.theme.medias.medium`
      height:50px;
      
`}
  }
  .trails-main {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .trails-text > div {
    overflow: hidden;
  }
`;

const Titles = styled.div`
  width: 100%;
  z-index: 9;
  position: absolute;
  top: 58%;
  left: 0;
  right: 0;
  padding-left: 10%;

  ${(props) => props.theme.medias.medium`
  padding-left:30px;
`}
  h1 {
    width: 50%;
  }
  h3 {
    color: ${(props) => props.theme.colors.white};
  }
`;
