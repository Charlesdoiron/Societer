import React, { useRef } from "react";
import styled from "styled-components";
import Link from "next/link";

import { useRouter } from "next/router";
import { useMocks } from "../context/mock-context";

import { Navigation } from "../styled/typos";

const Menu = props => {
  const { menu } = useMocks();
  const router = useRouter();
  const currentPage = router.pathname;
  const currentTitle = router.query.title;

  return (
    <MenuDesktop className="menu">
      <Link href="/">
        {currentPage === "/" ? (
          <Logo src="pictos/logo.svg" />
        ) : (
          <Flex>
            <MinimalLogo src="pictos/minimal_logo.svg" />
            <Navigation>{currentTitle}</Navigation>
          </Flex>
        )}
      </Link>

      <Items>
        {menu.map(item => (
          <Link
            href={{ pathname: `${item.path}`, query: { title: item.item } }}
            key={item.item}
          >
            <Navigation className={currentPage === item.path && "isActive"}>
              {item.item}
            </Navigation>
          </Link>
        ))}
      </Items>
    </MenuDesktop>
  );
};
export default Menu;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;

  ${props => props.theme.medias.medium`
    transition: all 500ms;
    height: 30px;
   `}
`;

const Flex = styled.div`
  display: flex;
  color: ${props => props.theme.colors.white};
  p {
    margin-left: 15px;
  }
`;

const MinimalLogo = styled.img`
  height: 35px;
  width: auto;
  top: 5px;
  position: relative;
  cursor: pointer;

  ${props => props.theme.medias.medium`
    transition: all 500ms;
    height: 30px;
   `}
`;

const Items = styled.div`
  display: flex;
  ${props => props.theme.medias.medium`
    display: none;
   `}
`;
const MenuDesktop = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  padding-top: 35px;
  padding-left: 10%;
  z-index: 10;

  ${props => props.theme.medias.medium`
   padding-left: 30px;

  `}
`;
