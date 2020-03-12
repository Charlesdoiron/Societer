import React, { useEffect } from "react";
import Menu from "../components/menu";
import Socials from "./socials";
import { useRouter } from "next/router";

const Layout = props => {
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <>
      <Menu />
      {currentPage !== "/[lang]/contact" && <Socials />}
      {props.children}
    </>
  );
};

export default Layout;
