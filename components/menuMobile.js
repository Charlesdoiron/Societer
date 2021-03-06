import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navigation, SmallNavigation } from "../styled/typos";
import { useMocks } from "../context/mock-context";
import { removeQuery } from "../utils/query";
import Div100vh from "react-div-100vh";
const TIME_TRANSITION = 600;

const isOpening = keyframes`
  0% {
    transform:translateX(100%);
  }
  100% {
     transform:translateX(0);
  }
`;
const isShowing = keyframes`
  0% {
    opacity:0;
  }
  100% {
     opacity:0.9;
  }
`;
const Container = styled.div`
  position: fixed;
  width: 70%;
  height: 100%;
  right: 0;
  top: 0;
  padding: 25px 30px;
  background-color: ${(props) => props.theme.colors.white};
  transition: all 500ms ease-in-out;
  animation: ${isOpening} ${TIME_TRANSITION + 100}ms ease-in-out;
  overflow: hidden;
  z-index: 900;
`;

const MenuMobile = (props) => {
  const router = useRouter();
  const currentPage = router.pathname;
  const menuContainer = useRef(null);
  const shapeRef = useRef(null);
  const { socials } = useMocks();

  const closePicto = "/pictos/close_mobile.svg";
  const transitionOnClose = () => {
    menuContainer.current.style.transform = "translateX(100%)";
    shapeRef.current.style.opacity = "0";
  };

  const closeMenu = (item) => {
    if (item === "close") {
      transitionOnClose();
      setTimeout(() => {
        props.onClick();
      }, TIME_TRANSITION);
    } else if (item === "/") {
      transitionOnClose();
      setTimeout(() => {
        props.onClick();
        router.push({
          pathname: `/${router.query.lang}/`,
        });
      }, TIME_TRANSITION);
    } else if (currentPage !== item.path) {
      transitionOnClose();

      setTimeout(() => {
        props.onClick();
        router.push(
          {
            pathname: `/[lang]${item.path}`,
            query: { title: item.item },
          },
          `/${router.query.lang}${item.path}`
        );
      }, TIME_TRANSITION);
    }
  };

  if (!props.isOpen) {
    return null;
  }
  const handleLocale = (value) => {
    closeMenu("close");
    setTimeout(() => {
      router.replace(`/${value}${removeQuery(router.asPath)}`);
    }, TIME_TRANSITION);
  };

  return (
    <>
      <Div100vh style={{ position: "absolute" }}>
        <Container ref={menuContainer}>
          <Flex>
            {/* <Logo src="/pictos/logo_mobile.svg" /> */}
            <div></div>
            <Close src={closePicto} onClick={() => closeMenu("close")} />
          </Flex>
          <Items>
            <CustomNavigation
              onClick={() => closeMenu("/")}
              className={currentPage === "/" && "isActive"}
            >
              {router.query.lang === "fr" ? "Accueil" : "Home"}
            </CustomNavigation>
            {props.content.map((item, i) => (
              <CustomNavigation
                key={i}
                onClick={() => closeMenu(item)}
                className={currentPage === item.path && "isActive"}
              >
                {item.label}
              </CustomNavigation>
            ))}
          </Items>
          <Languages>
            <Language
              onClick={(e) => {
                e.preventDefault();
                handleLocale("fr");
              }}
              className={router.query.lang === "fr" && "isActive"}
            >
              fr
            </Language>
            <Language
              onClick={(e) => {
                e.preventDefault();
                handleLocale("en");
              }}
              className={router.query.lang === "en" && "isActive"}
            >
              en
            </Language>
          </Languages>
          <Absolute>
            <Socials>
              {socials.map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener">
                  <Social>{social.title}</Social>
                </a>
              ))}
            </Socials>
          </Absolute>
        </Container>
      </Div100vh>
      <Shape
        ref={shapeRef}
        onClick={() => closeMenu("close")}
        menuHeight={props.menuHeight}
      />
    </>
  );
};

export default MenuMobile;

const Shape = styled.div`
  background: ${(props) => props.theme.colors.blue};
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: ${(props) => props.menuHeight}px;
  bottom: 0;
  z-index: 0;
  opacity: 0.9;
  transition: all 1000ms;
  animation: ${isShowing} 700ms ease-in-out;

  overflow: hidden;
`;
const Absolute = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-around;
  bottom: 10px;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  a {
    text-decoration: none;
  }
`;
const Social = styled(SmallNavigation)`
  color: ${(props) => props.theme.colors.black};
`;
const Languages = styled.div`
  display: flex;
`;
const Language = styled(SmallNavigation)`
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 100%;
  margin-bottom: 0 auto 45px auto;
  color: ${(props) => props.theme.colors.black};
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  vertical-align: middle;
  padding: 2px;
  line-height: unset;
  transition: all 500ms;
  margin: 0px 30px 30px 0;
  &.isActive {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.blue};
    font-family: "garnett_medium";
  }
  &:hover {
    transition: all 500ms;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.blue};
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const Logo = styled.img`
  width: 68px;
`;

const Close = styled.img`
  width: 13px;
  right: 2px;
  position: relative;
  cursor: pointer;
`;

const Items = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 70px;
`;

const CustomNavigation = styled(Navigation)`
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.black};
  font-size: 20px !important;
  line-height: 28px !important;
  font-family: "garnett_regular";
  &.isActive {
    color: ${(props) => props.theme.colors.blue};
    font-family: "garnett_medium";
  }
`;

//href={{ pathname: `${item.path}`, query: { title: item.item } }}
