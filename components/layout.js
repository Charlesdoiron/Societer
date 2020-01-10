import React from "react";
import Menu from "./menu";
const Layout = props => {
  return (
    <>
      <Menu />
      {props.children}
    </>
  );
};

export default Layout;
