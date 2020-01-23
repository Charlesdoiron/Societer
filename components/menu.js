import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
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

  const MenuDesktop = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-between;
    width: 100%;
    padding-top: 35px;
    padding-left: 10%;
    z-index: 10;
    background-color: transparent;
    transition: all 200ms;

    &:hover {
      transition: all 500ms;
      background-color: ${currentPage !== "/"
        ? props => props.theme.colors.black
        : "unset"};
      padding-bottom: 30px;
      margin-bottom: -30px;
    }

    ${props => props.theme.medias.medium`
      background-color: ${
        currentPage !== "/" ? props => props.theme.colors.black : "unset"
      };
    padding: 25px 30px ;
    
    &:hover{
      padding-bottom: 25px;
      margin-bottom: 0;
      background-color: ${
        currentPage !== "/" ? props => props.theme.colors.black : "unset"
      };
    } 

  `}
  `;
  return (
    <MenuDesktop className="menu">
      <MobileNavigation>
        <Link href="/">
          {currentPage === "/" ? (
            <Logo src="pictos/logo.svg" alt="Societer Logo" />
          ) : (
            <Flex>
              <MinimalLogo src="pictos/minimal_logo.svg" alt="Societer Logo" />
              <CurrentPage>{currentTitle}</CurrentPage>
            </Flex>
          )}
        </Link>
        <Burger
          src="pictos/burger.svg"
          onClick={() => setOpen(!isOpen)}
          alt="burger menu"
        />
      </MobileNavigation>
      <MenuMobile
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        content={menu}
      />

      <Items>
        {menu.map((item, i) => (
          <Link
            key={i}
            href={{ pathname: `${item.path}`, query: { title: item.item } }}
            as={`${item.path}`}
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

const MobileNavigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  transition: all 500ms;
  ${props =>
    props.theme.medias.medium`
    transition: all 500ms;s
   `}
`;

const CurrentPage = styled(Navigation)`
  top: 10px;
  position: relative;
  font-family: "garnett_medium";
  white-space: nowrap;

  ${props => props.theme.medias.medium`
    top:7.5px;
   `}
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

const MinimalLogo = styled.img`
  height: 40px;
  width: auto;

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
