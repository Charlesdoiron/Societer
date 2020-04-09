import styled from "styled-components";

import { Navigation } from "../../styled/typos";

const menuColor = (props) =>
  props.isBlack
    ? (props) => props.theme.colors.black
    : (props) => props.theme.colors.white;

export const MenuDesktop = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0;
  padding-left: 8%;
  z-index: 30;
  background-color: transparent;
  transition: all 200ms;
  margin-bottom: -107px;

  ${(props) => props.theme.medias.large`
      padding-left: 10%;
  `}

  &:hover {
    .animation-menu__bkg {
      transform: translateY(0px);
    }
  }
`;

export const CustomNavigation = styled(Navigation)`
  margin-right: 60px;
  white-space: nowrap;
  color: ${menuColor};

  &:hover {
    font-weight: bold;
  }
  &.isActive {
    border-bottom: 1px solid ${menuColor};
  }
`;

export const Burger = styled.img`
  width: 24px;
  position: relative;
  cursor: pointer;
  display: none;
  ${(props) => props.theme.medias.medium`
    display:block;
  `}
`;
export const Logo = styled.img`
  height: 40px;
  cursor: pointer;

  ${(props) => props.theme.medias.medium`
    transition: all 500ms;
    height: 30px;
   `}
`;
export const CurrentPage = styled(Navigation)`
  top: 8px;
  position: relative;
  font-family: "garnett_medium";
  white-space: nowrap;
  color: ${menuColor};
  ${(props) => props.theme.medias.medium`
    top:14px;
   `}
`;
export const MobileNavigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  transition: all 500ms;
  z-index: 10;
  mix-blend-mode: difference;

  ${(props) =>
    props.theme.medias.medium`
    transition: all 500ms;
   `}
`;

export const MinimalLogo = styled.img`
  height: 27px;
  width: auto;
  top: 4px;

  position: relative;
  cursor: pointer;

  ${(props) => props.theme.medias.medium`
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
  ${(props) => props.theme.medias.medium`
    display: none;
   `}
`;
