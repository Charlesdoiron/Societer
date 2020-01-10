import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import {
  SmallSubtitle,
  FatTitle,
  Labor,
  SmallNavigation
} from "../styled/typos";
const member = props => {
  const { dataMember } = props;
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const changeImgHeight = () => {
      const containerHeight = containerRef.current.offsetHeight;
      const image = imageRef.current;
      image.style.height = containerHeight / 1.4 + "px";
    };
    changeImgHeight();
    if (typeof window !== undefined) {
      window.addEventListener("resize", () => changeImgHeight(), {
        passive: true
      });
      return () =>
        window.removeEventListener("resize", () => changeImgHeight());
    }
  });

  const Titles = styled.div`
    display: flex;
    justify-content: ${props.even && (props => props.withWrapper)
      ? "flex-end"
      : "flex-start"};
    flex-direction: column;
  `;

  const MemberSmallSubtitle = styled(SmallSubtitle)`
    padding: ${props => (props.withWrapper ? "0 20%" : "0")};
    display: flex;
    justify-content: ${props.even && (props => props.withWrapper)
      ? "flex-end"
      : "flex-start"};
    color: ${props.even
      ? props => props.theme.colors.black
      : props => props.theme.colors.white};
    margin: ${props => (props.insideDescription ? " 50px 0 25px 0" : 0)};
  `;
  const Container = styled.div`
    padding-top: 125px;
    position: relative;
    background-color: ${props.even
      ? props => props.theme.colors.white
      : props => props.theme.colors.black};
    flex-direction: ${props.even ? "row" : "row-reverse"};
  `;
  const Line = styled.div`
    margin-left: ${props.even && (props => props.withWrapper) ? "70%" : "25%"};
    display: flex;
    border: 0.5px solid
      ${props.even
        ? props => props.theme.colors.black
        : props => props.theme.colors.white};

    width: 1px;
    height: 115px;
    position: relative;

    margin-bottom: 20px;
  `;

  const MemberLabor = styled(Labor)`
    font-size: 14px;
    color: ${props.even
      ? props => props.theme.colors.black
      : props => props.theme.colors.white};
  `;

  const MemberFatTitle = styled(FatTitle)`
    padding: 0 20%;
    margin-top: 10px;
    justify-content: ${props.even && (props => props.withWrapper)
      ? "flex-end"
      : "flex-start"};
    display: flex;
    color: ${props.even
      ? props => props.theme.colors.black
      : props => props.theme.colors.white};
  `;

  const MemberHr = styled.hr`
    width: 100%;
    border: 0.5px solid
      ${props.even
        ? props => props.theme.colors.black
        : props => props.theme.colors.white};
    margin: 50px 0 25px 10px;
  `;
  const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: ${props.even ? "row-reverse" : "row"};
    height: 100%;
  `;

  const Description = styled.div`
    padding: ${props.even ? "0 0 60px 10%" : "0 10% 60px 0"};
    width: 100%;
  `;
  const Socials = styled.div`
    width: 40%;
    top: 30vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Social = styled(SmallNavigation)`
    border: 1px solid
      ${props.even
        ? props => props.theme.colors.black
        : props => props.theme.colors.white};
    border-radius: 100%;
    margin-bottom: 0 auto 45px auto;
    color: ${props.even
      ? props => props.theme.colors.black
      : props => props.theme.colors.white};
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
      border: 1px solid ${props => props.theme.colors.blue};
      color: ${props => props.theme.colors.blue};
    }
  `;

  const ImgContainer = styled.div`
    position: relative;
    width: 90%;
    height: 100%;
    margin-bottom: -330px;
  `;

  const Img = styled.div`
    background-image: url("${dataMember.img}");
    
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
    width:100%;
    height:120%;
    position: absolute;
    z-index: 9;
    top:0;
 
  `;
  const Flex = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <Container ref={containerRef}>
      <Titles>
        <MemberSmallSubtitle withWrapper>
          {dataMember.subTitle}
        </MemberSmallSubtitle>
        <MemberFatTitle>{dataMember.name}</MemberFatTitle>
      </Titles>

      <Line />

      <Content>
        <ImgContainer>
          <Img ref={imageRef} alt={dataMember.name} />
        </ImgContainer>

        <Socials>
          <Social>{dataMember.socials.twitter && "Tw"}</Social>
          <Social>{dataMember.socials.linkedin && "Li"}</Social>
        </Socials>
        <Description>
          <MemberLabor>{dataMember.description}</MemberLabor>
          <Flex>
            <MemberSmallSubtitle insideDescription>
              {dataMember.engagements.subTitle}
            </MemberSmallSubtitle>
            <MemberHr />
          </Flex>

          <MemberLabor>{dataMember.engagements.description}</MemberLabor>
        </Description>
      </Content>
    </Container>
  );
};

export default member;
