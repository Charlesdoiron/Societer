import React from "react";
import Menu from "./menu";
import Socials from "./socials";
import { useRouter } from "next/router";
const Layout = props => {
  const router = useRouter();
  const currentPage = router.pathname;
  return (
    <>
      <Menu />
      {currentPage !== "/contact" && <Socials />}

      {props.children}
    </>
  );
};

export default Layout;
