import React from "react";
import { SmallNavigation } from "../styled/typos";
import styled from "styled-components";
import { useMocks } from "../context/mock-context";

import { useRouter } from "next/router";
const socials = () => {
  const { socials } = useMocks();

  const router = useRouter();
  const currentPage = router.pathname;
  const CustomNavigation = styled(SmallNavigation)`
    mix-blend-mode: ${currentPage !== "/[lang]" ? "difference" : "unset"};
  `;
  const Limit = styled.div`
    transition: all 500ms;
    position: relative;
    text-align: right;
    width: 80px;
    overflow: hidden;
    text-align: right;
    a {
      text-decoration: none;
    }
  `;

  const Container = styled.div`
    position: fixed;
    z-index: 200;
    right: 40px;
    top: 50%; /* poussé de la moitié de hauteur du référent */
    transform: translateY(-50%);
    mix-blend-mode: ${currentPage !== "/[lang]" ? "difference" : "unset"};
    ${props => props.theme.medias.medium`
    display:none;
   `}
  `;

  return (
    <Container>
      {socials.map((el, i) => (
        <Limit key={i}>
          <a href={el.url} target="_blank" rel="noopener">
            <CustomNavigation>{el.title}</CustomNavigation>
          </a>
        </Limit>
      ))}
    </Container>
  );
};

export default socials;
