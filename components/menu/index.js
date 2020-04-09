import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import {
  Burger,
  Logo,
  MobileNavigation,
  MinimalLogo,
  Flex,
  Items,
  MenuDesktop,
  CurrentPage,
  CustomNavigation,
} from "./styed";
import MenuMobile from "../menuMobile";

import { useRouter } from "next/router";
import Router from "next/router";
import { useMocks } from "../../context/mock-context";
import { removeQuery } from "../../utils/query";
import { Navigation } from "../../styled/typos";
import pageName from "../../static/pageName";

const Menu = (props) => {
  const { menu } = useMocks();
  const router = useRouter();

  const { asPath } = router;
  const currentQuerryLang = router.query.lang;
  const currentPage = router.pathname;

  const [menuHeight, setMenuHeight] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const [animationStart, setAnimationStart] = useState(false);
  const [animationFinish, setAnimationFinish] = useState(false);

  const menuRef = useRef(null);

  const animate = useSpring({
    transform: animationStart ? "translateX(10px)" : "translateX(0px)",
    opacity: animationStart ? 0 : 1,
  });

  const animateUp = useSpring({
    transform: animationStart ? "translateY(-25px)" : "translateY(0px)",
    opacity: animationStart ? 0 : 1,
  });

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
    Router.events.on("routeChangeStart", (url) => setAnimationStart(true));
    return () => {
      Router.events.off("routeChangeStart", (url) => setAnimationStart(true));
    };
  }, [currentPage]);

  useEffect(() => {
    Router.events.on("routeChangeComplete", () => setAnimationStart(false));
    return () => {
      Router.events.off("routeChangeComplete", () => setAnimationStart(false));
    };
  }, [currentPage]);

  console.log(animationStart, "animationStart");
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

  const handleLocale = (value) => {
    router.replace(`/${value}${removeQuery(asPath)}`);
  };

  const MenuContainer = styled(MenuDesktop)`
    background-color: ${currentPage === "/[lang]/article/[id]"
      ? (props) => (!props.isTop ? "white" : "black")
      : currentPage === "/[lang]/public-debat"
      ? (props) => (!props.isTop ? "transparent" : "black")
      : "transparent"};

    ${(props) => props.theme.medias.medium`
      padding: 25px 30px ;
      margin-bottom: 0px;
    `}
  `;

  const AnimationMenu = styled.div`
    background-color: ${currentPage !== "/[lang]" &&
    currentPage !== "/[lang]/contact"
      ? (props) => props.theme.colors.black
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
  `;

  const toggleMenu = () => {
    setOpen(!isOpen);
    document.querySelector("body").classList.toggle("menuIsOpen");
  };

  return (
    <MenuContainer className="menu" ref={menuRef} isTop={isTop}>
      <AnimationMenu className="animation-menu__bkg"></AnimationMenu>
      <MobileNavigation>
        <Link href={`/[lang]`} as={`/${currentQuerryLang}/`}>
          {currentPage === "/" ||
          currentPage === "/[lang]/" ||
          currentPage === "/[lang]" ? (
            <animated.div style={animate}>
              <Logo src="/pictos/logo.svg" alt="Societer Logo" />
            </animated.div>
          ) : (
            <Flex style={{ height: "35px" }}>
              {/* <animated.div style={animate}> */}
              <MinimalLogo src="/pictos/minimal_logo.svg" alt="Societer Logo" />
              {/* </animated.div> */}
              <animated.div style={animateUp}>
                <CurrentPage>
                  {pageName[currentQuerryLang][removeQuery(currentPage)]}
                </CurrentPage>{" "}
              </animated.div>
            </Flex>
          )}
        </Link>
        <Burger
          src="/pictos/burger.svg"
          onClick={() => toggleMenu()}
          alt="Burger Menu"
        />
      </MobileNavigation>
      <MenuMobile
        isOpen={isOpen}
        onClick={() => toggleMenu()}
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
    </MenuContainer>
  );
};
export default Menu;
