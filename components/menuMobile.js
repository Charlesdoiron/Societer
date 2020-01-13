import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navigation } from "../styled/typos";
const isOpening = keyframes`
  0% {
    transform:translateX(100%);
  }
  100% {
     transform:translateX(0);
  }
`;

const MenuMobile = props => {
  const router = useRouter();
  const currentPage = router.pathname;
  const menuContainer = useRef(null);

  const handleClick = e => {
    menuContainer.current.style.transform = "translateX(100%)";
    setTimeout(e => {
      props.onClick(e);
    }, 600);
  };

  const Container = styled.div`
    position: fixed;
    width: 70%;
    height: 100vh;
    right: 0;
    top: 0;
    padding: 35px;
    background-color: ${props => props.theme.colors.white};
    transition: all 500ms ease-in-out;
    animation: ${isOpening} 500ms ease-in-out;
    overflow: hidden;
  `;

  if (!props.isOpen) {
    return null;
  }

  return (
    <Container ref={menuContainer}>
      <Flex>
        <Logo src="pictos/logo_mobile.svg" />
        <Close src="pictos/close_mobile.svg" onClick={() => handleClick()} />
      </Flex>
      <Items>
        {props.content.map(item => (
          <Link
            key={item.item}
            href={{ pathname: `${item.path}`, query: { title: item.item } }}
          >
            <CustomNavigation
              className={currentPage === item.path && "isActive"}
            >
              {item.item}
            </CustomNavigation>
          </Link>
        ))}
      </Items>
    </Container>
  );
};

export default MenuMobile;

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
  margin-top: 160px;
`;

const CustomNavigation = styled(Navigation)`
  margin-bottom: 30px;
  color: ${props => props.theme.colors.black};
  font-size: 20px !important;
  line-height: 28px !important;
  font-family: "garnett_medium";
  &.isActive {
    color: ${props => props.theme.colors.blue};
  }
`;
