import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../config/theme/globalStyles";

import Layout from "../components/layout";

import { MockProvider } from "../context";
import { theme } from "../config/";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <MockProvider>
            <GlobalStyles />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MockProvider>
        </ThemeProvider>
      </>
    );
  }
}
