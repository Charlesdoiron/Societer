import styled from "styled-components";

import {
  Navigation,
  SmallSubtitle,
  ArticleTitleHeader
} from "../../styled/typos";

export const Media = styled.img`
  ${props => props.theme.medias.medium`
    width:60px;
   `}
`;

export const Container = styled.div`
  border-top: 1px solid ${props => props.theme.colors.black};
  border-bottom: none !important;
  padding: 20px 0;
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  overflow: hidden;
  z-index: 300;
`;

export const MobileContainer = styled.div`
  border-top: 1px solid ${props => props.theme.colors.black};
  border-bottom: none !important;
  padding: 20px 0;
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  overflow: hidden;
  z-index: 300;
  flex-direction: column;
`;
export const Line = styled.div`
  background-color: ${props => props.theme.colors.blue};
  width: ${props => props.timeline}%;
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 300ms;
`;

export const Published = styled(Navigation)`
  color: ${props => props.theme.colors.black};
  opacity: 0.5;
  margin: 0;
  margin-left: 40px;

  ${props => props.theme.medias.medium`
    margin-left:0px;
   `}
`;

export const Author = styled.div`
  ${props => props.theme.medias.medium`
    display:none;
   `}
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => (props.isRow ? "row" : "column")};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 73.5%;
  h4 {
    margin-right: 15px;
  }
  ${props => props.theme.medias.medium`
    width:100%;
    h4 {
      margin-right:0;
   `}
`;
export const Category = styled(SmallSubtitle)`
  color: ${props => props.theme.colors.blue};
`;

export const Back = styled(SmallSubtitle)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 17%;

  ${props => props.theme.medias.medium`
    width:unset;
   `}

  img {
    margin-right: 10px;
    transition: all 500ms;
    right: ${props => (props.isCross ? "3px" : "0")};
    position: relative;
  }
  &:hover {
    img {
      position: relative;
      right: ${props => (props.isCross ? "0" : "5px")};
      color: blue;
      transition: all 1000ms;
    }
  }
`;

export const ArticleTitle = styled(ArticleTitleHeader)`
  margin-top: 10px;
  padding: 0 30px;
`;
