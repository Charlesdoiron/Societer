import React, { useState } from "react";
import styled from "styled-components";
import { Collapse } from "react-collapse";
import { ExpertiseTitle, Labor, SmallSubtitle } from "../styled/typos";
import { FatWrapper } from "../styled/space";

const Accordion = props => {
  const [expertiseActive, setExpertiseActive] = useState("engagement-societal");

  const handleExpertise = slug => {
    setExpertiseActive(slug);
  };
  return (
    <FatWrapper noWrapperOnMobile>
      <Container>
        <Titles>
          <FatWrapper noWrapperDesktop>
            <ExpertiseSubtitle>{props.subTitle}</ExpertiseSubtitle>
          </FatWrapper>

          {props.content.map(el => {
            return (
              <>
                <FatWrapper noWrapperDesktop>
                  <ExpertiseTitle
                    className={el.slug === expertiseActive && "isActive"}
                    onMouseEnter={() => handleExpertise(el.slug)}
                    onTouchStart={() => handleExpertise(el.slug)}
                    key={el.title}
                  >
                    {el.title}
                  </ExpertiseTitle>
                </FatWrapper>

                {el.slug === expertiseActive && (
                  <ShowOnMobile>
                    <Collapse isOpened={el.slug === expertiseActive}>
                      <CollapseContent className="no--wrapper">
                        <ExpertiseSubtitleCollapse>
                          {props.subTitleTwo}
                        </ExpertiseSubtitleCollapse>
                        <Labor>{el.description}</Labor>
                      </CollapseContent>
                    </Collapse>
                  </ShowOnMobile>
                )}
              </>
            );
          })}
        </Titles>

        <Content>
          <HideOnMobile>
            <ExpertiseSubtitle>{props.subTitleTwo}</ExpertiseSubtitle>
            {props.content.map(el => {
              if (el.slug === expertiseActive) {
                return <Labor>{el.description}</Labor>;
              }
            })}
          </HideOnMobile>
        </Content>
      </Container>
    </FatWrapper>
  );
};
export default Accordion;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  ${props => props.theme.medias.medium`
    flex-direction: column;
  `}
`;

const ExpertiseSubtitle = styled(SmallSubtitle)`
  margin-bottom: 25px;
  ${props => props.theme.medias.medium`
    margin-bottom: 10px;
  `}
`;

const ExpertiseSubtitleCollapse = styled(ExpertiseSubtitle)`
  color: ${props => props.theme.colors.white};
`;

const ShowOnMobile = styled.div`
  display: none;
  ${props => props.theme.medias.medium`
  display:block;
`}
`;

const Titles = styled.div`
  width: 50%;

  ${props => props.theme.medias.medium`
    width: 100%;
  `}
`;

const Content = styled.div`
  width: 30%;
`;

const HideOnMobile = styled.div`
  display: block;
  ${props => props.theme.medias.medium`
  display:none;
`}
`;

const CollapseContent = styled.div`
  background-color: ${props => props.theme.colors.black};
  padding: 30px;
  margin: -8px 0 22px 0;
  p {
    color: ${props => props.theme.colors.white};
  }
`;
