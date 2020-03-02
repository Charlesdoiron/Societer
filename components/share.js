import React, { useState } from "react";
import styled from "styled-components";
import { useTrail, useSpring, animated } from "react-spring";
import { ArticleTitleHeader, SmallNavigation } from "../styled/typos";
import { Wrapper } from "../styled/space";
import useMeasure from "../utils/useMeasure";
let socials = [
  { name: "Fb", url: "www.facebook.fr" },
  { name: "Tw", url: "www.facebook.fr" },
  { name: "Lk", url: "www.facebook.fr" }
];

const Share = props => {
  const config = { mass: 5, tension: 1000, friction: 500, duration: 600 };
  const trail = useTrail(socials.length, {
    config,
    opacity: props.isFinished ? 1 : 0,
    x: props.isFinished ? -15 : 100,

    from: { opacity: 0, x: 100, height: 0 }
  });

  const [translateShare, set, stop] = useSpring(() => ({
    transform: "translateY(300px)"
  }));
  set({
    transform: props.isFinished ? "translateY(0px)" : "translateY(300px)"
  });
  stop();

  return (
    <Container style={translateShare}>
      <CustomWrapper>
        <Title>Partager cet article sur les réseaux sociaux</Title>

        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={index}
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <animated.div style={{ height }}>
              <Social>{socials[index].name}</Social>
            </animated.div>
          </animated.div>
        ))}
      </CustomWrapper>
    </Container>
  );
};

export default Share;

const Social = styled(SmallNavigation)`
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 100%;
  margin-bottom: 0 auto 45px auto;
  color: ${props => props.theme.colors.white};
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  vertical-align: middle;
  padding: 2px;
  line-height: unset;
  transition: all 500ms;
  &:hover {
    transition: all 500ms;
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.blue};
    background-color: ${props => props.theme.colors.white};
  }
  ${props => props.theme.medias.mediumPlus`
      margin: 30px 30px 30px 0 ;
    `}
  margin-left: 45px;
`;

const CustomWrapper = styled(Wrapper)`
  background-color: ${props => props.theme.colors.blue};
  padding: 0 17%;
  display: flex;
  flex-direction: row;
`;

const Title = styled(ArticleTitleHeader)`
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
`;

const Container = styled(animated.div)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0%;
  background-color: ${props => props.theme.colors.blue};
  display: flex;
  align-items: center;
  height: 100%;
`;

/* {socials.map((social, i) => (
          <Social key={i} style={translateShare}>
            {social.name}
          </Social>
        ))} */
