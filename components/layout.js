import React from "react";
import Menu from "./menu";
import Socials from "./socials";
const Layout = props => {
  return (
    <>
      <Menu />
      <Socials />
      {props.children}
    </>
  );
};

export default Layout;
