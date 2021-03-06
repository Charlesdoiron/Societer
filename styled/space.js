import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 10%;
  margin: 0 auto;
  width: 100%;
  left: 0;
  right: 0;
  background-color: ${props =>
    props.isWhite ? props.theme.colors.white : props.theme.colors.black};
  ${props => props.theme.medias.medium`
    padding:0 30px;
  `};
`;

export const WrapperMediumPlus = styled.div`
  padding: 0 10%;
  margin: 0 auto;
  width: 100%;
  left: 0;
  right: 0;

  ${props => props.theme.medias.mediumPlus`
    padding:0 30px;
  `}
`;

export const FatWrapper = styled.div`
  padding: ${props => (props.noWrapperDesktop ? "0" : "0 20%")};
  margin: 0 auto;
  width: 100%;
  left: 0;
  right: 0;

  ${props => props.theme.medias.medium`
    padding:${props => (props.noWrapperOnMobile ? "0" : "0 30px")};
  `}
`;

export const ShowOnMediumPlus = styled.div`
  display: flex;
  ${props => props.theme.medias.mediumPlus`
  display:none;
`}
`;
