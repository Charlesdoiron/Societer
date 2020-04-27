import React, { useState } from "react";
import styled from "styled-components";
import { useTrail, useSpring, animated } from "react-spring";
import { ArticleTitleHeader, SmallNavigation, Labor } from "../styled/typos";
import { Wrapper } from "../styled/space";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { useRouter } from "next/router";
const Fb = (props) => {
  return (
    <FacebookShareButton url={props.path}>
      <Social>Fb</Social>
    </FacebookShareButton>
  );
};

const Tw = (props) => {
  return (
    <TwitterShareButton url={props.path}>
      <Social>Tw</Social>
    </TwitterShareButton>
  );
};

const Lk = (props) => {
  return (
    <LinkedinShareButton url={props.path}>
      <Social>Lk</Social>
    </LinkedinShareButton>
  );
};

let socials = [
  {
    name: <Fb />,
  },
  {
    name: <Tw />,
  },
  {
    name: <Lk />,
  },
];

const Share = (props) => {
  const config = { mass: 5, tension: 1000, friction: 500, duration: 600 };
  const trail = useTrail(socials.length, {
    config,
    opacity: props.isFinished ? 1 : 0,
    x: props.isFinished ? -15 : 100,

    from: { opacity: 0, x: 100, height: 0 },
  });

  const [translateShare, set, stop] = useSpring(() => ({
    transform: "translateY(300px)",
  }));
  set({
    transform: props.isFinished ? "translateY(0px)" : "translateY(300px)",
  });
  stop();

  const getRsx = (index) => {
    const router = useRouter();

    const path = `https://www.societer.co/${router.asPath}`;

    switch (index) {
      case 0:
        return <Fb path={path} />;
      case 1:
        return <Tw path={path} />;
      case 2:
        return <Lk path={path} />;
      default:
        break;
    }
  };

  return (
    <Container style={translateShare}>
      <CustomWrapper>
        <Title>Partager cet article sur les réseaux sociaux</Title>

        <SocialContainer>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={index}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              <animated.div style={{ height }}>{getRsx(index)}</animated.div>
            </animated.div>
          ))}
        </SocialContainer>
      </CustomWrapper>
    </Container>
  );
};

export default Share;

const SocialContainer = styled.div`
  display: flex;
  button:focus {
    outline: 0;
  }
`;

const Social = styled(SmallNavigation)`
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 100%;
  margin-bottom: 0 auto 45px auto;
  color: ${(props) => props.theme.colors.white};
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  vertical-align: middle;
  padding: 2px;
  line-height: unset;
  transition: all 500ms;
  margin-left: 45px;
  &:hover {
    transition: all 500ms;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.blue};
    background-color: ${(props) => props.theme.colors.white};
  }

  ${(props) => props.theme.medias.mediumPlus`
      margin: 30px 30px 30px 0 ;
    `}
`;

const CustomWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.colors.blue};
  padding: 0 17%;
  display: flex;
  flex-direction: row;

  ${(props) => props.theme.medias.mediumPlus`
    flex-direction:column;
    `}
`;

const Title = styled(Labor)`
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  ${(props) => props.theme.medias.mediumPlus`
    padding:0;
  `}
`;

const Container = styled(animated.div)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0%;
  background-color: ${(props) => props.theme.colors.blue};
  display: flex;
  align-items: center;
  height: 100%;

  ${(props) => props.theme.medias.medium`
    padding-top: 20px;
    align-items: unset;
    `}
`;

/* {socials.map((social, i) => (
          <Social key={i} style={translateShare}>
            {social.name}
          </Social>
        ))} */
