import React, { useEffect } from "react";
import Menu from "../components/menu";
import Socials from "./socials";
import { useRouter } from "next/router";
import AOS from "aos";
const Layout = props => {
  const router = useRouter();
  const currentPage = router.pathname;
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <>
      <Menu />
      {currentPage !== "/[lang]/contact" && <Socials />}
      {props.children}
    </>
  );
};

export default Layout;
