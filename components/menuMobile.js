import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navigation, SmallNavigation } from "../styled/typos";
import { useMocks } from "../context/mock-context";

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

const MenuMobile = props => {
  const router = useRouter();
  const currentPage = router.pathname;
  const menuContainer = useRef(null);
  const shapeRef = useRef(null);
  const { socials } = useMocks();

  const transitionOnClose = () => {
    menuContainer.current.style.transform = "translateX(100%)";
    shapeRef.current.style.opacity = "0";
  };

  const closeMenu = item => {
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
          pathname: "/"
        });
      }, TIME_TRANSITION);
    } else if (currentPage !== item.path) {
      transitionOnClose();

      setTimeout(() => {
        props.onClick();
        router.push({
          pathname: item.path,
          query: { title: item.item }
        });
      }, TIME_TRANSITION);
    }
  };

  const Container = styled.div`
    position: fixed;
    width: 70%;
    height: 100vh;
    right: 0;
    top: 0;
    padding: 25px 30px;
    background-color: ${props => props.theme.colors.white};
    transition: all 500ms ease-in-out;
    animation: ${isOpening} ${TIME_TRANSITION + 100}ms ease-in-out;
    overflow: hidden;
    z-index: 900;
  `;

  if (!props.isOpen) {
    return null;
  }

  return (
    <>
      <Container ref={menuContainer}>
        <Flex>
          <Logo src="pictos/logo_mobile.svg" />
          <Close
            src="pictos/close_mobile.svg"
            onClick={() => closeMenu("close")}
          />
        </Flex>
        <Items>
          <CustomNavigation
            onClick={() => closeMenu("/")}
            className={currentPage === "/" && "isActive"}
          >
            Accueil
          </CustomNavigation>
          {props.content.map((item, i) => (
            <CustomNavigation
              key={i}
              onClick={() => closeMenu(item)}
              className={currentPage === item.path && "isActive"}
            >
              {item.item}
            </CustomNavigation>
          ))}
        </Items>
        {/* <Languages>
          <Language>Fr</Language>
          <Language>En</Language>
        </Languages> */}
        <Absolute>
          <Socials>
            {socials.map((social, i) => (
              <a key={i} href={social.url} target="_blank">
                <Social>{social.name}</Social>
              </a>
            ))}
          </Socials>
        </Absolute>
      </Container>
      <Shape ref={shapeRef} onClick={() => closeMenu("close")} />
    </>
  );
};

export default MenuMobile;

const Shape = styled.div`
  background: ${props => props.theme.colors.blue};
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.9;
  transition: all 1000ms;
  animation: ${isShowing} 700ms ease-in-out;
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
  justify-content: space-between;
  bottom: 80px;
  position: relative;
  width: 100%;
  a {
    text-decoration: none;
  }
`;
const Social = styled(SmallNavigation)`
  color: ${props => props.theme.colors.black};
`;
const Languages = styled.div`
  display: flex;
`;
const Language = styled(SmallNavigation)`
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 100%;
  margin-bottom: 0 auto 45px auto;
  color: ${props => props.theme.colors.black};
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
    border: 1px solid ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.blue};
  }
  ${props => props.theme.medias.mediumPlus`
      margin: 30px 30px 30px 0 ;
    `}
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
  color: ${props => props.theme.colors.black};
  font-size: 20px !important;
  line-height: 28px !important;
  font-family: "garnett_regular";
  &.isActive {
    color: ${props => props.theme.colors.blue};
    font-family: "garnett_medium";
  }
`;

//href={{ pathname: `${item.path}`, query: { title: item.item } }}
