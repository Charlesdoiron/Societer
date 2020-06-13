import styled from "styled-components";

import { Navigation } from "../../styled/typos";

const menuColor = (props) =>
  props.isBlack
    ? (props) => props.theme.colors.black
    : (props) => props.theme.colors.white;

export const MenuContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0;
  padding-left: 8%;
  z-index: 30;
  transition: all 200ms;
  margin-bottom: -100px;
  background-color: ${(props) => (!props.isTop ? "transparent" : "#101010")};

  ${(props) => props.theme.medias.large`
    padding-left: 10%;
  `}

  ${(props) => props.theme.medias.mediumLarge`
    padding: 25px 30px ;
    margin-bottom: ${(props) =>
      props.currentPage === "/[lang]" ? "-80px" : "0"};
    background-color: ${(props) =>
      props.currentPage === "/[lang]"
        ? "transparent"
        : props.theme.colors.black};
    
  `}
`;

export const CustomNavigation = styled(Navigation)`
  margin-right: 60px;
  white-space: nowrap;
  transition: all 800ms;
  color: ${(props) =>
    !props.isTop && props.currentPage === "/[lang]/article/[id]"
      ? props.theme.colors.black
      : menuColor};
  border-bottom: 1px solid transparent;
  font-weight: normal;
  &:hover {
    transition: all 800ms;
    font-weight: bold;
  }
  &.isActive {
    border-bottom: 1px solid ${menuColor};
    transition: all 1500ms;
  }
`;

export const Burger = styled.img`
  width: 24px;
  position: relative;
  cursor: pointer;
  display: none;
  ${(props) => props.theme.medias.mediumLarge`
    display:block;
  `}
`;
export const Logo = styled.img`
  height: 40px;
  cursor: pointer;

  ${(props) => props.theme.medias.mediumLarge`
    transition: all 500ms;
    height: 30px;
   `}
`;
export const CurrentPage = styled(Navigation)`
  top: 8px;
  position: relative;
  font-family: "garnett_medium";
  white-space: nowrap;
  color: ${(props) =>
    !props.isTop && props.currentPage === "/[lang]/article/[id]"
      ? props.theme.colors.black
      : menuColor} !important;
  ${(props) => props.theme.medias.mediumLarge`

    color ${menuColor} !important;
   `}
  ${(props) => props.theme.medias.mediumLarge`
    top:14px;

   `}
`;
export const MobileNavigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* align-items: center; */
  transition: all 500ms;
  z-index: 10;

  ${(props) =>
    props.theme.medias.mediumLarge`
    transition: all 500ms;
   `}
`;

export const MinimalLogo = styled.img`
  height: 27px;
  width: auto;
  top: 4px;

  position: relative;
  cursor: pointer;

  ${(props) => props.theme.medias.mediumLarge`
    transition: all 500ms;
    height: 30px;
    top:6px;
   `}
`;

export const Flex = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.white};
  p {
    margin-left: 15px;
  }
`;

export const Items = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
  mix-blend-mode: difference;
  ${(props) => props.theme.medias.mediumLarge`
    display: none;
   `}
`;
