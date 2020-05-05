import styled from "styled-components";
import {
  SmallSubtitle,
  FatTitle,
  Labor,
  SmallNavigation,
} from "../../styled/typos";

export const TabletImage = styled.img`
  display: none;

  ${(props) => props.theme.medias.mediumPlus`
      display:block;
      width:100%;
`}
`;

export const Titles = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.even && props.withWrapper ? "flex-end" : "flex-start"};
  flex-direction: column;

  ${(props) => props.theme.medias.largePlus`
      margin-right: ${props.even ? "33%" : "0"};
      `};
`;

export const MemberSmallSubtitle = styled(SmallSubtitle)`
  width: ${(props) => (props.insideDescription ? "unset" : "100%")};
  padding: ${(props) => (props.withWrapper ? "0 0 0 20%" : "0")};
  display: flex;
  justify-content: flex-start;
  color: ${(props) =>
    props.even ? props.theme.colors.black : props.theme.colors.white};
  margin: ${(props) => (props.insideDescription ? " 50px 0 25px 0" : 0)};
  margin-left: ${(props) => (props.even && props.withWrapper ? "45%" : "0")};

  ${(props) => props.theme.medias.mediumPlus`
      padding: 0 30px;
      justify-content: flex-start;
      margin-left:0;
    `};
`;

export const Container = styled.div`
    padding: 200px 0;
    position: relative;
    background-color: ${(props) =>
      props.even ? props.theme.colors.white : props.theme.colors.black};
    flex-direction: ${(props) => (props.even ? "row" : "row-reverse")};

    ${(props) => props.theme.medias.largePlus`
    padding: 220px 0;
    `}
    
    ${(props) => props.theme.medias.large`
      padding: 120px 0 0 0 ;
    `}

    ${(props) => props.theme.medias.mediumPlus`
      padding-top: 45px;
    `}

  `;

export const Line = styled.div`
  margin-left: ${(props) => (props.even && props.withWrapper ? "70%" : "25%")};
  display: flex;
  border: 0.5px solid
    ${(props) =>
      props.even ? props.theme.colors.black : props.theme.colors.white};

  width: 1px;
  height: 115px;
  position: relative;
  margin-bottom: 20px;

  ${(props) => props.theme.medias.mediumPlus`
      display:none;
    `}
`;

export const MemberLabor = styled(Labor)`
  font-size: 14px;
  color: ${(props) =>
    props.even ? props.theme.colors.black : props.theme.colors.white};

  ${(props) => props.theme.medias.mediumPlus`
      padding: 0 30px;
    `}
`;

export const MemberFatTitle = styled(FatTitle)`
  width: 100%;
  padding: 0 0 0 20%;
  margin-top: 10px;
  justify-content: flex-start;
  margin-left: ${(props) => (props.even && props.withWrapper ? "45%" : "0")};
  display: flex;
  color: ${(props) =>
    props.even ? props.theme.colors.black : props.theme.colors.white};

  ${(props) => props.theme.medias.mediumPlus`
    
     white-space:normal;
      padding:0 30px;
      justify-content: flex-start;
      margin-left:0;
      };
    `}
`;

export const MemberHr = styled.hr`
  width: 100%;
  border: 0.5px solid
    ${(props) =>
      props.even ? props.theme.colors.black : props.theme.colors.white};
  margin: 50px 0 25px 10px;
  ${(props) => props.theme.medias.mediumPlus`
      margin-right: 30px;
    `}
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: ${(props) => (props.even ? "row-reverse" : "row")};
  height: 100%;

  ${(props) => props.theme.medias.mediumPlus`
     flex-direction:column;
    `}
`;

export const Description = styled.div`
  padding: ${(props) => (props.even ? "0 0 60px 13%" : "0 13% 60px 0")};
  width: 100%;
  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid
      ${(props) =>
        props.even ? props.theme.colors.black : props.theme.colors.white};
  }

  ${(props) => props.theme.medias.mediumPlus`
      margin-top:25px;
      padding:0 0 60px 0;
    `}
`;

export const Socials = styled.div`
  width: 40%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.theme.medias.mediumPlus`
      top:0;
      flex-direction: row;
      justify-content: flex-start;
      width: 100%;

    `}
`;

export const Social = styled(SmallNavigation)`
  border: 1px solid
    ${(props) =>
      props.even ? props.theme.colors.black : props.theme.colors.white};
  border-radius: 100%;
  margin-bottom: 0 auto 45px auto;
  color: ${(props) =>
    props.even ? props.theme.colors.black : props.theme.colors.white};
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
    border: 1px solid ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
  ${(props) => props.theme.medias.mediumPlus`
      margin: 30px 30px 30px 0 ;
    `}
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: -330px;

  ${(props) => props.theme.medias.mediumPlus`
      display:none;
    `}
`;

export const Img = styled.div`
    background-image: url("${(props) => props.content}");
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


    ${(props) => props.theme.medias.largePlus`
     height:1000px
    `}


    ${(props) => props.theme.medias.mediumPlus`
      position:relative;
      height:100%;
    `}
  `;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ReverseColumn = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  ${(props) => props.theme.medias.mediumPlus`
      flex-direction: column-reverse;
      width:100%;
      padding: 0 30px;
    `}
`;
