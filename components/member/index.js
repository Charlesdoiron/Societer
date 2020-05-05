import React, { useRef, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ScreenSizes } from "../../config/theme/medias";
import { Spring, config } from "react-spring/renderprops.cjs";
import VisibilitySensor from "react-visibility-sensor";
import {
  Container,
  Titles,
  MemberSmallSubtitle,
  MemberLabor,
  MemberFatTitle,
  MemberHr,
  Line,
  Content,
  ImgContainer,
  Img,
  ReverseColumn,
  TabletImage,
  Socials,
  Social,
  Description,
  Flex,
} from "./styled";
const member = (props) => {
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

  return (
    <Container ref={containerRef} even={props.even}>
      <Titles even={props.even} withWrapper>
        <VisibilitySensor>
          {({ isVisible }) => (
            <Spring
              config={{ delay: 50 }}
              from={{
                transform: !isVisible ? "translateY(-30px)" : "translateY(0px)",
                opacity: !isVisible ? 0 : 1,
              }}
              to={{
                transform: isVisible ? "translateY(0px)" : "translateY(-30px)",
                opacity: isVisible ? 1 : 0,
              }}
            >
              {({ transform, opacity }) => (
                <div style={{ transform, opacity }}>
                  <MemberSmallSubtitle
                    style={{ marginBottom: "0px" }}
                    withWrapper
                    insideDescription
                    even={props.even}
                  >
                    {dataMember.subtitle}
                  </MemberSmallSubtitle>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              config={(config.stiff, { delay: 200 })}
              from={{
                transform: !isVisible ? "translateX(-40px)" : "translateX(0px)",
                opacity: !isVisible ? 0 : 1,
              }}
              to={{
                transform: isVisible ? "translateX(0px)" : "translateX(-40px)",
                opacity: isVisible ? 1 : 0,
              }}
            >
              {({ transform, opacity }) => (
                <div style={{ transform, opacity }}>
                  <MemberFatTitle withWrapper even={props.even}>
                    {dataMember.name}
                  </MemberFatTitle>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </Titles>

      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            config={{ delay: 200 }}
            from={{
              transform: !isVisible ? "translateY(0px)" : "translateY(10px)",
              opacity: !isVisible ? 0 : 1,
            }}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(10px)" : "translateY(0px)",
            }}
          >
            {({ opacity, transform }) => (
              <Line
                style={{ opacity, transform }}
                even={props.even}
                withWrapper
              />
            )}
          </Spring>
        )}
      </VisibilitySensor>

      <Content ref={descriptionContent} even={props.even}>
        {/* Hide on mobile  */}
        <ImgContainer even={props.even}>
          <Spring
            config={{ delay: 300 }}
            from={{
              backgroundColor: "#101010",
              height: "600px",
              zIndex: "10",
              width: "100%",
              position: "relative",
              opacity: 1,
              transform: "translateY(0px)",
            }}
            to={{
              transform: "translateY(930px)",
              opacity: 0,
            }}
          >
            {(props) => <div style={props}></div>}
          </Spring>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Spring
                config={{ delay: 300 }}
                from={{
                  transform: !isVisible
                    ? "translateY(0px)"
                    : "translateY(10px)",
                  opacity: !isVisible ? 0 : 1,
                }}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(10px)" : "translateY(0px)",
                }}
              >
                {({ opacity, transform }) => (
                  <Img
                    style={{ opacity, transform }}
                    even={props.even}
                    ref={imageRef}
                    alt={dataMember.name}
                    content={dataMember.img.fields.file.url}
                  />
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </ImgContainer>

        <ReverseColumn>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Spring
                config={{ duration: 1500 }}
                from={{
                  transform: !isVisible
                    ? "translateY(0px)"
                    : "translateY(10px)",
                  opacity: !isVisible ? 0 : 1,
                }}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(10px)" : "translateY(0px)",
                }}
              >
                {({ opacity, transform }) => (
                  <TabletImage
                    style={{ opacity, transform }}
                    src={dataMember.img.fields.file.url}
                    alt=""
                    even={props.even}
                  />
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Spring
                config={{ delay: 200 }}
                from={{
                  transform: !isVisible
                    ? "translateY(0px)"
                    : "translateY(10px)",
                  opacity: !isVisible ? 0 : 1,
                }}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(10px)" : "translateY(0px)",
                }}
              >
                {({ opacity, transform }) => (
                  <Socials
                    ref={socialsRef}
                    even={props.even}
                    style={{ opacity, transform }}
                  >
                    {dataMember.linkedin && (
                      <a
                        href={dataMember.linkedin}
                        target="_blank"
                        rel="noopener"
                      >
                        <Social even={props.even}>Lk</Social>
                      </a>
                    )}

                    {dataMember.twitter && (
                      <a
                        href={dataMember.twitter}
                        target="_blank"
                        rel="noopener"
                      >
                        <Social even={props.even}>Tw</Social>
                      </a>
                    )}
                  </Socials>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </ReverseColumn>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              config={(config.slow, { delay: 100 })}
              from={{
                transform: !isVisible ? "translateY(0px)" : "translateY(10px)",
                opacity: !isVisible ? 0 : 1,
              }}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(10px)" : "translateY(0px)",
              }}
            >
              {({ opacity, transform }) => (
                <Description even={props.even} style={{ opacity, transform }}>
                  <MemberLabor
                    even={props.even}
                    dangerouslySetInnerHTML={{
                      __html: dataMember.description,
                    }}
                  />
                  <Flex ref={commitmentRef}>
                    <MemberSmallSubtitle
                      even={props.even}
                      insideDescription
                      style={props.even ? { marginLeft: "0" } : {}}
                    >
                      Engagements
                    </MemberSmallSubtitle>

                    <MemberHr even={props.even} />
                  </Flex>

                  <MemberLabor even={props.even}>
                    <ReactMarkdown
                      source={dataMember.engagements}
                      renderers={{
                        link: (props) => (
                          <a href={props.href} target="_blank">
                            {props.children}
                          </a>
                        ),
                      }}
                      escapeHtml={false}
                    />
                  </MemberLabor>
                </Description>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </Content>
    </Container>
  );
};

export default member;
