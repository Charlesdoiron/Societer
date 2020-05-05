import React, { useEffect } from "react";
import Head from "next/head";
import { getInitialLocale } from "../translations/getInitialLocale.js";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/[lang]", `/${getInitialLocale()}/`);
  });
  return (
    <Head>
      <meta name="robots" />
    </Head>
  );
};

export default Index;
