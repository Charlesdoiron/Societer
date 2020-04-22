import React from "react";
import styled from "styled-components";
import { Chapeau, SmallSubtitle } from "../styled/typos";
import { Wrapper } from "../styled/space";
import withTranslateUp from "../components/animateHoc/translateUp";

const strategicComite = (props) => {
  return (
    <CustomWrapper>
      <Container>
        <Flex>
          <StrategicSubtitle>{props.subtitle}</StrategicSubtitle>
          <Hr />
        </Flex>

        <div>
          <React.Fragment>
            <BlackChapeau
              dangerouslySetInnerHTML={{ __html: props.strategicComitee }}
            ></BlackChapeau>
          </React.Fragment>
        </div>
      </Container>
    </CustomWrapper>
  );
};

export default strategicComite;

const StrategicSubtitle = styled(SmallSubtitle)`
  white-space: nowrap;
  margin-right: 20px;
  margin-bottom: 40px;
  ${(props) => props.theme.medias.mediumPlus`
      color: ${(props) => props.theme.colors.white};
    `}
`;

const Hr = styled.hr`
  width: 100%;
  border: 0.5px solid ${(props) => props.theme.colors.black};
  height: 1px;
  margin-bottom: 60px;
  ${(props) => props.theme.medias.mediumPlus`
      border: 0.5px solid ${(props) => props.theme.colors.white};
    `}
`;

const CustomWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.medias.mediumPlus`
     background-color: ${(props) => props.theme.colors.black};
    `}
`;

const Container = styled.div`
  padding-top: 500px;
  background-color: ${(props) => props.theme.colors.white};
  padding-bottom: 120px;

  ${(props) => props.theme.medias.largePlus`
     padding-top: 300px;
    `}

  ${(props) => props.theme.medias.mediumPlus`
      padding:50px 0 100px 0;
       background-color: ${(props) => props.theme.colors.black};
    `}
`;

const BlackChapeau = styled(withTranslateUp(Chapeau))`
  color: ${(props) => props.theme.colors.black};
  display: inline;
  ${(props) => props.theme.medias.mediumPlus`
       color: ${(props) => props.theme.colors.white};
    `}
`;

const BlueChapeau = styled(Chapeau)`
  color: ${(props) => props.theme.colors.blue};
  display: inline;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
`;
