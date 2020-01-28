import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { Wrapper, WrapperMediumPlus } from "../styled/space";
import { ScreenSizes } from "../config/theme/medias";
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
  const socialsRef = useRef(null);
  const commitmentRef = useRef(null);
  const descriptionContent = useRef(null);

  useEffect(() => {
    const fixImageHeight = () => {
      const containerHeight =
        containerRef.current && containerRef.current.offsetHeight;
      const image = imageRef.current;

      if (
        image &&
        window.innerWidth > ScreenSizes.MEDIUMPLUS &&
        image &&
        window.innerWidth < ScreenSizes.LARGEPLUS
      ) {
        image.style.height = containerHeight / 1.37 + "px";
      } else {
        if (imageRef.current !== null) {
          image.style.height = "1000px";
        }
      }
    };

    if (typeof window !== undefined) {
      fixImageHeight();
      window.addEventListener("resize", () => fixImageHeight());
      return () => window.removeEventListener("resize", () => fixImageHeight());
    }
  });

  useEffect(() => {
    const fixSocialPosition = () => {
      if (
        window.innerWidth > ScreenSizes.MEDIUMPLUS &&
        descriptionContent.current &&
        commitmentRef.current &&
        socialsRef.current
      ) {
        socialsRef.current.style.top =
          commitmentRef.current.getBoundingClientRect().top -
          descriptionContent.current.getBoundingClientRect().top +
          "px";
      } else {
        if (descriptionContent.current !== null) {
          socialsRef.current.style.top = "0px";
        }
      }
    };
    if (typeof window !== undefined) {
      fixSocialPosition();
      window.addEventListener("resize", () => fixSocialPosition());
      return () =>
        window.removeEventListener("resize", () => fixSocialPosition());
    }
  });

  const TabletImage = styled.img`
    display: none;

    ${props => props.theme.medias.mediumPlus`
      display:block;
      width:100%;
`}
  `;

  const Titles = styled.div`
    display: flex;
    justify-content: ${props.even && (props => props.withWrapper)
      ? "flex-end"
      : "flex-start"};
    flex-direction: column;

    ${props => props.theme.medias.largePlus`
      margin-right: ${props.even ? "33%" : "0"};
      `};
  `;

  const MemberSmallSubtitle = styled(SmallSubtitle)`
    width: ${props => (props.insideDescription ? "unset" : "100%")};
    padding: ${props => (props.withWrapper ? "0 0 0 20%" : "0")};
    display: flex;
    justify-content: flex-start;
    color: ${props.even
      ? props => props.theme.colors.black
      : props => props.theme.colors.white};
    margin: ${props => (props.insideDescription ? " 50px 0 25px 0" : 0)};
    margin-left: ${props.even && (props => props.withWrapper) ? "45%" : "0"};

    ${props => props.theme.medias.large`

    `};

    ${props => props.theme.medias.mediumPlus`
      padding: 0 30px;
      justify-content: flex-start;
      margin-left:0;
    `};
  `;

  const Container = styled.div`
    padding: 300px 0;
    position: relative;
    background-color: ${
      props.even
        ? props => props.theme.colors.white
        : props => props.theme.colors.black
    };
    flex-direction: ${props.even ? "row" : "row-reverse"};

    ${props => props.theme.medias.largePlus`
    padding: 220px 0;
    `}
    
    ${props => props.theme.medias.large`
      padding: 120px 0 0 0 ;
    `}

    ${props => props.theme.medias.mediumPlus`
      padding-top: 45px;
    `}

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

    ${props => props.theme.medias.mediumPlus`
      display:none;
    `}
  `;

  const MemberLabor = styled(Labor)`
    font-size: 14px;
    color: ${props.even
      ? props => props.theme.colors.black
      : props => props.theme.colors.white};

    ${props => props.theme.medias.mediumPlus`
      padding: 0 30px;
    `}
  `;

  const MemberFatTitle = styled(FatTitle)`
    width: 100%;
    padding: 0 0 0 20%;
    margin-top: 10px;
    justify-content: flex-start;
    margin-left: ${props.even && (props => props.withWrapper) ? "45%" : "0"};

    display: flex;
    color: ${props.even
      ? props => props.theme.colors.black
      : props => props.theme.colors.white};

    ${props => props.theme.medias.mediumPlus`
    
     white-space:normal;
      padding:0 30px;
      justify-content: flex-start;
      margin-left:0;
      };
    `}
  `;

  const MemberHr = styled.hr`
    width: 100%;
    border: 0.5px solid
      ${props.even
        ? props => props.theme.colors.black
        : props => props.theme.colors.white};
    margin: 50px 0 25px 10px;
    ${props => props.theme.medias.mediumPlus`
      margin-right: 30px;
    `}
  `;
  const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: ${props.even ? "row-reverse" : "row"};
    height: 100%;

    ${props => props.theme.medias.mediumPlus`
     flex-direction:column;
    `}
  `;

  const Description = styled.div`
    padding: ${props.even ? "0 0 60px 13%" : "0 13% 60px 0"};
    width: 100%;
    a {
      color: inherit;
      text-decoration: none;
      border-bottom: 1px solid
        ${props.even
          ? props => props.theme.colors.black
          : props => props.theme.colors.white};
    }

    ${props => props.theme.medias.mediumPlus`
      margin-top:25px;
      padding:0 0 60px 0;
    `}
  `;

  const Socials = styled.div`
    width: 40%;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${props => props.theme.medias.mediumPlus`
      top:0;
      flex-direction: row;
      justify-content: flex-start;
      width: 100%;

    `}
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
    ${props => props.theme.medias.mediumPlus`
      margin: 30px 30px 30px 0 ;
    `}
  `;

  const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: -330px;

    ${props => props.theme.medias.mediumPlus`
      display:none;
    `}
  `;

  const Img = styled.div`
    background-image: url("${dataMember.img}");
    background-size: cover;

    background-repeat:no-repeat;
    width:100%;
    height:120%;
    position: absolute;
    z-index: 9;
    top:0;
    left: 0;
    right: 0;
    background-position: top;


    ${props => props.theme.medias.largePlus`
     height:1000px
    `}


    ${props => props.theme.medias.mediumPlus`
      position:relative;
      height:100%;
    `}
  `;

  const Flex = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const ReverseColumn = styled.div`
    display: flex;
    justify-content: space-around;
    width: 40%;
    ${props => props.theme.medias.mediumPlus`
      flex-direction: column-reverse;
      width:100%;
      padding: 0 30px;
    `}
  `;
  return (
    <Container ref={containerRef}>
      <Titles even={props.even}>
        <MemberSmallSubtitle withWrapper>
          {dataMember.subTitle}
        </MemberSmallSubtitle>
        <MemberFatTitle even={props.even}>{dataMember.name}</MemberFatTitle>
      </Titles>

      <Line />

      <Content ref={descriptionContent}>
        {/* Hide on mobile  */}
        <ImgContainer>
          <Img ref={imageRef} alt={dataMember.name} />
        </ImgContainer>

        <ReverseColumn>
          <TabletImage src={dataMember.img} alt="" />

          <Socials ref={socialsRef}>
            {dataMember.socials.linkedin && (
              <a
                href={dataMember.socials.linkedin}
                target="_blank"
                rel="noopener"
              >
                <Social>Lk</Social>
              </a>
            )}

            {dataMember.socials.twitter && (
              <a
                href={dataMember.socials.twitter}
                target="_blank"
                rel="noopener"
              >
                <Social>Tw</Social>
              </a>
            )}
          </Socials>
        </ReverseColumn>

        <Description>
          <MemberLabor
            dangerouslySetInnerHTML={{ __html: dataMember.description }}
          />
          <Flex ref={commitmentRef}>
            <MemberSmallSubtitle
              insideDescription
              style={props.even ? { marginLeft: "0" } : {}}
            >
              {dataMember.engagements.subTitle}
            </MemberSmallSubtitle>
            <MemberHr />
          </Flex>

          <MemberLabor
            dangerouslySetInnerHTML={{
              __html: dataMember.engagements.description
            }}
          />
        </Description>
      </Content>
    </Container>
  );
};

export default member;
