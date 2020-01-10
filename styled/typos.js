import styled from "styled-components";

export const BigTitle = styled.h1`
  font-family: "garnett_bold";
  font-style: normal;
  font-weight: bold;
  margin: 0;
  font-size: 80px;
  line-height: 95px;
  color: ${props => props.theme.colors.white};
  transition: all 500ms;
  ${props => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 40px;
    line-height: 50px;
   `}
`;

export const FatTitle = styled.h1`
  font-family: "garnett_regular";
  font-style: normal;
  font-size: 60px;
  line-height: 85px;
  color: ${props => props.theme.colors.white};
  transition: all 500ms;
  margin: 0;
  ${props => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 30px;
    line-height: 40px;
   `}
`;

export const Navigation = styled.p`
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  list-style-type: none;
  margin-right: 60px;
  cursor: pointer;
  color: ${props => props.theme.colors.white};

  &.isActive {
    border-bottom: 1px solid ${props => props.theme.colors.white};
  }
`;

export const SmallNavigation = styled.p`
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  color: ${props => props.theme.colors.white};
`;

export const Subtitle = styled.h3`
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  transition: all 500ms;
  margin: 0;
  ${props => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 14px;
    line-height: 22px;
   `}
`;

export const SmallSubtitle = styled.h4`
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
  color: ${props => props.theme.colors.black};
`;

export const Chapeau = styled.h3`
  font-family: "garnett_medium";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 43px;
  margin: 0;
  color: ${props => props.theme.colors.white};
  transition: all 500ms;
  ${props => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 18px;
    line-height: 25px;
   `}
`;

export const ExpertiseTitle = styled.h3`
  font-family: "garnett_medium";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 31px;
  color: ${props => props.theme.colors.black};
  margin-bottom: 25px;
  margin-top: 0;
  cursor: pointer;

  transition: all 500ms;

  ${props => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 22px;
    line-height: 34px;
    margin-bottom: 30px;
   `}
  &.isActive {
    transition: all 500ms;
    position: relative;
    transform: translateX(10px);
    color: ${props => props.theme.colors.blue};
  }
`;

export const ArticleTitle = styled.h3`
  font-family: "garnett_bold";
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 71px;
  color: ${props => props.theme.colors.blue};
`;

export const Labor = styled.p`
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  margin: 0;
  color: ${props => props.theme.colors.black};
  transition: all 500ms;
`;

export const FatLabor = styled.p`
  font-family: "garnett_medium";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  color: ${props => props.theme.colors.white};
`;

export const ArticleInterTitle = styled.h4`
  font-family: "garnett_medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: ${props => props.theme.colors.blue};
`;
