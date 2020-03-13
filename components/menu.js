import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useStateValue } from "../context/state";
import MenuMobile from "./menuMobile";
import { getWindowWidth } from "../utils/windowWidth";
import { useRouter } from "next/router";
import { useMocks } from "../context/mock-context";
import { removeQuery } from "../utils/query";
import { Navigation } from "../styled/typos";
import pageName from "../static/pageName";
const Menu = props => {
  let { menu } = useMocks();

  const router = useRouter();
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const currentQuerryLang = router.query.lang;
  const currentPage = router.pathname;
  const { asPath } = router;

  const menuColor = props.isBlack ? "#101010" : "#FFFFFF";

  let currentTitle;
  if (currentPage !== "/article/[id]") {
    currentTitle = router.query.title;
  } else {
    currentTitle = "article";
  }

  const getMenuHeight = () => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.offsetHeight);
    }
  };
  const getScroll = () => {
    if (window.scrollY > 120 && isTop === false) {
      setIsTop(true);
    } else if (window.scrollY < 120 && isTop === true) {
      setIsTop(false);
    }
  };

  useEffect(() => {
    getMenuHeight();
    getScroll();
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("resize", () => getMenuHeight());
      return () => window.removeEventListener("resize", () => getMenuHeight());
    }
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", () => getScroll(), { passive: true });
      return () => window.removeEventListener("scroll", () => getScroll());
    }
  });

  const handleLocale = value => {
    router.replace(`/${value}${removeQuery(asPath)}`);
  };

  const MenuDesktop = styled.div`
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
    margin-bottom: -${menuHeight}px;

    background-color: ${currentPage === "/[lang]/article/[id]"
      ? props => (!props.isTop ? "white" : "black")
      : "transparent"};

    &:hover {
      .animation-menu__bkg {
        transform: translateY(0px);
      }
    }
    ${props => props.theme.medias.large`
      padding-left: 10%;
      `}
    ${props => props.theme.medias.medium`
      background-color: ${
        currentPage !== "/" ? props => props.theme.colors.black : "unset"
      };
      padding: 25px 30px ;
          margin-bottom: 0px;

  `}
  `;
  const AnimationMenu = styled.div`
    background-color: ${currentPage !== "/"
      ? props => props.theme.colors.black
      : "unset"};
    height: ${menuHeight}px;
    transform: translateY(-${menuHeight}px);
    width: 100%;
    transition: all 500ms;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    /* mix-blend-mode: difference; */
  `;

  const CustomNavigation = styled(Navigation)`
    margin-right: 60px;
    white-space: nowrap;
    color: ${menuColor};
    /* mix-blend-mode: difference; */
    &.isActive {
      border-bottom: 1px solid ${menuColor};
    }
  `;
  const CurrentPage = styled(Navigation)`
    top: 8px;
    position: relative;
    font-family: "garnett_medium";
    white-space: nowrap;
    color: ${menuColor};
    ${props => props.theme.medias.medium`
    top:14px;
   `}
  `;

  return (
    <MenuDesktop className="menu" ref={menuRef} isTop={isTop}>
      <AnimationMenu className="animation-menu__bkg"></AnimationMenu>
      <MobileNavigation>
        <Link href={`/[lang]/`} as={`/${currentQuerryLang}/`}>
          {currentPage === "/" ||
          currentPage === "/[lang]/" ||
          currentPage === "/[lang]" ? (
            <Logo src="/pictos/logo.svg" alt="Societer Logo" />
          ) : (
            <Flex style={{ height: "35px" }}>
              <MinimalLogo src="/pictos/minimal_logo.svg" alt="Societer Logo" />
              <CurrentPage>
                {pageName[currentQuerryLang][removeQuery(currentPage)]}
              </CurrentPage>
            </Flex>
          )}
        </Link>
        <Burger
          src="/pictos/burger.svg"
          onClick={() => setOpen(!isOpen)}
          alt="Burger Menu"
        />
      </MobileNavigation>
      <MenuMobile
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        content={menu.items[currentQuerryLang]}
        menuHeight={menuHeight}
      />

      <Items>
        {currentQuerryLang &&
          menu.items[currentQuerryLang].map((item, i) => (
            <Link
              key={i}
              href={{
                pathname: `/[lang]${item.path}`,
                query: { title: "plaf" }
              }}
              as={`/${currentQuerryLang}${item.path}`}
            >
              <CustomNavigation
                className={removeQuery(currentPage) === item.path && "isActive"}
              >
                {item.label}
              </CustomNavigation>
            </Link>
          ))}
        {menu.locales.map((item, i) => (
          <CustomNavigation
            key={i}
            className={router.query.lang === item.value && "isActive"}
            onClick={() => handleLocale(item.value)}
          >
            {item.label}
          </CustomNavigation>
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
  z-index: 10;
  mix-blend-mode: difference;

  ${props =>
    props.theme.medias.medium`
    transition: all 500ms;s
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
  height: 27px;
  width: auto;
  top: 4px;

  position: relative;
  cursor: pointer;

  ${props => props.theme.medias.medium`
    transition: all 500ms;
    height: 30px;
    top:6px;
   `}
`;

const Items = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
  mix-blend-mode: difference;
  ${props => props.theme.medias.medium`
    display: none;
   `}
`;
