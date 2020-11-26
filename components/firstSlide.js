import React from "react";
import { useEffect, useState } from "react";
import { useTrail, useSpring, animated } from "react-spring";
import { Subtitle, BigTitle } from "../styled/typos";
import styled from "styled-components";
import { ScreenSizes } from "../config/theme/medias";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useRouter } from "next/router";

const FirstSlide = (props) => {
  const router = useRouter();
  const currentQuerryLang = router.query.lang;
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${ScreenSizes.MEDIUM}px)`,
  });
  const [toggle, set] = useState(false);
  let items = ["sustainable", "leadership"];
  const config = { mass: 5, tension: 2000, friction: 200 };

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
    setTimeout(function () {
      set(true);
    }, 400);
  }, []);

  return (
    <Container>
      <Link href={`/[lang]/vision`} as={`/${currentQuerryLang}/vision`}>
        <div>
          <Titles>
            <animated.div style={appear}>
              <Subtitle>
                {currentQuerryLang === "fr"
                  ? "Maison de conseil en"
                  : "consulting house for a "}{" "}
              </Subtitle>
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
                    <CustomBigTitle> {items[index]}</CustomBigTitle>
                  </animated.div>
                </animated.div>
              ))}
            </div>
          </Titles>
        </div>
      </Link>
    </Container>
  );
};

export default FirstSlide;

const CustomBigTitle = styled(BigTitle)`
  ${(props) => props.theme.medias.small`
  font-size:34px;
`}
`;
const Container = styled.div`
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
    ${(props) => props.theme.medias.small`
    height:40px;
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
  top: 35%;
  left: 0;
  right: 0;
  cursor: pointer;

  ${(props) => props.theme.medias.medium`
    margin-top: 90px;
`}
  h1 {
    width: 50%;
  }
  h3 {
    color: ${(props) => props.theme.colors.white};
  }
`;
