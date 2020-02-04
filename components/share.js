import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { ArtcileTitleHeader, SmallNavigation } from "../styled/typos";
import { Wrapper } from "../styled/space";
import useMeasure from "../utils/useMeasure";
let socials = [
  { name: "Fb", url: "www.facebook.fr" },
  { name: "Tw", url: "www.facebook.fr" },
  { name: "Lk", url: "www.facebook.fr" }
];
const Share = props => {
  const [open, toggle] = useState(false);
  const [bind, { width }] = useMeasure();

  const animation = useSpring({ width: open ? width : 0 });

  return (
    <div {...bind}>
      <Container>
        <CustomWrapper>
          <Title>Partager cet article sur les réseaux sociaux</Title>
          {socials.map((social, i) => (
            <Social key={i}>{social.name}</Social>
          ))}
        </CustomWrapper>
      </Container>
    </div>
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

const Title = styled(ArtcileTitleHeader)`
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
`;
