import React, { useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import MenuMobile from "../components/menuMobile";

import { useRouter } from "next/router";
import { useMocks } from "../context/mock-context";

import { Navigation } from "../styled/typos";

const Menu = props => {
  const { menu } = useMocks();
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const currentPage = router.pathname;
  const currentTitle = router.query.title;

  return (
    <MenuDesktop className="menu">
      <MobileNavigation>
        <Link href="/">
          {currentPage === "/" ? (
            <Logo src="pictos/logo.svg" />
          ) : (
            <Flex>
              <MinimalLogo src="pictos/minimal_logo.svg" />
              <CurrentPage>{currentTitle}</CurrentPage>
            </Flex>
          )}
        </Link>
        <Burger src="pictos/burger.svg" onClick={() => setOpen(!isOpen)} />
      </MobileNavigation>
      <MenuMobile
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        content={menu}
      />
      <Items>
        {menu.map(item => (
          <Link
            href={{ pathname: `${item.path}`, query: { title: item.item } }}
            as={`${item.path}`}
            key={item.item}
          >
            <CustomNavigation
              className={currentPage === item.path && "isActive"}
            >
              {item.item}
            </CustomNavigation>
          </Link>
        ))}
      </Items>
    </MenuDesktop>
  );
};
export default Menu;

const Burger = styled.img`
  width: 24px;
  right: 30px;
  position: relative;
  cursor: pointer;
  display: none;
  ${props => props.theme.medias.medium`
    display:block;
  `}
`;
const Logo = styled.img`
  height: 40px;
  cursor: pointer;

  ${props => props.theme.medias.medium`
    transition: all 500ms;
    height: 30px;
   `}
`;

const CurrentPage = styled(Navigation)`
  top: 12px;
  position: relative;
  font-family: "garnett_medium";
`;
const CustomNavigation = styled(Navigation)`
  margin-right: 60px;
  white-space: nowrap;
`;
const Flex = styled.div`
  display: flex;
  color: ${props => props.theme.colors.white};
  p {
    margin-left: 15px;
  }
`;

const MobileNavigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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
  width: 100%;
  align-items: center;
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
