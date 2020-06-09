import React, { useEffect } from "react";
import Menu from "../components/menu";
import Socials from "./socials";
import { useRouter } from "next/router";
import Link from "next/link";

const Layout = (props) => {
  const router = useRouter();
  const currentPage = router.pathname;
  console.log(currentPage);
  return (
    <>
      {/* <Menu /> */}
      <div
        style={{
          paddingTop: "30px",
          paddingBottom: "100px",
          backgroundColor: "#121212",
          color: "white",
        }}
      >
        <Link href={"/[lang]/vision"} as={"/fr/vision"}>
          <p style={{ color: "white" }}>vision</p>
        </Link>
        <Link href={"/[lang]/public-debat"} as={"/fr/public-debat"}>
          <p
            style={
              currentPage === "/[lang]/vision"
                ? { border: "1px solid white" }
                : {}
            }
          >
            Débat
          </p>
        </Link>
      </div>
      {currentPage !== "/[lang]/contact" && <Socials />}
      {props.children}
    </>
  );
};

export default Layout;
