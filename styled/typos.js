import styled from "styled-components";

export const BigTitle = styled.h1`
  font-family: "garnett_bold";
  font-style: normal;
  font-weight: bold;
  margin: 0;
  font-size: 80px;
  line-height: 95px;
  color: ${(props) => props.theme.colors.white};
  transition: all 500ms;
  ${(props) => props.theme.medias.medium`
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
  color: ${(props) =>
    props.isBlack ? props.theme.colors.black : props.theme.colors.white};
  transition: all 500ms;
  margin: 0;
  ${(props) => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 30px;
    line-height: 40px;
   `}
`;

export const Navigation = styled.p`
  margin: 0;
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  list-style-type: none;
  cursor: ${(props) => (props.noLink ? "auto" : "pointer")};
  color: ${(props) =>
    props.isBlack ? props.theme.colors.black : props.theme.colors.white};

  ${(props) => props.theme.medias.medium`
    font-size: 12px;
    line-height: 17px;
   `}

  &.isActive {
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
  }
  a {
    color: inherit;
  }
`;

export const SmallNavigation = styled.p`
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  color: ${(props) => props.theme.colors.white};
`;

export const Subtitle = styled.h3`
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.black};
  transition: all 500ms;
  margin: 0;
  ${(props) => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 14px;
    line-height: 22px;
   `}
`;

export const MediumSubtitle = styled.h4`
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: 0;
  white-space: nowrap;
  color: ${(props) =>
    props.isBlack ? props.theme.colors.black : props.theme.colors.white};
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
  color: ${(props) => props.theme.colors.black};
`;

export const Quote = styled.h1`
  font-family: "garnett_bold";
  font-style: normal;
  font-weight: bold;
  font-size: 1.9em;
  line-height: 1.3em;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.medias.medium`
    font-weight: bold;
    font-size: 25px;
    line-height: 40px;
`}
  ${(props) => props.theme.medias.small`
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
`}
`;

export const QuoteDescription = styled.p`
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  justify-content: flex-end;
  display: flex;
  ${(props) => props.theme.medias.medium`
    justify-content:flex-start;
`}
`;

export const Chapeau = styled.h3`
  font-family: "garnett_medium";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 43px;
  margin: 0;
  color: ${(props) =>
    props.isBlack ? props.theme.colors.black : props.theme.colors.white};
  transition: all 500ms;
  ${(props) => props.theme.medias.medium`
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
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 25px;
  margin-top: 0;
  cursor: pointer;

  transition: all 500ms;

  ${(props) => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 22px;
    line-height: 34px;
    margin-bottom: 30px;
   `}
  &.isActive {
    transition: all 500ms;
    position: relative;
    transform: translateX(10px);
    color: ${(props) => props.theme.colors.blue};
  }
`;

export const ArticleTitle = styled.h3`
  font-family: "garnett_bold";
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 71px;
  color: ${(props) => props.theme.colors.blue};

  ${(props) => props.theme.medias.medium`
    font-size: 30px;
    line-height: 42px;
   `}
`;

export const Labor = styled.p`
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  margin: 0;
  color: ${(props) =>
    props.isWhite ? props.theme.colors.white : props.theme.colors.black};
  transition: all 500ms;
`;

export const FatLabor = styled.p`
  font-family: "garnett_medium";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  color: ${(props) => props.theme.colors.white};
`;

export const ArticleInterTitle = styled.h4`
  font-family: "garnett_medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
  color: ${(props) => props.theme.colors.blue};
`;

export const ManifestLabor = styled.p`
  margin: 0;
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  color: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.medias.medium`
    font-size: 18px;
    line-height: 25px;
   `}

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
    cursor: pointer;
  }
`;

export const PopUpTitle = styled.p`
  font-family: "garnett_medium";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  margin: 0%;
  color: ${(props) => props.theme.colors.white};
`;

export const ContactTitle = styled.h1`
  font-family: "garnett_medium";
  font-style: normal;
  font-weight: 500;
  font-size: 2em;
  line-height: 1.3em;
  margin: 0%;
  color: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.medias.medium`
    font-size: 30px;
    line-height: 46px;
   `}
`;
export const ContactBtn = styled.p`
  font-family: "garnett_medium";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  margin: 0%;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 0.1em;

  ${(props) => props.theme.medias.medium`
    font-size: 10px;
    line-height: 15px;
   
   `}
`;

export const LinkTitle = styled.p`
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 19px;
  margin: 0%;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
  letter-spacing: 0.1em;
`;

export const LinkItem = styled.p`
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 19px;
  margin: 0%;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 0.1em;

  a {
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
  }
`;

export const Filter = styled.p`
  font-family: "garnett_regular";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  color: ${(props) => props.theme.colors.black};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  &.isActive {
    border-bottom: 1px solid ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.blue};
  }
`;

export const ArticleTitleHeader = styled.p`
  margin: 0;
  font-family: "garnett_medium";
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: ${(props) => props.theme.colors.black};

  ${(props) => props.theme.medias.medium`
    font-size: 14px;
    line-height: 22px;
    padding-left:30px;
   `}
`;
