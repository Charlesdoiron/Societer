import { useEffect } from "react";
import { SmallNavigation } from "../styled/typos";
import styled from "styled-components";
import { useMocks } from "../context/mock-context";
import { useRouter } from "next/router";

const CustomNavigation = styled(SmallNavigation)`
  transition: all 1s;
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
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    transition: all 400ms;
  }
`;
const Container = styled.div`
  position: fixed;
  z-index: 200;
  right: 60px;
  top: 50%; /* poussé de la moitié de hauteur du référent */
  transform: translateY(-50%);
  mix-blend-mode: ${(props) =>
    props.currentPage !== "/[lang]" && props.currentPage !== "/[lang]/"
      ? "difference"
      : "unset"};
  ${(props) => props.theme.medias.medium`
    display:none;
   `}
`;
const socials = (props) => {
  const { socials } = useMocks();

  useEffect(() => {
    const animateRsx = (initials, fullName) => {
      const el = document.getElementById(fullName);
      el.innerHTML = initials;

      el.addEventListener("mouseover", () => {
        el.style.opacity = "0.1";
        setTimeout(() => {
          el.innerHTML = fullName;
          el.style.opacity = "1";
        }, 300);
      });
      el.addEventListener("mouseleave", () => {
        el.style.opacity = "0.1";
        setTimeout(() => {
          el.innerHTML = initials;
          el.style.opacity = "1";
        }, 300);
      });
    };
    socials.map(({ initials, fullName }) => {
      animateRsx(initials, fullName);
    });
  });
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <Container currentPage={currentPage}>
      <Limit>
        {socials.map(({ fullName, url }) => {
          return (
            <a key={fullName} href={url} target="_blank" rel="noopener">
              <CustomNavigation id={fullName}></CustomNavigation>
            </a>
          );
        })}
      </Limit>
    </Container>
  );
};

export default socials;
